const models = require('../models');

module.exports = {
  get: (req, res, next) => {
    const id = req.params.id;

    models.Trip.find().populate('postId')
      .then((trips) => res.send(trips))
      .catch(next);
  },

  post: (req, res, next) => {
    const { description, destination, imageUrl } = req.body;
    const { _id } = req.user;
    const { username} = req.user;

    models.Trip.create({ description, destination, imageUrl, author: username })
      .then((createdTrip) => {
        return Promise.all([
          models.User.updateOne({ _id }, { $push: { posts: createdTrip } }),
          models.Trip.findOne({ _id: createdTrip._id })
        ]);
      })
      .then(([modifiedObj, tripObj]) => {
        res.send(tripObj);
      })
      .catch(next);
  },

  put: (req, res, next) => {
    const id = req.params.id;
    const {description, destination, imageUrl } = req.body;
    models.Trip.updateOne({ _id: id }, {description, destination, imageUrl })
      .then((updatedTrip) => res.send(updatedTrip))
      .catch(next)
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    models.Trip.deleteOne({ _id: id })
      .then((removedTrip) => res.send(removedTrip))
      .catch(next)
  }
};
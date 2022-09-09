const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.trip.get);

router.post('/', auth(), controllers.trip.post);

router.put('/:id', auth(), controllers.trip.put);

router.delete('/:id', auth(), controllers.trip.delete);


module.exports = router;
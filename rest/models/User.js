const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const userSchema = new Schema({

    username: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        require: true
    },

    email:{
        type: String,
        require: true
    },

    posts: [{ type: ObjectId, ref: "Trip" }]

});

userSchema.methods = {

    matchPassword: function (password) {
        return bcrypt.compare(password, this.password);
    }

};

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) { next(err); return }
                this.password = hash;
                next();
            });
        });
        return;
    }
    next();
});
// let User = mongoose.model('User', userSchema)
//
// module.exports = User
// module.exports.seedAdminUser = () => {
//     User.find({}).then(users => {
//         if (users.length > 0) return
//
//         User.create({
//             email: 'admin@admin.com',
//             username: 'Admin',
//             password: '1234',
//             roles: ['Admin']
//         })
//     })
// }

module.exports = new Model('User', userSchema);
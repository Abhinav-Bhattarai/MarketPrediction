import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },

    Password: {
        type: String,
        required: true
    },

    Email: {
        type: String,
        required: true
    },

    RegistrationDate: {
        type: String,
        default: new Date(parseInt(Date.now())).toDateString()
    },

    UserID: {
        type: String,
        default: Math.floor(Math.random() * 1000000).toString()
    }
});

export const UserModel = mongoose.model('UserModel', UserSchema);
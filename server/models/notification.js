import mongoose from 'mongoose';

const notifSchema = mongoose.Schema({

    message: String,
    type:String,
    user:String,
 
})

var Notif = mongoose.model('Notifications', notifSchema);

export default Notif;
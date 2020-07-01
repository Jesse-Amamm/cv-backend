const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate-v2");
const NotificationSchema = mongoose.Schema({
    description: {type: String, required: true},
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
}, {
    timestamps: true,
});
NotificationSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Notification', NotificationSchema);

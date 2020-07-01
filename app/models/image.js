const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate-v2");
const ImageSchema = mongoose.Schema({
    url: {type: String, required: true},
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    forum_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Forum', required: true},
}, {
    timestamps: true,
});
ImageSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Image', ImageSchema);

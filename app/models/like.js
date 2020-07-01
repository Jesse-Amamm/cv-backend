const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate-v2");
const LikeSchema = mongoose.Schema({
    post_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true},
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
}, {
    timestamps: true,
});
LikeSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Like', LikeSchema);

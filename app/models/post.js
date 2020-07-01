const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate-v2");
const PostSchema = mongoose.Schema({
    name: {type: String, required: true},
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    description: {type: String, required: true},
}, {
    timestamps: true,
});
PostSchema.pre('remove', function(next) {
    this.model('Image').remove({ post_id: this._id }, next);
 //   this.model('Review').remove({ Post_id: this._id }, next);
});
PostSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Post', PostSchema);

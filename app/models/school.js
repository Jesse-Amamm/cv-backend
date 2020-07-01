const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate-v2");
const SchoolSchema = mongoose.Schema({
    name: {type: String, required: true},
    added_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
}, {
    timestamps: true,
});
SchoolSchema.pre('remove', function(next) {
   // this.model('State').remove({ School_id: this._id }, next);
});
SchoolSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('School', SchoolSchema);

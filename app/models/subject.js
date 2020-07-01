const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate-v2");
const SubjectSchema = mongoose.Schema({
    name: {type: String, required: true},
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    level_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Level', required: true},
    semester_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Semester', required: true},
    grade: {type: String, required: true},
}, {
    timestamps: true,
});
SubjectSchema.pre('remove', function(next) {
    this.model('Image').remove({ post_id: this._id }, next);
 //   this.model('Review').remove({ Subject_id: this._id }, next);
});
SubjectSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Subject', SubjectSchema);

const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate-v2");
const SemesterSchema = mongoose.Schema({
    name: {type: String, required: true},
    added_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
}, {
    timestamps: true,
});
SemesterSchema.pre('remove', function(next) {
   // this.model('State').remove({ Semester_id: this._id }, next);
});
SemesterSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Semester', SemesterSchema);

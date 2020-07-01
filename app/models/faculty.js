const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate-v2");
const FacultySchema = mongoose.Schema({
    name: {type: String, required: true},
    school_id: { type: mongoose.Schema.Types.ObjectId, ref: 'School', required: true},
    added_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
}, {
    timestamps: true,
});
FacultySchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Faculty', FacultySchema);

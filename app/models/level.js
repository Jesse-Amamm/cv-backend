const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate-v2");
const LevelSchema = mongoose.Schema({
    name: {type: String, required: true},
    added_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
}, {
    timestamps: true,
});
LevelSchema.pre('remove', function(next) {
   // this.model('State').remove({ Level_id: this._id }, next);
});
LevelSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Level', LevelSchema);

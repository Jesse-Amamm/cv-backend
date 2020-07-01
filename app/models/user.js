const mongoose = require("mongoose"),
  bcrypt = require("bcrypt"),
  SALT_WORK_FACTOR = 10;
const mongoosePaginate = require("mongoose-paginate-v2");

const UserSchema = mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    username: { type: String, required: true },
    mobile_number: { type: String, required: true },
    email: {
      type: String,
      required: true,
      index: { unique: true },
      lowercase: true
    },
    password: { type: String, required: true },
    device_token: { type: String },
    device_type: { type: String },
    device_language: { type: String },
    profile_url: { type: String },
    role: {
      type: String,
      default: "student",
      enum: [
        "student",
        "admin",
        "super-admin"
      ]
    },
    verified: { type: Boolean, default: false },
    verification_code: { type: String },
    school_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: true
    },
    verified_url: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Verify",
    }
  },
  {
    timestamps: true
    //  strict: false
  }
);
UserSchema.pre("remove", function(next) {
  // this.model("Shipping").remove({ user_id: this._id }, next);
  // this.model("Review").remove({ user_id: this._id }, next);
  // this.model("Order").remove({ user_id: this._id }, next);
  // this.model("Cart").remove({ user_id: this._id }, next);
  this.model('Image').remove({ user_id: this._id }, next);

});
UserSchema.pre("save", function(next) {
  var user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();
  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);
    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

UserSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("User", UserSchema);

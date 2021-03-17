const { Schema, model } = require('mongoose');

const ratingSchema = new Schema({
  placeId: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  nickName: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  avatar: {
    type: String,
    require: true,
  },
  feedbackText: {
    type: String,
  },
});

const Rating = model('Rating', ratingSchema);

module.exports = Rating;

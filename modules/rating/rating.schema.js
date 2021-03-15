const { Schema, model } = require('mongoose');

const ratingSchema = new Schema({
  placeId: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  userNickName: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
});

const Rating = model('Rating', ratingSchema);

module.exports = Rating;

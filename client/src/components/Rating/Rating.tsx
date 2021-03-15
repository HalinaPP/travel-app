import React, { FC, Fragment } from 'react';
import './Rating.scss';
import { RatingProps } from './Rating.model';

const Rating: FC<RatingProps> = () => {
  const postRating = async (e: any) => {
    const rating = {
      placeId: '604bd42131ad45b7d20d1e55',
      nickName: 'Vasya',
      rating: e.target.value,
    };
    console.log(rating);
    await fetch('http://localhost:3005/countries/604bd3b731ad45b7d20d1e54', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rating),
    });
  };
  return (
    <div className="rating">
      <input onClick={(e) => postRating(e)} value="5" type="radio" name="rating" id="rat5" />
      <label className="material-icons" htmlFor="rat5">
        star_rate
      </label>
      <input onClick={(e) => postRating(e)} value="4" type="radio" name="rating" id="rat4" />
      <label className="material-icons" htmlFor="rat4">
        star_rate
      </label>
      <input onClick={(e) => postRating(e)} value="3" type="radio" name="rating" id="rat3" />
      <label className="material-icons" htmlFor="rat3">
        star_rate
      </label>
      <input onClick={(e) => postRating(e)} value="2" type="radio" name="rating" id="rat2" />
      <label className="material-icons" htmlFor="rat2">
        star_rate
      </label>
      <input onClick={(e) => postRating(e)} value="1" type="radio" name="rating" id="rat1" />
      <label className="material-icons" htmlFor="rat1">
        star_rate
      </label>
    </div>
  );
};

export default Rating;

// const radioGroup = Array(5).map((_, i) => {
//   const id = `rat${i + 1}`;
//   return (
//     <>
//       <input type="radio" name="rating" id={id} />
//       <label htmlFor={id}>{i + 1}</label>
//     </>
//   );
// });

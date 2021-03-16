import React, { FC, Fragment } from 'react';
import './Rating.scss';
import { RatingProps } from './Rating.model';
import { findNickName } from '../../utils/helpers';

const Rating: FC<RatingProps> = ({ placeId, currCountry: { id, ratings } }) => {
  const nick = `Vasya${Math.round(Math.random() * 100)}`;
  const avatar = 'https://picsum.photos/200/300';
  const alreadyRated = findNickName(ratings, nick);
  const postRating = async (e: any) => {
    const rating = {
      placeId,
      nickName: nick,
      rating: e.target.value,
      avatar,
    };
    await fetch(`http://localhost:3005/countries/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rating),
    });
  };
  const ratingClassName = alreadyRated !== undefined ? 'Rating disabled' : 'Rating';
  const renderRadioGroup = [5, 4, 3, 2, 1].map(e => (
    <Fragment>
      <input
        onClick={evt => postRating(evt)}
        value={e}
        type="radio"
        name="rating"
        id={`rat${e}`}
        defaultChecked={alreadyRated?.rating === e}
        disabled={alreadyRated !== undefined}
      />
      <label className="material-icons" htmlFor={`rat${e}`}>
        star_rate
      </label>
    </Fragment>
  ));
  return <div className={ratingClassName}>{renderRadioGroup}</div>;
};

export default Rating;

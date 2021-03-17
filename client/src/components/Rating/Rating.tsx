import React, { FC, Fragment, useContext, useState } from 'react';
import './Rating.scss';
import { RatingProps } from './Rating.model';
import { findNickName } from '../../utils/helpers';
import { LanguageContext } from '../../utils/LanguageContext';
import { API_COUNTRIES_URLS } from '../../constants/constants';

const Rating: FC<RatingProps> = ({ placeId, currCountry: { id, ratings }, getCountryByIdFromApi }) => {
  const { lang: currLang } = useContext(LanguageContext);
  const nick = `Vasya${Math.round(Math.random() * 100)}`;
  const avatar = 'https://picsum.photos/200/300';
  const alreadyRated = findNickName(ratings, nick);
  const [curRating, setCurRating] = useState(alreadyRated?.rating || 0);
  const [feedbackText, setFeedbackText] = useState('');

  const postRating = async () => {
    const rating = {
      placeId,
      nickName: nick,
      rating: curRating,
      avatar,
      feedbackText,
    };
    await fetch(`${API_COUNTRIES_URLS}${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rating),
    });
    getCountryByIdFromApi(id, currLang);
  };

  const handleRatingChange = (e: any) => {
    setCurRating(e.target.value);
  };
  const handleTextAreaChange = (e:any) => {
    setFeedbackText(e.target.value);
  };

  const ratingClassName = alreadyRated !== undefined ? 'Rating disabled' : 'Rating';
  const renderRadioGroup = [5, 4, 3, 2, 1].map(e => (
    <Fragment>
      <input
        onClick={evt => handleRatingChange(evt)}
        value={e}
        type="radio"
        name="rating"
        id={`rat${e}`}
        defaultChecked={curRating === e}
        disabled={!!alreadyRated}
      />
      <label className="material-icons" htmlFor={`rat${e}`}>
        star_rate
      </label>
    </Fragment>
  ));
  return (
    <div className="feedback__form">
      <label className="title" htmlFor="feedback-textarea">Leave your feedback:</label>
      <div className={ratingClassName}>
        {renderRadioGroup}</div>
      <textarea
        className="feedback-textarea"
        name="feedback-textarea"
        wrap="off"
        rows={5}
        cols={33}
        onChange={handleTextAreaChange}
        defaultValue={feedbackText}
      >
      </textarea>
      <button className="btn btn--ghost" onClick={postRating}>
        leave feedback
      </button>
    </div>
  );
};

export default Rating;

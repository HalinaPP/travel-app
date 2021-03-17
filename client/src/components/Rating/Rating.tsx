import React, { FC, Fragment, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import './Rating.scss';
import { RatingProps } from './Rating.model';
import { findNickName } from '../../utils/helpers';
import { LanguageContext } from '../../utils/LanguageContext';
import { API_COUNTRIES_URLS } from '../../constants/constants';
import translation from '../../constants/translation';

const Rating: FC<RatingProps> = ({ placeId, currCountry: { id, ratings }, getCountryByIdFromApi, addFeedback }) => {
  const user = useSelector((state: any) => state.user);
  const { nickname, avatar } = user || { nickname: null, avatar: null };
  const isUserLogged = !!user;
  const { lang: currLang } = useContext(LanguageContext);
  const alreadyRated = findNickName(ratings, nickname, placeId as string);
  const [curRating, setCurRating] = useState(alreadyRated?.rating || 0);
  const [feedbackText, setFeedbackText] = useState(alreadyRated?.feedbackText || '');

  const postRating = async (e: any) => {
    const rating = {
      placeId,
      nickName: nickname,
      rating: curRating,
      avatar,
      feedbackText,
    };
    await fetch(`${API_COUNTRIES_URLS}/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rating),
    });
    getCountryByIdFromApi(id, currLang);
    addFeedback(rating);
  };

  const handleRatingChange = (e: any) => {
    setCurRating(e.target.value);
  };
  const handleTextAreaChange = (e: any) => {
    setFeedbackText(e.target.value);
  };

  const disabled = alreadyRated !== undefined || !isUserLogged;
  const renderRadioGroup = [5, 4, 3, 2, 1].map(e => (
    <Fragment key={uuidv4()}>
      <input
        onClick={evt => handleRatingChange(evt)}
        value={e}
        type="radio"
        name="rating"
        id={`rat${e}`}
        defaultChecked={Number(curRating) === e}
        disabled={!!alreadyRated}
      />
      <label className="material-icons" htmlFor={`rat${e}`}>
        star_rate
      </label>
    </Fragment>
  ));
  return (
    <div className="feedback__form">
      <label className="title" htmlFor="feedback-textarea">
        {alreadyRated ? translation[currLang].feedbackThanks : translation[currLang].feedbackLeave}
      </label>
      <div className={`Rating ${disabled ? 'disabled' : ''}`}>{renderRadioGroup}</div>
      <textarea
        className={`feedback-textarea ${disabled ? 'disabled' : ''}`}
        name="feedback-textarea"
        wrap="off"
        rows={5}
        cols={33}
        onChange={handleTextAreaChange}
        defaultValue={feedbackText}
        disabled={disabled}
      ></textarea>
      <button className={`btn btn--ghost ${disabled ? 'disabled' : ''}`} onClick={postRating}>
        leave feedback
      </button>
    </div>
  );
};

export default Rating;

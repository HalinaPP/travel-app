import React, { FC, Fragment, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { StateModel } from '../../reducers/index';
import './Rating.scss';
import { RatingProps } from './Rating.model';
import { findNickName } from '../../utils/helpers';
import { LanguageContext } from '../../utils/LanguageContext';
import { API_COUNTRIES_URLS } from '../../constants/constants';
import translation from '../../constants/translation';

const Rating: FC<RatingProps> = ({ placeId, currCountry: { id, ratings }, getCountryByIdFromApi, addFeedback }) => {
  const user = useSelector((state: StateModel) => state.user);
  const { nickname, avatar } = user || { nickname: null, avatar: null };
  const isUserLogged = !!user;
  const { lang: currLang } = useContext(LanguageContext);
  /* eslint-disable @typescript-eslint/no-non-null-assertion */
  const alreadyRated = findNickName(ratings, nickname!, placeId as string);
  const [curRating, setCurRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState('');
  const postRating = async () => {
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
    setFeedbackText('');
    setCurRating(0);
  };
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const handleRatingChange = ({ target }: any) => {
    setCurRating(target.value);
  };
  const handleTextAreaChange = ({ target }: any) => {
    setFeedbackText(target.value);
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
        value={feedbackText}
        onChange={handleTextAreaChange}
        disabled={disabled}
      />
      <button className={`btn btn--ghost ${disabled ? 'disabled' : ''}`} onClick={postRating}>
        leave feedback
      </button>
    </div>
  );
};

export default Rating;

import React, { FC, Fragment, useContext } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './Rating.scss';
import { RatingProps } from './Rating.model';
import { findNickName } from '../../utils/helpers';
import { LanguageContext } from '../../utils/LanguageContext';

const Rating: FC<RatingProps> = ({ placeId, currCountry: { id, ratings }, getCountryByIdFromApi }) => {
  const user = useSelector((state: any) => state.user);
  const { nickname, avatar } = user || { nickname: null, avatar: null };
  const isUserLogged = !!user;
  const { lang: currLang } = useContext(LanguageContext);
  const alreadyRated = findNickName(ratings, nickname, placeId as string);
  const postRating = async (e: any) => {
    const rating = {
      placeId,
      nickName: nickname,
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
    getCountryByIdFromApi(id, currLang);
  };
  console.log(isUserLogged, alreadyRated);
  const ratingClassName = alreadyRated !== undefined || !isUserLogged ? 'Rating disabled' : 'Rating';
  const renderRadioGroup = [5, 4, 3, 2, 1].map(e => (
    <Fragment key={uuidv4()}>
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

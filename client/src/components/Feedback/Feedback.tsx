import React, { useEffect, FC, useCallback } from 'react';
import './feedback.scss';
import { FeedbackProps } from './Feedback.model';
import { setInnerHtml, countRate } from '../../utils/helpers';
import { RatingContainer } from '../../containers/Rating.container';

const Feedback: FC<FeedbackProps> = ({ setIsOpen, isOpen, sight, ratings }) => {
  const avatar = '/images/avatar.png';
  const rate = countRate(ratings);

  const closeModal = (e: any) => {
    setIsOpen(false);
    if (e.target.classList.contains('feedback__overlay')) {
      setIsOpen(false);
    }
  };

  const sightUserRatings = useCallback(
    () => (
      <div className="feedback_container">
        {ratings.map((oneRating, index) => {
          const key = `rat_${index}`;
          return (
            <div className="user__block" key={key}>
              <div className="rating">
                {oneRating.rating}
                <div className="icon--star icon" />
              </div>
              <div className="user_data">
                <img src={avatar} alt="" className="avatar" />
                <div className="user_name">{oneRating.nickName}</div>
              </div>
            </div>
          );
        })}
      </div>
    ),
    [ratings],
  );
  useEffect(
    () => {
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
      document.body.style.paddingRight = isOpen ? '17px' : '0';
    },
    [isOpen],
  );
  return (
    <div
      className={isOpen ? 'fadeIn feedback__overlay' : 'fadeOut feedback__overlay'}
      onClick={(e) => {
        closeModal(e);
      }}
    >
      <div className={isOpen ? 'slideIn feedback__popup' : 'slideOut feedback__popup'}>
        <div className="popup_image" style={{ backgroundImage: `url(${sight.imageUrl})` }}>
          <div className="rating">
            {rate}
            <div className="icon--star icon" />
          </div>
        </div>
        <h2 className="popup_title">{sight.name}</h2>
        <div className="text" dangerouslySetInnerHTML={setInnerHtml(sight.description)} />
        <RatingContainer placeId={sight.id} />
        {sightUserRatings()}
      </div>
    </div>
  );
};

export default Feedback;

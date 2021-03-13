import React, { useEffect } from 'react';
import './feedback.scss';
import { SIGHTS } from '../../constants/constants';
import { FeedbackProps } from './Feedback.model';

const Feedback: any = ({ setIsOpen, isOpen }: FeedbackProps) => {
  // any data, need logic:
  const popupTitle = 'big lakes';
  const countryName = 'canada';
  const avatar = '/images/avatar.png';

  const closeModal = (e: any) => {
    setIsOpen(false);
    if (e.target.classList.contains('feedback__overlay')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    document.body.style.paddingRight = isOpen ? '17px' : '0';
  }, [isOpen]);

  return (
    <div
      className={isOpen ? 'fadeIn feedback__overlay' : 'fadeOut feedback__overlay'}
      onClick={(e) => {
        closeModal(e);
      }}
    >
      <div className={isOpen ? 'slideIn feedback__popup' : 'slideOut feedback__popup'}>
        <div className="popup_image">
          <div className="rating">
            {/* dummy data */}
            {SIGHTS[countryName][0].rate}
            <div className="icon--star icon"></div>
          </div>
        </div>
        <h2 className="popup_title">{popupTitle}</h2>
        <button className="btn btn--ghost">
          {' '}
          <img src="/icons/feedback.png" alt="" className="btn_icon" />
          leave feedback
        </button>
        <div className="feedback_container">
          <div className="user__block">
            <div className="bubble">
              <div className="rating">
                {/* dummy data */}
                {SIGHTS[countryName][0].rate}
                <div className="icon--star icon"></div>
              </div>
              <div className="date">20 December 2020</div>
              <div className="text">
                Awesome place to observe my favourite aligators at Florida, the quality of the video is great.{' '}
              </div>
            </div>
            <div className="user_data">
              <img src={avatar} alt="" className="avatar" />
              <div className="user_name">Amely</div>
            </div>
          </div>

          <div className="user__block">
            <div className="bubble">
              <div className="rating">
                {/* dummy data */}
                {SIGHTS[countryName][0].rate}
                <div className="icon--star icon"></div>
              </div>
              <div className="date">20 December 2020</div>
              <div className="text">
                Awesome place to observe my favourite aligators at Florida, the quality of the video is great.{' '}
              </div>
            </div>
            <div className="user_data">
              <img src={avatar} alt="" className="avatar" />
              <div className="user_name">Amely</div>
            </div>
          </div>

          <div className="user__block">
            <div className="bubble">
              <div className="rating">
                {/* dummy data */}
                {SIGHTS[countryName][0].rate}
                <div className="icon--star icon"></div>
              </div>
              <div className="date">20 December 2020</div>
              <div className="text">
                Awesome place to observe my favourite aligators at Florida, the quality of the video is great.{' '}
              </div>
            </div>
            <div className="user_data">
              <img src={avatar} alt="" className="avatar" />
              <div className="user_name">Amely</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

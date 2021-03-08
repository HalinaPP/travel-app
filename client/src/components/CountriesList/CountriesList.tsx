import './countriesList.scss';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
// import promoBg from '../../assets/images/ireland.jpg';
import heartIcon from '../../assets/icons/heart.png';

const CountriesList: FC = () => (
  // <React.Fragment>
  //   <div>Countries list</div>
  //   <Link to={'/country/1'}>Contry1</Link>
  // </React.Fragment>
  <main>
    <section className='promo'>
      <div className='wrapper'>
        <div className='content-block'>
          <h1 className='title'>Chose your next trip</h1>
          <h2 className='subtitle'>travell app</h2>
          <p className='content'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea
          </p>
          <a href='#' className='btn btn--light'>
            Watch now
          </a>
        </div>
        <div className='image-block'>
          <div className='image'></div>
          <div className='image-outline'></div>
        </div>
      </div>
    </section>
    <section className='countries'>
      <a href='#' className='btn btn--ghost'>
        <img src={heartIcon} alt="♡" className='icon'/>
        Choose your Favorite
      </a>
      <div className="slider">
        
      </div>
    </section>
  </main>
);
export default CountriesList;

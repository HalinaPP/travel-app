import "./countriesList.scss";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
// import promoBg from '../../assets/images/ireland.jpg';
import heartIcon from "../../assets/icons/heart.png";

import { COUNTRIES_LIST } from "../../constants/constants";
import { CountriesListProps, Country } from "./CountriesList.model";

const CountriesList: FC<CountriesListProps> = ({ inputText }) => {
  const filterByNameAndCapital = (country: Country) => {
    return (
      country.name.toLowerCase().includes(inputText.toLowerCase()) ||
      country.capital.toLowerCase().includes(inputText.toLowerCase())
    );
  };
  return (
    // <React.Fragment>
    //   <div>
    //     <ul>
    //       {
    //         COUNTRIES_LIST
    //           .filter(filterByNameAndCapital)
    //           .map((country) => {
    //           return <li key={country.name}>{country.name}</li>
    //         })
    //       }
    //     </ul>
    //   </div>
    //   <Link to={'/country/1'}>Country1</Link>
    // </React.Fragment>
    <main>
      <section className="promo">
        <div className="wrapper">
          <div className="content-block">
            <h1 className="title">Chose your next trip</h1>
            <h2 className="subtitle">travell app</h2>
            <p className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea
            </p>
            <a href="#" className="btn btn--light">
              Watch now
            </a>
          </div>
          <div className="image-block">
            <div className="image"></div>
            <div className="image-outline"></div>
          </div>
        </div>
      </section>
      <section className="countries">
        <div className="wrapper">
          <a href="#" className="btn btn--ghost">
            <img src={heartIcon} alt="♡" className="icon" />
            Choose your Favorite
          </a>
          <div className="slider">
            <Carousel itemsToScroll={1} itemsToShow={3} isRTL={false} pagination={false}>
              <div className="slide">
                <div className="country-card">
                  <div className="image-block">
                    <div className="image"></div>
                    <div className="image-outline"></div>
                  </div>
                  <div className="title">Georgia</div>
                  <div className="subtitle">Tbilisi</div>
                </div>
                <div className="country-card">
                  <div className="image-block">
                    <div className="image"></div>
                    <div className="image-outline"></div>
                  </div>
                  <div className="title">Georgia</div>
                  <div className="subtitle">Tbilisi</div>
                </div>
              </div>
              <div className="slide">
                <div className="country-card">
                  <div className="image-block">
                    <div className="image"></div>
                    <div className="image-outline"></div>
                  </div>
                  <div className="title">Georgia</div>
                  <div className="subtitle">Tbilisi</div>
                </div>
                <div className="country-card">
                  <div className="image-block">
                    <div className="image"></div>
                    <div className="image-outline"></div>
                  </div>
                  <div className="title">Georgia</div>
                  <div className="subtitle">Tbilisi</div>
                </div>
              </div>
              <div className="slide">
                <div className="country-card">
                  <div className="image-block">
                    <div className="image"></div>
                    <div className="image-outline"></div>
                  </div>
                  <div className="title">Georgia</div>
                  <div className="subtitle">Tbilisi</div>
                </div>
                <div className="country-card">
                  <div className="image-block">
                    <div className="image"></div>
                    <div className="image-outline"></div>
                  </div>
                  <div className="title">Georgia</div>
                  <div className="subtitle">Tbilisi</div>
                </div>
              </div>
              <div className="slide">
                <div className="country-card">
                  <div className="image-block">
                    <div className="image"></div>
                    <div className="image-outline"></div>
                  </div>
                  <div className="title">Georgia</div>
                  <div className="subtitle">Tbilisi</div>
                </div>
                <div className="country-card">
                  <div className="image-block">
                    <div className="image"></div>
                    <div className="image-outline"></div>
                  </div>
                  <div className="title">Georgia</div>
                  <div className="subtitle">Tbilisi</div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </main>
  );
};
export default CountriesList;

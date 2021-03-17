import './countriesList.scss';
import { FC, useCallback, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import { CountriesListProps } from './CountriesList.model';
import { CountryProps } from '../Country/Country.model';
import CountriesListItem from '../CountriesListItem/CountriesListItem';
import { setInnerHtml } from '../../utils/helpers';
import useWindowSize from '../../utils/useWindowSize';
import translation from '../../constants/translation';
import { LanguageContext } from '../../utils/LanguageContext';

const CountriesList: FC<CountriesListProps> = ({ inputText, getCountriesFromApi, countries }) => {
  const { lang: currLang } = useContext(LanguageContext);
  const langsInfo = translation[currLang];

  const filterByNameAndCapital = (country: CountryProps) =>
    country.name.toLowerCase().includes(inputText.toLowerCase()) ||
    country.capital.toLowerCase().includes(inputText.toLowerCase());

  const getCountriesList = () =>
    countries?.filter(filterByNameAndCapital).map((country: CountryProps, index: number, array): JSX.Element | null => {
      if (index % 2 !== 0 || index === array.length - 1) {
        return (
          <div className="slide" key={index}>
            {array[index - 1] && <CountriesListItem country={array[index - 1]} />}
            <CountriesListItem country={country} />
          </div>
        );
      }
      return null;
    });

  const getRandomCountry = useCallback(() => {
    if (countries && countries.length > 0) {
      const randIndex = countries?.length - 1;
      /* пока не определилась можно ли побороть перерендеринг с рандомом
      Math.trunc(Math.random() * countries?.length);
      */
      const randCountry = countries[randIndex];
      return {
        randCountryName: randCountry.name,
        randCountryDescription: `${randCountry.description.slice(0, 300)}...`,
        randCountryLink: `${currLang}/country/${randCountry.id}`,
        randCountryImage: { backgroundImage: `url(${randCountry.imageUrl})` },
      };
    }
    return {
      randCountryName: '',
      randCountryDescription: '',
      randCountryLink: '',
      randCountryImage: {},
    };
  }, [countries]);

  const getPromoCountry = () => {
    const { randCountryName, randCountryDescription, randCountryLink, randCountryImage } = getRandomCountry();

    return (
      <div className="wrapper">
        <div className="content-block">
          <h1 className="title">{langsInfo.choose}</h1>
          <h2 className="subtitle">{randCountryName}</h2>
          <p className="content" dangerouslySetInnerHTML={setInnerHtml(randCountryDescription)}></p>
          <Link className="btn btn--light" to={randCountryLink}>
            {langsInfo.watch}
          </Link>
        </div>
        <div className="image-block">
          <div className="image" style={randCountryImage}></div>
          <div className="image-outline"></div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    getCountriesFromApi(currLang);
  }, [getCountriesFromApi, currLang]);

  function getSliderCount() {
    const windowWidth = useWindowSize().width;
    if (windowWidth >= '640') {
      return 3;
    }
    if (windowWidth >= '420' && windowWidth < '640') {
      return 2;
    }
    return 1;
  }

  return (
    <main>
      <section className="promo">{getPromoCountry()}</section>
      <section className="countries">
        <div className="wrapper">
          <div className="slider">
            <Carousel itemsToScroll={1} itemsToShow={getSliderCount()} isRTL={false} pagination={false}>
              {getCountriesList()}
            </Carousel>
          </div>
        </div>
      </section>
    </main>
  );
};
export default CountriesList;

import './countriesList.scss';
import { FC, useCallback, useEffect, useContext } from 'react';
import Carousel from 'react-elastic-carousel';
import { CountriesListProps } from './CountriesList.model';
import { CountryProps } from '../Country/Country.model';
import CountriesListItem from '../CountriesListItem/CountriesListItem';
import useWindowSize from '../../utils/useWindowSize';
import { LanguageContext } from '../../utils/LanguageContext';
import MainCountry from '../MainCountry';

const CountriesList: FC<CountriesListProps> = ({ inputText, getCountriesFromApi, countries }) => {
  const { lang: currLang } = useContext(LanguageContext);

  const filterByNameAndCapital = useCallback(
    (country: CountryProps) =>
      country.name.toLowerCase().includes(inputText.toLowerCase()) ||
      country.capital.toLowerCase().includes(inputText.toLowerCase()),
    [inputText],
  );

  const getCountriesList = useCallback(
    () =>
      countries
        ?.filter(filterByNameAndCapital)
        .map((country: CountryProps, index: number, array): JSX.Element | null => {
          if (index % 2 !== 0 || index === array.length - 1) {
            return (
              <div className="slide" key={index}>
                {array[index - 1] && <CountriesListItem country={array[index - 1]} />}
                <CountriesListItem country={country} />
              </div>
            );
          }
          return null;
        }),
    [countries, filterByNameAndCapital],
  );

  useEffect(() => {
    getCountriesFromApi(currLang);
  }, [currLang]);

  const windowWidth = useWindowSize().width;
  
  return (
    <main>
      <MainCountry countries={countries} />
      <section className="countries">
        <div className="wrapper">
          <div className="slider">
            {countries && (
              <Carousel
                itemsToScroll={1}
                itemsToShow={windowWidth >= 1040 ? 3 : windowWidth > 768 ? 2 : 1}
                isRTL={false}
                pagination={false}
              >
                {getCountriesList()}
              </Carousel>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
export default CountriesList;

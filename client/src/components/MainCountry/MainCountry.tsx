import './header.scss';
import { FC, useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { MainCountryProps } from './MainCountry.model';
import { LanguageContext } from '../../utils/LanguageContext';
import translation from '../../constants/translation';
import { setInnerHtml } from '../../utils/helpers';

const MainCountry: FC<MainCountryProps> = ({ countries }) => {
  const { lang: currLang } = useContext(LanguageContext);
  const langsInfo = translation[currLang];

  const getRandomCountry = useCallback(() => {
    if (countries && countries.length > 0) {
      const randIndex = countries?.length - 1;
      /* пока не определилась можно ли побороть перерендеринг с рандомом
      Math.trunc(Math.random() * countries?.length);
      */
      const randCountry = countries[randIndex];
      return {
        randCountryName: randCountry.name,
        randCountryDescription: `${randCountry.promoDescription}`,
        // randCountryDescription: `${randCountry.description.slice(0, 300)}...`,
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

  const getPromoCountry = useCallback(() => {
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
  }, [langsInfo, countries]);

  return <section className="promo">{countries && getPromoCountry()}</section>;
};

export default MainCountry;

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StateModel } from '../reducers/index';
import CountriesList from '../components/CountriesList';
import { getCountriesFromApi } from '../reducers';

const mapStateToProps = (state: StateModel) => ({
  currLang: state.lang,
});

export const CountriesListContainer = connect(mapStateToProps, { getCountriesFromApi })(CountriesList);

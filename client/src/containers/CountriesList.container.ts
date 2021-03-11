import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StateModel, getCountriesFromApi } from '../reducers/index';
import CountriesList from '../components/CountriesList';

const mapStateToProps = (state: StateModel) => ({
  currLang: state.lang,
});

export const CountriesListContainer = connect(mapStateToProps, { getCountriesFromApi })(CountriesList);

import { connect } from 'react-redux';
import { StateModel, getCountriesFromApi } from '../reducers/index';
import CountriesList from '../components/CountriesList';

const mapStateToProps = (state: StateModel) => ({
  countries: state.countries,
});

export const CountriesListContainer = connect(mapStateToProps, { getCountriesFromApi })(CountriesList);

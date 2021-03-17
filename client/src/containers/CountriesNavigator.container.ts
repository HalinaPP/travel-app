import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StateModel, getCountriesFromApi } from '../reducers/index';
import CountriesNavigator from '../components/CountriesNavigator';

const mapStateToProps = (state: StateModel) => ({
  countries: state.countries,
});

export const CountriesNavigatorContainer = connect(mapStateToProps, { getCountriesFromApi })(CountriesNavigator);

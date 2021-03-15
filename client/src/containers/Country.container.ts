import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StateModel, getCountryByIdFromApi } from '../reducers/index';
import Country from '../components/Country';

const mapStateToProps = (state: StateModel) => ({
  currCountry: state.currCountry!,
});

export const CountryContainer = connect(mapStateToProps, { getCountryByIdFromApi })(Country);

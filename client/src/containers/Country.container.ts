import { connect } from 'react-redux';
import { StateModel, getCountryByIdFromApi } from '../reducers/index';
import Country from '../components/Country';
/* eslint-disable  @typescript-eslint/no-non-null-assertion */
const mapStateToProps = (state: StateModel) => ({
  currCountry: state.currCountry!,
});

export const CountryContainer = connect(mapStateToProps, { getCountryByIdFromApi })(Country);

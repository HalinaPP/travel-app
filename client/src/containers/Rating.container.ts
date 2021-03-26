import { connect } from 'react-redux';
import { StateModel, getCountryByIdFromApi } from '../reducers/index';
import Rating from '../components/Rating';
/* eslint-disable  @typescript-eslint/no-non-null-assertion */
const mapStateToProps = (state: StateModel) => ({
  currCountry: state.currCountry!,
});

export const RatingContainer = connect(mapStateToProps, { getCountryByIdFromApi })(Rating);

import { connect, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { StateModel, getCountryByIdFromApi } from '../reducers/index';
import Rating from '../components/Rating';

const mapStateToProps = (state: StateModel) => ({
  currCountry: state.currCountry!,
});

export const RatingContainer = connect(mapStateToProps, { getCountryByIdFromApi })(Rating);

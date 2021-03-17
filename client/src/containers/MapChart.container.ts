import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StateModel, getCountriesWithPlacesInfoFromApi } from '../reducers/index';
import MapChart from '../components/SightsMap/MapChart';

const mapStateToProps = (state: StateModel) => ({
  countriesWP: state.countriesWP,
});

export const MapChartContainer = connect(mapStateToProps, { getCountriesWithPlacesInfoFromApi })(MapChart);

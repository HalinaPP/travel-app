import { connect } from 'react-redux';
import { StateModel } from '../reducers/index';
import { Dispatch } from 'redux';
import Language from '../components/Language';
import { changeLang } from '../actions/index';

const mapStateToProps = (state: StateModel) => {
  return {
    currLang: state.lang
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onSelectChange: (lang: string) => dispatch(changeLang(lang)),
  };
};
export const LanguageContainer = connect(mapStateToProps, mapDispatchToProps)(Language);

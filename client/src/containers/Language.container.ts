import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StateModel } from '../reducers/index';
import Language from '../components/Language';
import { changeLang } from '../actions/index';

const mapStateToProps = (state: StateModel) => ({
  currLang: state.lang,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSelectChange: (lang: string) => dispatch(changeLang(lang)),
});
export const LanguageContainer = connect(mapStateToProps, mapDispatchToProps)(Language);

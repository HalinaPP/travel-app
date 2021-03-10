import { ACTIONS } from '../actions/constants';
import { LANGS } from '../constants/constants';

export interface StateModel {
  lang: string;
  user?: {
    id: number;
    nickName: string;
  };
}

export const initialState: StateModel = {
  lang: LANGS.ru,
};

export const reducer = (state = initialState, action: any): StateModel => {
  switch (action.type) {
    case ACTIONS.changeLang:
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};

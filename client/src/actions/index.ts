import { ACTIONS } from './constants';

export const changeLang = (lang: string) => ({
  type: ACTIONS.changeLang,
  payload: lang,
});

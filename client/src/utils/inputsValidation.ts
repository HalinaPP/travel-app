import { InputErrors } from '../constants/inputErrors.constants';

interface ValidateDataParams {
  currentInput: string,
  value: string | null | File,
  currLang: string,
}
export const validateData = ({ currentInput = 'default', value, currLang }: ValidateDataParams): string | null => {
  switch (currentInput) {
    case 'nickname':
      if (!value) return InputErrors.noNickname[currLang];
      if (!/[a-zA-Z0-9]+$/.test(String(value))) return InputErrors.nonLatinCharacters[currLang];
      if (String(value).length < 6) return InputErrors.minNickname[currLang];
      break;
    case 'password':
      if (!value) return InputErrors.noPassword[currLang];
      if (!/[a-zA-Z0-9]+$/.test(String(value))) return InputErrors.nonLatinCharacters[currLang];
      if (String(value).length < 6) return InputErrors.minPassword[currLang];
      break;
    case 'avatar':
      if (value === null) return InputErrors.noImage[currLang];
      break;
    default:
      return '';
  }
  return '';
};

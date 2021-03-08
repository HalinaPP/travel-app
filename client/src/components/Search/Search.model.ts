import { ChangeEventHandler } from "react";

export interface SearchProps {
  inputText: string,
  onInputChange: ChangeEventHandler<HTMLInputElement>,
}

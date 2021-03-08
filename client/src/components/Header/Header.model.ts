import { ChangeEventHandler } from "react";

export interface HeaderProps {
  inputText: string,
  onInputChange: ChangeEventHandler<HTMLInputElement>,
}

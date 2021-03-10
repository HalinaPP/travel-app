import "./styles.scss";
import React, { FC } from "react";
import Search from "../Search/";
import { HeaderProps } from "./Header.model";
import { LanguageContainer } from "../../containers/Language.container";

const Header: FC<HeaderProps> = ({ inputText, onInputChange, isMain }) => {
  return (
    <header>
      <div>Logo</div>
      {isMain && <Search inputText={inputText} onInputChange={onInputChange} />}
      <LanguageContainer />
    </header>
  );
};
export default Header;

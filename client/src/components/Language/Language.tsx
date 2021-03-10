import './styles.scss';
import React, { ChangeEvent, FC } from 'react';
import { LanguageProps } from './Language.model';
import {LANGS}    from '../../constants/constants';

const Language: FC<LanguageProps> = ({ currLang, onSelectChange}) => {
  const getLangsItems = () =>{
    return Object.keys(LANGS).map(item =>{
      return <option key={item} value={item}>{item}</option>
    })
  }

  const handleChange = ({target}:ChangeEvent<HTMLSelectElement>)=>{
    console.log(target.value);
    onSelectChange(target.value);
  }


  return (
   <select value={currLang} onChange={handleChange}>
       {getLangsItems()}
   </select>
  );
}
export default Language;

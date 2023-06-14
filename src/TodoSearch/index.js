import React, { useContext } from "react";
import './TodoSearch.css';
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const {searchValue, setSearchValue} = useContext(TodoContext);
  const onSearchValueChange=(event)=>{
   setSearchValue(event.target.value);
  }

  return (
    <input 
    className="TodoSearch" 
    placeholder="Cebolla"
    value ={searchValue}
    onChange={onSearchValueChange}
    
    />
  );
}export {TodoSearch}
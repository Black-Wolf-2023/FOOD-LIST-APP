import React, { useContext, useRef, useState } from "react";
import ".././styles/Nav.css";
import { LocalStorage } from "./Main__Context";

export const Nav = () => {

  let List__data = useContext(LocalStorage);
  let [filter__data,setState] = useState(List__data.data[0]);
  let search__inp__value = useRef(0);

  function data__updater(){
    let new__data = filter__data.filter(e=> {
      if(e.name ==  search__inp__value.current.value &  search__inp__value.current.value !== "All"){
        return e;
      }else if( search__inp__value.current.value == "All"){
        return e;
      }
    });
    search__inp__value.current.value="";
    List__data.changeData([new__data,List__data.data[1]]);
  }


  return (
    <nav>
      <div className="container">
        <div className="title">HEALTHY FOOD</div>
        <form onSubmit={(e) => {
          e.preventDefault();
          data__updater();
        }}>
          <input type="text" placeholder="Search..." ref={search__inp__value}/>
          <button className="search">Search</button>
        </form>
      </div>
    </nav>
  );
};

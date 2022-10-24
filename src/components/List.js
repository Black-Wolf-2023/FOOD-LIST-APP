import React, { useContext, useState } from 'react'
import { Fade } from 'react-reveal';
import ".././styles/List.css";
import { LocalStorage } from './Main__Context';


export const List = () => {
  let List__data =  useContext(LocalStorage);
  let [filter__data,setState] = useState(List__data.data[0]);
  function data__updater(event){
    let new__data = filter__data.filter(e=> {
      if(e.name == event.target.innerText & event.target.innerText !== "All"){
        return e;
      }else if(event.target.innerText == "All"){
        return e;
      }
    });
    
    List__data.changeData([new__data,List__data.data[1]]);
  }
  return (
    <div className='list'>
      <Fade bottom>
        <ul>
          {List__data.data[1].map((e,index) => {
              return(
                <li key={index} onClick={data__updater}>{e}</li>
              )
          })}
        </ul>
      </Fade>
    </div>
  )
}

import React, { createContext, useState } from 'react'


let LocalStorage = createContext();

const Main__Context = ({children}) => {
  let [data,setData] = useState([
    [
      {id:0,name:'Meat',img:'1.jpg',dis:"Laboris dolore do et magna culpa ullamco amet et. Dolore sit aute id commodo occaecat cillum dolor id. Elit esse elit proident irure culpa est anim exercitation enim. Consectetur quis ad eu adipisicing sint elit. Id cupidatat nisi consectetur nostrud exercitation."},
      {id:1,name:'Bread',img:'2.jpg',dis:"Laboris dolore do et magna culpa ullamco amet et. Dolore sit aute id commodo occaecat cillum dolor id. Elit esse elit proident irure culpa est anim exercitation enim. Consectetur quis ad eu adipisicing sint elit. Id cupidatat nisi consectetur nostrud exercitation."},
      {id:2,name:'Cheese',img:'2.jpg',dis:"Laboris dolore do et magna culpa ullamco amet et. Dolore sit aute id commodo occaecat cillum dolor id. Elit esse elit proident irure culpa est anim exercitation enim. Consectetur quis ad eu adipisicing sint elit. Id cupidatat nisi consectetur nostrud exercitation."},
      {id:3,name:'Betato',img:'3.jpg',dis:"Laboris dolore do et magna culpa ullamco amet et. Dolore sit aute id commodo occaecat cillum dolor id. Elit esse elit proident irure culpa est anim exercitation enim. Consectetur quis ad eu adipisicing sint elit. Id cupidatat nisi consectetur nostrud exercitation."},
      {id:4,name:'Makieo',img:'4.jpg',dis:"Laboris dolore do et magna culpa ullamco amet et. Dolore sit aute id commodo occaecat cillum dolor id. Elit esse elit proident irure culpa est anim exercitation enim. Consectetur quis ad eu adipisicing sint elit. Id cupidatat nisi consectetur nostrud exercitation."},
      {id:5,name:'Cheese',img:'2.jpg',dis:"Laboris dolore do et magna culpa ullamco amet et. Dolore sit aute id commodo occaecat cillum dolor id. Elit esse elit proident irure culpa est anim exercitation enim. Consectetur quis ad eu adipisicing sint elit. Id cupidatat nisi consectetur nostrud exercitation."},
      {id:6,name:'Bread',img:'2.jpg',dis:"Laboris dolore do et magna culpa ullamco amet et. Dolore sit aute id commodo occaecat cillum dolor id. Elit esse elit proident irure culpa est anim exercitation enim. Consectetur quis ad eu adipisicing sint elit. Id cupidatat nisi consectetur nostrud exercitation."},
      {id:7,name:'Banana',img:'1.jpg',dis:"Laboris dolore do et magna culpa ullamco amet et. Dolore sit aute id commodo occaecat cillum dolor id. Elit esse elit proident irure culpa est anim exercitation enim. Consectetur quis ad eu adipisicing sint elit. Id cupidatat nisi consectetur nostrud exercitation."},
      {id:8,name:'Buldes',img:'3.jpg',dis:"Laboris dolore do et magna culpa ullamco amet et. Dolore sit aute id commodo occaecat cillum dolor id. Elit esse elit proident irure culpa est anim exercitation enim. Consectetur quis ad eu adipisicing sint elit. Id cupidatat nisi consectetur nostrud exercitation."},
      {id:9,name:'Betato',img:'3.jpg',dis:"Laboris dolore do et magna culpa ullamco amet et. Dolore sit aute id commodo occaecat cillum dolor id. Elit esse elit proident irure culpa est anim exercitation enim. Consectetur quis ad eu adipisicing sint elit. Id cupidatat nisi consectetur nostrud exercitation."},
    ],
    ["All","Meat","Bread","Cheese","Betato"]
  ])

  function changeData(newData){
    setData(newData);
  }

  return (
    <LocalStorage.Provider value={{data,changeData}}>
        {children}
    </LocalStorage.Provider>
  )
}

export {Main__Context,LocalStorage}
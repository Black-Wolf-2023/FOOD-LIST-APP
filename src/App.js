import React, { useContext } from 'react'
import './App.css';
import { List } from './components/List';
import { Males } from './components/Males';
import { Nav } from './components/Nav';
import { Title } from './components/Title';
import { LocalStorage } from './components/Main__Context';
export const App = () => {
  let ex__data = useContext(LocalStorage);
  return (
    <>
      <Nav/>
      <Title/>
      <List/>
      <Males data={ex__data.data[0]}/>
    </>
  )
}

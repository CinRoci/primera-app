import { useState } from 'react'
import reactLogo from './../../assets/react.svg';
import './App.css'
import ListaDesordenada from '../Lista/listades';

function App() {

  let titulo= "Hello Dojo";
  let subtitulo= "Things I need to do:"

  return (
    <>
      <h1>{titulo}</h1>
      <h2>{subtitulo}</h2>
      <ListaDesordenada/>
    </>
  )
}

export default App

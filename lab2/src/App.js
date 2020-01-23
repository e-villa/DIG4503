import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./Components/HomePage";


class App extends React.Component{
  render(){
  return (
    <HomePage firstName="Emely"/>
  );
}
}
export default App;


//Component is a class of react
//react takes care of the components and component take care of themselve

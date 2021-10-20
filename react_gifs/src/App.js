//import logo from './logo.svg';
import './App.css';
import MyNav from './Components/MyNav';
import Gallery from './Components/Gallery';
import React, { useEffect } from 'react'

//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import Container from 'react-bootstrap/Container';
/*
  Image for Tab (favicon replacer)
  https://static.wikia.nocookie.net/dorohedoro/images/3/3b/NikaidoMask.jpg/revision/latest?cb=20161018143422
*/

function App() {

  useEffect(() => {
    document.title = "Rickamortee"
  },)
  return (
    <>
  <MyNav />
  <Gallery />
     </>
  );
}

export default App;

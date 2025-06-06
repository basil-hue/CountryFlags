import React from 'react'
import './Navigation.css'
import { useFlag } from '../Context/FlagContextPrvider'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import menu from './../asset/hamburger.png'
function NavigationComponent() {
  
const {setType,type}=useFlag()
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const selectStyle={borderBottom:"1px solid black"}
const selectFlag=(id)=>{

  setType(id)
 handleClose()
}
function isMobileView() {
  return window.innerWidth <= 768;
}
  
  return (
    <div className='nav'>
      <h1>Countries</h1>
      {!isMobileView()&&<div className='navbarOptions'>
        <button
        style={type== 0 ? selectStyle:{}}
        onClick={() =>{
          selectFlag(0)
        }}>
          All
        </button >
        <button 
        style={type== 1 ? selectStyle : {}}
        onClick={() =>{
          selectFlag(1)
        }}>
          Asia
        </button>
        <button 
        style={type== 2 ? selectStyle : {}}
        onClick={() =>{
          selectFlag(2)
        }}>
          Europe
        </button>
      </div>}
 {isMobileView()&&<><button id='hamburger'  variant="primary" onClick={handleShow}>

  <img src = {menu}></img>
      </button >
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>MENU</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <div className='navbarOptionsMobile'>
        <button
        style={type== 0 ? selectStyle:{}}
        onClick={() =>{
          selectFlag(0)
        }}>
          All
        </button >
        <button 
        style={type== 1 ? selectStyle : {}}
        onClick={() =>{
          selectFlag(1)
        }}>
          Asia
        </button>
        <button 
        style={type== 2 ? selectStyle : {}}
        onClick={() =>{
          selectFlag(2)
        }}>
          Europe
        </button>
      </div>
        </Offcanvas.Body>
      </Offcanvas>
      </>
}</div>
  )
}

export default NavigationComponent
import React from "react";
import logo from "../../logo.svg"
import Cartwidget from "../Cartwidget/Cartwidget";
import {BsCart2} from 'react-icons/bs'
import ItemListContainer from "../ItemListContainer/ItemListContainer";

export default function Navbar() {

  return (

         <nav className="navbar navbar-dark bg-dark">
   <div className="container-fluid">
     <a className="navbar-brand" href="/">
       <img src={logo} alt="" width="30" height="30" className="d-inline-block align-text-top"/>
       TuHardware
     </a>
     <ul className="nav justify-content-center">
   <li className="nav-item">
     <a className="nav-link active" aria-current="page" href="/">Productos</a>
   </li>
   <li className="nav-item">
     <a className="nav-link" href="/">Pc Armadas</a>
   </li>
   <li className="nav-item">
     <a className="nav-link" href="/">Arma tu Pc</a>
   </li>
   <li className="nav-item">
     <a className="nav-link" href="/">Nosotros</a>
   </li>
 </ul>
    <div>
    <Cartwidget Icon={BsCart2} color={"white"} size={"25px"}/>
    <ItemListContainer
    color={"white"}/>
    </div>
   </div>
 </nav>
  )
}
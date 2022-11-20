import './App.css';
import './CSS/Footer.css';
import './CSS/Nav.css';
import './CSS/Home.css';
import './CSS/Side.css';
import {Route, Routes} from 'react-router-dom'
import React from 'react';
import {Link} from 'react-router-dom'
import { AiFillCaretDown, AiOutlineQuestionCircle, AiFillShopping, AiOutlineSearch } from "react-icons/ai";
import { BiUser, BiMessageDots } from "react-icons/bi";
import { BsCart4, BsHeart } from "react-icons/bs";
// import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Side from './Components/Side';
import Cart from './Cart';
import Help from './Help';
import Home from './Home';
function App() 
{
  return (

    <>
     <div className="navbar">
            <img src='./Images/logo-white.png' alt='I-Ford Gaming' className='image'></img>
            <div className="search-container">
                <input type="text" placeholder="Search"></input>
                <button type="button" className="search"><AiOutlineSearch/></button>
            </div>

            <div className="topnav-right">
                <Link to='./Cart'><BsCart4/>&ensp;Cart</Link>
                <Link to='./Help'><AiOutlineQuestionCircle/>&ensp;Help</Link>
            </div>

            <div className="dropdown" style={{float:'right'}}>
                <button className="dropbtn">Account Details&ensp;<AiFillCaretDown /></button>
                <div className="dropdown-content">
                    <Link to='./Accounts/MyAccount'><BiUser />&ensp;My Account</Link>
                    <Link to='./Accounts/Orders'><AiFillShopping />&ensp;Orders</Link>
                    <Link to='./Accounts/Inbox'><BiMessageDots />&ensp;Inbox</Link>
                    <Link to='./Accounts/Saved'><BsHeart />&ensp;Saved Items</Link>
                </div>
            </div>

        </div>
    <div className="App">
      <Side/>
      <Footer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Help" element={<Help/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;

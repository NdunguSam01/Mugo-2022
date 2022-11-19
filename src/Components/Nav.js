import React from 'react';
import { AiFillCaretDown, AiOutlineQuestionCircle, AiFillShopping, AiOutlineSearch } from "react-icons/ai";
import { BiUser, BiMessageDots } from "react-icons/bi";
import { BsCart4, BsHeart } from "react-icons/bs";
const Nav = () => 
{
    return (
        <div className="navbar">
            <img src='./Images/logo-white.png' alt='I-Ford Gaming' className='image'></img>
            <div className="search-container">
                <input type="text" placeholder="Search"></input>
                <button type="button" className="search"><AiOutlineSearch /></button>
            </div>
            <div className="topnav-right">
                <a href='./Cart'><BsCart4 />&ensp;Cart</a>
                <a href='./Help'><AiOutlineQuestionCircle />&ensp;Help</a>
            </div>
            <div className="dropdown" style={{ float:'right'}}>
                <button className="dropbtn">Account Details&ensp;<AiFillCaretDown /></button>
                <div className="dropdown-content">
                    <a href='./Accounts/MyAccount'><BiUser />&ensp;My Account</a>
                    <a href='./Accounts/Orders'><AiFillShopping />&ensp;Orders</a>
                    <a href='./Accounts/Inbox'><BiMessageDots />&ensp;Inbox</a>
                    <a href='./Accounts/Saved'><BsHeart />&ensp;Saved Items</a>
                </div>
            </div>
        </div>
    )
}
export default Nav
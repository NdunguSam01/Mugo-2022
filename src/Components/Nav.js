import React from 'react';
import {SlArrowDown} from "react-icons/sl";
const Nav=()=>
{
    return(
        <div className="navbar">
            <div className="search-container">
                <input type="text" placeholder="Search"></input>
                <button type="button" className="search">Search</button>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Account Details  <SlArrowDown/></button>
                <div class="dropdown-content">
                    <a href='./Accounts/MyAccount'>My Account</a>
                      <a href='./Accounts/Orders'>Orders</a>
                    <a href='./Accounts/Inbox'>Inbox</a>     
                    <a href='./Accounts/Saved'>Saved Items</a>
                </div>
            </div>
            <a href='./Help'>Help</a>
            <a href='./Cart'>Cart</a>
        </div>
    )
}

export default Nav
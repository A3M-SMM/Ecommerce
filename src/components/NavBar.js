import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import './NavBar.css'

class Navbar extends Component {
    state = {clicked: false}
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">A3M.SMM</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                </div>
                <ul>
                        {MenuItems.map{(item, index) => {
                            return {
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                    {item.title}
                                    
                                    </a>
                                </li>
                            }
                        }}
                </ul>
            </nav>
        )
    }
}

export default Navbar

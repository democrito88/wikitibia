import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";
import logo from "../../../public/busca.png";

const Nav = () => {
    return(
        <nav className='navbar'>
            <img src={logo} height={16} />
            <h3>Wikitibia</h3>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/worlds"}>Worlds</Link>
                </li>
                <li>
                    <Link to={"/creatures"}>Creatures</Link>
                </li>
                <li>
                    <Link to={"/spells"}>Spells</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
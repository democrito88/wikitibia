import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";

const Nav = () => {
    return(
        <nav className='navbar'>
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
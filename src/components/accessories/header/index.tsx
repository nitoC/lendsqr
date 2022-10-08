import React from 'react';
import Nav from './nav.tsx';
import Search from './search.tsx';
function Header() {
    return ( 
        <div className="header">
            <div className="logo">
                <img className="logo__image" src="assets/logos/group.png" alt="Logo" />
            </div>
            <div className="search">
                <Search/>
            </div>
            <nav className="nav">
                <Nav/>
            </nav>
        </div>
     );
}

export default Header;
import React from 'react';
import Nav from './nav.tsx';
import Search from './search.tsx';
function Header({user}) {
    return ( 
        <div className="header">
            <div className="logo">
                <img className="logo__image" src="assets/logos/group.png" alt="Logo" />
            </div>
            <div className="search">
                <Search/>
            </div>
            <nav className="nav">
                <Nav user={user}/>
            </nav>
            <div className="nav__moreverti">
                <img src="assets/icons/more_verti.svg" alt="" className="nav-moreverti__btn" />
            </div>
        </div>
     );
}

export default Header;
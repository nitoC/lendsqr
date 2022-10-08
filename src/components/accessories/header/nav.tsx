import React from 'react';
function Nav() {
    return ( 
        <nav className="nav__container">
            <a href="" className="nav__link">docs</a>
            <button className="nav__icon-button">
                <img width={19.67} height={22.74} src="/assets/icons/notifications.svg" alt="notification_icon" />
            </button>
            <div className="nav__user-menu">
                <div className="nav__avatar">

                </div>
                <button className="nav__icon-button">
                    <span className="nav__text">
                        Adedeji
                    </span>
                    <img  src="assets/icons/user_menu.svg" alt="" className="nav__icon" />
                </button>
            </div>
        </nav>
     );
}

export default Nav;
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import cl from './Header.module.scss';

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const onClickChangeMenu = () => {
        setIsOpenMenu(isOpen => !isOpen);
    };

    const onRouteCloseMenu = () => {
        setIsOpenMenu(false);
    };

    const activeLink = ({ isActive }) => (isActive ? cl.current : '');

    return (
        <header className={cl.root}>
            <div className="container">
                <div className={cl.inner}>
                    <h3>Horren</h3>
                    <div>
                        <div
                            onClick={onClickChangeMenu}
                            className={[cl.iconMenu, isOpenMenu ? cl.active : ''].join(' ')}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <nav className={[cl.nav, isOpenMenu ? cl.open : ''].join(' ')}>
                            <ul>
                                <li>
                                    <NavLink to="/" onClick={onRouteCloseMenu} className={activeLink}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" onClick={onRouteCloseMenu} className={activeLink}>
                                        About us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="contacts" onClick={onRouteCloseMenu} className={activeLink}>
                                        Contacts
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="faq" onClick={onRouteCloseMenu} className={activeLink}>
                                        FAQ
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

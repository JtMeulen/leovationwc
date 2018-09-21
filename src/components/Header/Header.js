import React from 'react';
import logoleft from '../../leovationWCteam.png';
import logoright from '../../logo.png';
import './Header.css';

const Header = () => {
    return(
        <div className="header">
            <img className="logoleft"  src={logoleft} />
            <img className="logoright" src={logoright} />
        </div>
    )
}
export default Header;
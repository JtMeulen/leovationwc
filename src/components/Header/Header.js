import React from 'react';
import leologo from '../../logo_banner.png';
import './Header.css';
const Header = () => {
    return(
        <div className="header">
                    <img className="logoheader" src={leologo} />
        </div>
    )
}
export default Header;
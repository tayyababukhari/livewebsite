import React from 'react';
import logo3 from './images/logo3.png'


const Header = () => {
    return(
        <>
        <div className="header">
            <img src={logo3} alt="logo" width='200' height='80' />
            {/* <h1>Tayyaba KeepOrganized</h1> */}
        </div>
        </>
    );
};

export default Header;
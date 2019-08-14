import React from 'react';

const Header = () => {
    return (
        <>
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="javascript:void(0);" data-toggle="modal" data-target="#exampleModal">How-To</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Download Notes</a>
            </li>
              
        </ul>
      
        </>
    )
};
export default Header;

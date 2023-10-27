import React, { useState } from 'react';
import { useTheme } from "../utils/ThemeContext.jsx";
import Nav from "./Navbar.jsx";

import PropTypes from 'prop-types';

function Header(props) {
    const { theme } = useTheme();
    console.log(theme);
    return (
        <div style={{ backgroundColor: props.bgColor }}>
            <h1>Flagg217: {props.title}</h1>
            <Nav />
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired
};

export default Header;
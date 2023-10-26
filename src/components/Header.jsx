import React, { useState } from 'react';
import { useTheme } from "../utils/ThemeContext";
import Nav from "./Navbar";

function Header(props) {
    const { theme } = useTheme();
    return (
        <div style={{ backgroundColor: props.bgColor }}>
            <h1>Flagg217: {props.title}</h1>
            <Nav />
        </div>
    );
}

export default Header;
import React, { useState } from 'react';
import { useTheme } from "../utils/ThemeContext";
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer(props) {
    const { theme } = useTheme();
    return (
        <div style={{ backgroundColor: props.bgColor }}>
            <a href="https://github.com/Flagg217">
            </a>
            <a href="https://www.linkedin.com/in/flagg217/">
            </a>
        </div>
    );
}

export default Footer;
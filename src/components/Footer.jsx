import React, { useState } from 'react';
import { useTheme } from "../utils/ThemeContext.jsx";

import PropTypes from 'prop-types';

function Footer(props) {
    const { theme } = useTheme();
    console.log(theme);
    return (
        <div style={{ backgroundColor: props.bgColor }}>
            <a href="https://github.com/Flagg217">
            </a>
            <a href="https://www.linkedin.com/in/flagg217/">
            </a>
        </div>
    );
}

Footer.propTypes = {
    bgColor: PropTypes.string.isRequired
};


export default Footer;
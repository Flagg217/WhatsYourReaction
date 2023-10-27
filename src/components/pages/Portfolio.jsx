import React, { useState } from 'react';
import Header from "../Header";
import Footer from "../Footer";
import Project from "../Project";

function Portfolio() {
    const fontColor = "black";
    return (
        <div>
            <Header title="Portfolio" bgColor="lightblue" />
            <br />
            <Project />
            <br />
            <Footer title="Portfolio" bgColor="lightblue" />
        </div>
    );
}   

export default Portfolio;
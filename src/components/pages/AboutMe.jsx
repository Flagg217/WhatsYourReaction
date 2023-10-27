import React, { useState } from 'react';
import Header from "../Header";
import Footer from "../Footer";
import image from "../../assets/images/IguazuTim.jpg";

function AboutMe() {
    const fontColor = "black";
    return (
        <div>
            <Header title="About Me" bgColor="lightblue" />
            <br />
            <img
            src={image}
            alt="Me in front of Iguazu Falls in Brazil"
            style={{ width: "200px", height: "150px" }}
            />
            <div style={{ color: fontColor }}>
                {" "}
                words and things
            </div>
            <div style={{ color: fontColor }}>
                {" "}
                words and things
            </div>
            <div style={{ color: fontColor }}>
                {" "}
                words and things
            </div>
            <br />
            <Footer title="About Me" bgColor="lightblue" />
        </div>
    );
}

export default AboutMe;
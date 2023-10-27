import React from 'react';
import Header from "../Header";
import Footer from "../Footer";

function Resume() {
    const fontColor = "black";
    return (
        <div>
            <Header title="Resume" bgColor="lightblue" />
            <div>
                <p style={{ color: fontColor }}>Someday I&apos;ll have a resume here.</p>
                <p style={{ color: fontColor }}>Updated resume coming soon</p>
            </div>
            <Footer title="Resume" bgColor="lightblue" />
        </div>
    );
}

export default Resume;
import React, { useState } from 'react';
import Header from "../Header";
import Footer from "../Footer";


function ContactMe() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setErrorMessage('Please fill out all fields');
            return;
        }
        alert(`Hello ${name}`);
        setName('');
        setEmail('');
        setMessage('');
    };
    const fontColor = "black";
    return (
        <div>
            <Header title="Contact Me" bgColor="lightblue" />
            <div style={{ color: fontColor }}>
                <form className="form">
                    <input
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Name"
                    />{" "}
                    <br />
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Email"
                    />
                    <br />
                    <input
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Message"
                    />
                    <br />
                    <button type="button" onClick={handleFormSubmit}>Submit</button>
                </form>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>
            <Footer title="Contact Me" bgColor="lightblue" />
        </div>
    );
}

export default ContactMe;
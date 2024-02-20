import React, { useState } from 'react';

const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.(com|net|org|gov|edu)$/;

export const ContactPage = () => {
    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(true);
    const [message, setMessage] = useState('');

    const emailValidation = () => {
        const isValid = emailRegex.test(email);
        setEmailValid(isValid);
        setMessage(isValid ? 'Email Address is Valid!' : 'Please enter a valid email address');
    };

    const handleOnChange = (e) => {
        setEmail(e.target.value);
        emailValidation();
    };

    return (
        <div>
            <h1>Contact Me</h1>
            <div className="contact-container">
                <form>
                    <div className="name">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" onChange={handleOnChange} required />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required />
                    </div>
                        <p style={{ color: emailValid ? 'green' : 'red' }}>{message}</p> {/* Display feedback */}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};
import React, { useState } from 'react';

const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

export const ContactPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const emailValidation = (e) => {
        emailRegex.test(email) ? setMessage('') : e.preventDefault(), setMessage("Please enter a valid email address")
    };

    const handleOnChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div>
            <h1>Contact Me</h1>
            <form onSubmit={emailValidation}>
                <div className="name">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" onChange={handleOnChange} required />
                    <p>{message}</p>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <input type="text" id="message" name="message" required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
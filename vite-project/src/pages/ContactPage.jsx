import React, { useState } from 'react';

const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

export const ContactPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const emailValidation = (e) => {
        e.preventDefault();
        if (emailRegex.test(email)) {
            setMessage('Email is valid!!');
        } else {
            setMessage('Please enter a valid email');
        }
    };

    const handleOnChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div>
            <div>Contact Me!</div>
            <form onSubmit={emailValidation}>
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
                    <input type="text" id="message" name="message" required />
                </div>
                <button type="submit">Submit</button>
                <p>{message}</p>
            </form>
        </div>
    );
};
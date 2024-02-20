import React, { useEffect, useState } from 'react';


export const ContactPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('false');
    
    useEffect(() => {
        const message = (email) => {
            const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
            return emailRegex.test(email)
        };

        if (email.trim() === '') {
            setMessage('Email is Required')
        } else if (!!message(email)) {
            setMessage('Please enter a valid email')
        } else {
            setMessage('')
        }
    }, [email])

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
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required />
                    </div>
                        <p>{message}</p>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};
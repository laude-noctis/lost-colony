import React, { useEffect, useState } from 'react';


export const ContactPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    useEffect(() => {
        const validateEmail = (email) => {
            const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.(com|net|org|edu|gov)$/;
            return emailRegex.test(email);
        };

        if (email.trim() === '') {
            setMessage('');
        } else if (!validateEmail(email)) {
            setMessage('Please enter a valid email');
        } else {
            setMessage('');
        }
    }, [email]);

    const handleBlur = (e) => {
        const { name, value } = e.target;
        
        if (name === 'username' && value.trim() === '') {
            setMessage('Username is required');
        } else if (name === 'message' && value.trim() === '') {
            setMessage('Message is required');
        } else {
            setMessage('');
        }
    };
    
    return (
        <div>
            <h1>Contact Me</h1>
            <div className="contact-container">
                <form>
                    <div className="name">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" onBlur={handleBlur} required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={handleBlur} required />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" onBlur={handleBlur} required />
                    </div>
                        <p>{message}</p>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};
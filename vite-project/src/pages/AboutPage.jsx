import React from 'react';
import me from '../images/me.jpeg'

export const AboutPage = () => {
    return <div>
        <div className='title'>
            <div className="image-container">
                <img src={me} alt="Lizzie Bumpers" className="circular-image" />
            </div>
            <h1>About me</h1>
        </div>

        <div className="about-container">
            <p>Howdy, my name is Lizzie Bumpers and I am currently studying to become a Full-Stack-Developer.
                Throughtout my time studying, I have enjoyed working on the back-end side. I liked working on the api routing and the server side code.
                I am interested in video game development and hope to one day transition into that side of the tech industry.</p>
            <p>On one of the group projects I was a part of, we built a weather app that retieved the current weather status of your area in an accent of your choice.
                There were four choices to pick from for the accent. We used ChatGPT to and a WeatherAPI to help develop the app. </p>
            <p>An example of a project I did on my own was a Tech Blog. I created it to be able to have a place to be able discuss all things tech related.
                I used an express server alongside the sequelize database to develop this application. This is also where I really got into back-end api routing.
            </p>
        </div>;
    </div>
};
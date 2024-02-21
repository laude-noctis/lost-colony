import React from 'react';
import resumePDF from '../resume.pdf';

export const ResumePage = () => {
    return <div>
        <h1>Resume</h1>
        <div className="resume-container">
            <h3>Download my Resume</h3>
            <h4><a href={resumePDF} download="Bumpers, Resume" target="_blank" rel="noopener noreferrer"><button>Resume</button></a></h4>
            <div>
                <h3>Front-End Proficiencies</h3>
                <ul>
                    <li>HTMl</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>React</li>
                    <li>BootStrap</li>
                </ul>
                <h3>Back-End Proficiencies</h3>
                <ul>
                    <li>APIs</li>
                    <li>Node.js</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>Express.js</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>

        </div>
    </div>;
}
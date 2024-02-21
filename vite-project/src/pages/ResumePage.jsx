import React from 'react';
const PDF = 'http://localhost:5173/public/Resume.pdf';

export const ResumePage = () => {
    const downloadFileAtUrl = (url) => {
        const fileName = 'resume.pdf'
        const aTag = document.createElement('a')
        aTag.href = url
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }

    return <div>
        <h1>Resume</h1>
        <div className="resume-container">
            <h3>Download my Resume</h3>
            <h4><button onClick={() => { downloadFileAtUrl(PDF)}}>Resume</button></h4>
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
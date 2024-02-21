import React from 'react';

export const ResumePage = () => {
    const onButtonClick = () => {
        const pdfUrl = "resume.pdf";
        const link = document.createElement('a')
        link.href = pdfUrl;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return <div>
        <h1>Resume</h1>
        <div className="resume-container">
            <h3>Download my Resume</h3>
            <h4><button onClick={onButtonClick}>Resume</button></h4>
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
import React from 'react';

export const PortfolioPage = () => {
    return (
        <div>
            <h1>Portfolio</h1>
            <div className="card">
                <div className="port-card">
                    <a href="https://github.com/laude-noctis/eternal-engine" target="_blank">
                        <i className="fab fa-github icon port-icon"></i>
                    </a>
                    <h2 className="port-title">
                        <a href="https://eternal-engine-f89c83326069.herokuapp.com/" target="_blank">Eternal-Engine</a>
                    </h2>
                </div>
            </div>
        </div>
    );
}
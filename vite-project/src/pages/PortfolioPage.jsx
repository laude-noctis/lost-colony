import React from 'react';
import Card from '../components/card';

import { eternalEngine, securityHall, greenForest, whiteJungle, radicalHighway, crazyGadget } from './portfolio';

export const PortfolioPage = () => {
    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            <div className="card-container">
                <Card code={eternalEngine.code} webpage={eternalEngine.webpage} title={eternalEngine.title} backgroundImage={eternalEngine.backgroundImage}/>
                <Card code={radicalHighway.code} webpage={radicalHighway.webpage} title={radicalHighway.title} backgroundImage={radicalHighway.backgroundImage}/>
                <Card code={whiteJungle.code} webpage={whiteJungle.webpage} title={whiteJungle.title} backgroundImage={whiteJungle.backgroundImage}/>
                <Card code={crazyGadget.code} webpage={crazyGadget.webpage} title={crazyGadget.title} backgroundImage={crazyGadget.backgroundImage}/>
                <Card code={greenForest.code} webpage={greenForest.webpage} title={greenForest.title} backgroundImage={greenForest.backgroundImage}/>
                <Card code={securityHall.code} webpage={securityHall.webpage} title={securityHall.title} backgroundImage={securityHall.backgroundImage}/>
            </div>
        </div>
    );
}
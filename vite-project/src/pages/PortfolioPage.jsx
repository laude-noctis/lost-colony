import React from 'react';
import Card from '../components/card';
import eternalEngineImage from '../images/eternal-engine.png'

const eternalEngine = {
    code: "https://github.com/laude-noctis/eternal-engine",
    webpage: "https://eternal-engine-f89c83326069.herokuapp.com/",
    title: "Eternal-Engine",
    backgroundImage: eternalEngineImage
}

const Atmosphoria = {
    code: "https://github.com/alexilson/atmosphoria",
    webpage: "https://alexilson.github.io/atmosphoria/",
    title: "Atmosphoria",
    backgroundImage: "pink"
}

const whiteJungle = {
    code: "https://github.com/laude-noctis/white-jungle",
    webpage: "https://white-jungle-ef3a1e24340d.herokuapp.com/",
    title: "White-Jungle",
    backgroundImage: "#red"
}

const crazyGadget = {
    code: "https://github.com/laude-noctis/crazy-gadget",
    webpage: "https://laude-noctis.github.io/crazy-gadget/",
    title: "Crazy-Gadget",
    backgroundImage: "#green"
}

const greenForest = {
    code: "https://github.com/laude-noctis/green-forest",
    webpage: "https://laude-noctis.github.io/green-forest/",
    title: "Green-Forest",
    backgroundImage: "violet"
}

const securityHall = {
    code: "https://github.com/laude-noctis/security-hall",
    webpage: "https://laude-noctis.github.io/security-hall/",
    title: "Security-Hall",
    backgroundImage: "blue"
}

export const PortfolioPage = () => {
    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            <div className="card-container">
                <Card code={eternalEngine.code} webpage={eternalEngine.webpage} title={eternalEngine.title} backgroundImage={eternalEngine.backgroundImage}/>
                <Card code={Atmosphoria.code} webpage={Atmosphoria.webpage} title={Atmosphoria.title} backgroundImage={eternalEngine.backgroundImage}/>
                <Card code={whiteJungle.code} webpage={whiteJungle.webpage} title={whiteJungle.title} backgroundImage={eternalEngine.backgroundImage}/>
                <Card code={crazyGadget.code} webpage={crazyGadget.webpage} title={crazyGadget.title} backgroundImage={eternalEngine.backgroundImage}/>
                <Card code={greenForest.code} webpage={greenForest.webpage} title={greenForest.title} backgroundImage={eternalEngine.backgroundImage}/>
                <Card code={securityHall.code} webpage={securityHall.webpage} title={securityHall.title} backgroundImage={eternalEngine.backgroundImage}/>
            </div>
        </div>
    );
}
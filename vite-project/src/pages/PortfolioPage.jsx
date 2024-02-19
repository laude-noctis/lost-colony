import React from 'react';
import Card from '../components/card';

const eternalEngine = {
    code: "https://github.com/laude-noctis/eternal-engine",
    webpage: "https://eternal-engine-f89c83326069.herokuapp.com/",
    title: "Eternal-Engine",
}

const Atmosphoria = {
    code: "https://github.com/alexilson/atmosphoria",
    webpage: "https://alexilson.github.io/atmosphoria/",
    title: "Atmosphoria",
}

const whiteJungle = {
    code: "https://github.com/laude-noctis/white-jungle",
    webpage: "https://white-jungle-ef3a1e24340d.herokuapp.com/",
    title: "White-Jungle",
}

const crazyGadget = {
    code: "https://github.com/laude-noctis/crazy-gadget",
    webpage: "https://laude-noctis.github.io/crazy-gadget/",
    title: "Crazy-Gadget",
}

export const PortfolioPage = () => {
    return (
        <div>
            <h1>Portfolio</h1>
            <div className="card-container">
                <Card code={eternalEngine.code} webpage={eternalEngine.webpage} title={eternalEngine.title} />
                <Card code={Atmosphoria.code} webpage={Atmosphoria.webpage} title={Atmosphoria.title} />
                <Card code={whiteJungle.code} webpage={whiteJungle.webpage} title={whiteJungle.title} />
                <Card code={crazyGadget.code} webpage={crazyGadget.webpage} title={crazyGadget.title} />
            </div>
        </div>
    );
}
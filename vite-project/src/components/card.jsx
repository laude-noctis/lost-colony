export default function Card(props) {
    return (
            <div className="card">
                <div className="port-card">
                    <a href={props.code} target="_blank">
                        <i className="fab fa-github icon port-icon"></i>
                    </a>
                    <h2 className="port-title">
                        <a href={props.webpage} target="_blank">{props.title}</a>
                    </h2>
                </div>
            </div>
    )
}
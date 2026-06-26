import App from "../../App"
import "../../css/log.css"


function Log(){


    return(
        <App>
            <div className="Log">
                <div className="logHeader">
                    <p>CONVERSION LOG</p>
                    <div className="loggedAndClear">
                    <p>8 LOGGED</p>
                    <button>CLEAR ALL</button>
                    </div>
                </div>
                <div className="logItems">
                    <div className="logItem"></div>
                    <div className="logItem"></div>
                    <div className="logItem"></div>
                    <div className="logItem"></div>
                    <div className="logItem"></div>
                    <div className="logItem"></div>
                    <div className="logItem"></div>
                    <div className="logItem"></div>
                </div>
            </div>
        </App>
    )
}

export default Log
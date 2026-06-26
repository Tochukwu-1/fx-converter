import App from "../../App"
import "../../css/compare.css"


function Compare(){
    return (
        <App>
            <div className="Compare">
                <div className="compareHeader">
                    <p>MULTI-CURRENCY <span>1,000 FROM USD</span></p>
                    <p>8 PAIRS</p>
                </div>
                <div className="compareItems">
                    <div className="compareItem"></div>
                    <div className="compareItem"></div>
                    <div className="compareItem"></div>
                    <div className="compareItem"></div>
                    <div className="compareItem"></div>
                    <div className="compareItem"></div>
                    <div className="compareItem"></div>
                    <div className="compareItem"></div>
                </div>
            </div>
        </App>
    )
}

export default Compare

import App from "../../App"
// import CurrencyChart from "../../CurrencyChart.jsx"
import Testchart from "../../Testchart.jsx"

function History(){
    

    return(
        <App>
        <div className="statsAndTime">
                    <div className="conversionStats">
                        <div className="stats">
                            <p>OPEN</p>
                            <li>0.8156</li>
                        </div>
                        <div className="stats">
                            <p>LAST</p>
                            <li>0.8530</li>
                        </div>
                        <div className="stats">
                            <p>CHANGE</p>
                            <li>+0.0014</li>
                        </div>
                        <div className="stats">
                            <p>% CHANGE</p>
                            <li>🔼 +0.16%</li>
                        </div>
                    </div>
                    <div className="timeFrame">
                        <div className="time">1D</div>
                        <div className="time">1H</div>
                        <div className="time active">1M</div>
                        <div className="time">3M</div>
                        <div className="time">1Y</div>
                        <div className="time">5Y</div>
                    </div>
                </div>
                <div className="chart" >
                    <Testchart />
                    {/* <CurrencyChart /> */}
                </div>
        </App>
    )
}

export default History
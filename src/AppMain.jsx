import "./css/appMain.css"


function AppMain(){

    return(
        <section className="AppMain">
            <nav>
                <div className="menu">
                <a href="./history" id="history" className="active">HISTORY</a>
                <a href="./compare" id="compare">COMPARE</a>
                <a href="./favorites" id="favorites">FAVORITES <div className="notification"><span >10</span></div></a>
                <a href="./log" id="log">LOG <div className="notification"><span >8</span></div></a>
                </div>
            </nav>
            <main>
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
                    <div className="timeFrame"></div>
                </div>
                <div className="chart"> <a href="placehold.co/400x400"></a></div>
            </main>
        </section>
    )
}

    export default AppMain
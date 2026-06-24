import "../css/appMain.css"
import History from "./Navigation/History.jsx"

function AppMain(){

    return(
        <section className="AppMain">
            <nav>
                <div className="menu">
                <a href="/history" id="history" className="active">HISTORY</a>
                <a href="/compare" id="compare">COMPARE</a>
                <a href="/favorites" id="favorites">FAVORITES <div className="notification"><span >10</span></div></a>
                <a href="/log" id="log">LOG <div className="notification"><span >8</span></div></a>
                </div>
            </nav>
            <main>
                <History />
            </main>
        </section>
    )
}

    export default AppMain
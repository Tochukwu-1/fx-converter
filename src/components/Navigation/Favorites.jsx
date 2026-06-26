import App from "../../App"
import "../../css/favorite.css"

function Favorites(){


    return(
        <App>
            <div className="favorites">
                <h4>PINNED PAIRS</h4>
                <div className="favoriteItems">
                    <div className="favoriteItem"></div>
                    <div className="favoriteItem"></div>
                    <div className="favoriteItem"></div>
                    <div className="favoriteItem"></div>
                    <div className="favoriteItem"></div>
                    <div className="favoriteItem"></div>
                    <div className="favoriteItem"></div>
                    <div className="favoriteItem"></div>
                </div>
            </div>
        </App>
    )
}

export default Favorites
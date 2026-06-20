// import React from "react"
import "./css/header.css"

function Header() {

  return (
    <header className="header">
        <div className="checkRate"><h4>CHECK THE RATE</h4></div>
        <div className="inputFrame">
          <div className="inputs">
            <div className="input">
              <label htmlFor="send">SEND</label>
              <div className="sendInput">
                <input type="text" id="send" />
                <select name="currency" id="">
                  <option value="usd">usd</option>
                </select>
              </div>
            </div>
            <div className="swap">&lt; &gt;</div>
            <div className="input">
              <label htmlFor="receive">RECEIVE</label>
              <div className="receiveInput">
                <input type="text" id="receive" />
                <select name="currency" id="">
                  <option value="eur">eur</option>
                </select>
              </div>
            </div>
          </div>
          <div className="accessories">
            <div className="rate">1USD = 0.8530 EUR</div>
            <div className="favoriteAndLog">
              <div className="favorite">⭐ FAVORITE</div>
              <div className="log">LOG CONVERSION</div>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header
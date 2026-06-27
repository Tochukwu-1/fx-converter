// import React from "react"
import "../css/header.css"

function Header({input, setInput,amount, setAmount, rate, setRate}) {



  return (
    <header className="header">
        <div className="checkRate"><h4>CHECK THE RATE</h4></div>
        <div className="inputFrame">
          <div className="inputs">
            <div className="input">
              <label htmlFor="send">SEND</label>
              <div className="sendInput">
                <input type="text" id="send"  value={amount.input} onChange={(e)=>setAmount({...amount, input: Number(e.target.value) || 0})}/>
                <select name="currency" id="" onChange={(e)=>setInput({...input, send: e.target.value})}>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="AMD">AMD</option>
                </select>
              </div>
            </div>
            <div className="swap">&lt; &gt;</div>
            <div className="input">
              <label htmlFor="receive">RECEIVE</label>
              <div className="receiveInput">
                <input type="text" id="receive" value={amount.output} />
                <select name="currency" id="" onChange={(e)=>setInput({...input, receive: e.target.value})}>
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                  <option value="GBP">GBP</option>
                  <option value="AMD">AMD</option>
                </select>
              </div>
            </div>
          </div>
          <div className="accessories">
            <div className="rate">1{input.send} = {rate.receive} {input.receive}</div>
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
// import React from "react"
import { useEffect, useState } from "react"
import "../css/header.css"

function Header() {
  const [amount, setAmount] = useState({input: 1, output: 0})
  const [input, setInput] = useState({send: "USD", receive: "EUR"})
  const [rate, setRate] = useState({send: "", receive: ""})


  useEffect(()=>{ 
    const fetchCurrency = async () => {
    const currencyRes = await fetch(`https://api.frankfurter.dev/v2/rates?base=${input.send.toUpperCase()}&quotes=${input.receive.toUpperCase()}`)
    if(!currencyRes.ok){
      throw new Error("Failed to fetch currency data")
    }
    const currencyData = await currencyRes.json()
    console.log(currencyData);
    setRate(rate => ({...rate,receive: (currencyData[0].rate)}))
    console.log(rate.receive);
    
    function convert() {
    const api = "https://api.frankfurter.dev";
    return fetch(`${api}/v2/rate/${input.send}/${input.receive}`)
      .then((r) => r.json())
      .then((d) => (amount.input * d.rate).toFixed(2));
  }
  convert().then((result => setAmount(amount => ({...amount, output: result}))))
    
  }
  fetchCurrency()
  },[input.send, input.receive, rate.receive, amount.input])



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
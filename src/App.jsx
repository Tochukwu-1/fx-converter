
import { useEffect, useState } from "react"
import './App.css'
import Heading from "./components/Heading.jsx"
import Header from "./components/Header.jsx"
import AppMain from "./components/AppMain.jsx"
import Footer from "./components/Footer.jsx"
function App({children}) {
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
    <div className="App">
      <Heading />
      <section>
        <Header input={input} setInput={setInput} amount={amount} setAmount={setAmount} rate={rate} setRate={setRate} />
        <AppMain>
          {children}
        </AppMain>
      </section>
      <Footer />
    </div>
  )
}

export default App


import './App.css'
import Heading from "./components/Heading.jsx"
import Header from "./components/Header.jsx"
import AppMain from "./components/AppMain.jsx"
import Footer from "./components/Footer.jsx"
function App() {

  return (
    <div className="App">
      <Heading />
      <section>
        <Header />
        <AppMain />
      </section>
      <Footer />
    </div>
  )
}

export default App

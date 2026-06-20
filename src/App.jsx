
import './App.css'
import Heading from "./Heading.jsx"
import Header from "./Header.jsx"
import AppMain from "./AppMain.jsx"
import Footer from "./Footer.jsx"
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

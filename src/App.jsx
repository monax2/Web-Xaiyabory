import Context from "./data/Context"
import Web from "./compotnet/Web"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import PositionApp from "./position/PositionApp"
import Dvevlopers from "./developers/Developers"
import Footer from "./compotnet/footer"
function App() {
  // todo manu
  const manu = [
    {title: "ໜ້າລັກ", link: "/"},
    {title: "ທີ່ຕັ້ງ", link: "/position"},
    {title: "ຜູ້ພັດທະນາ", link:"/developers"}
  ]
  return (
    <Context.Provider value={manu}>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Web />}></Route>
          <Route path="/position" element={<PositionApp/>}></Route>
          <Route path="/developers" element={<Dvevlopers/>}></Route>
        </Routes>
      </Router>
    </div>
    <Footer/>
    </Context.Provider>
  )
}

export default App

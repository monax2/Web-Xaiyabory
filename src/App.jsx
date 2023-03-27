import Context from "./data/Context"
import Web from "./compotnet/Web"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import PositionApp from "./position/PositionApp"
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
        </Routes>
      </Router>
    </div>
    </Context.Provider>
  )
}

export default App

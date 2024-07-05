
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Clients, Home, Industry, Nav, Overview, Services} from "./components"
import AllCompo from "./components/AllCompo"
import LetsCola from "./components/LetsCola"
import Footer from "./components/Footer"



function App() {
  
  
  return (
    <div className=" bg-white overflow-x-hidden">
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<AllCompo/>}></Route>
        <Route path="/clients" element={<Clients/>}></Route>
        <Route path="/industry" element={<Industry/>}></Route>
        <Route path="/overview" element={<Overview/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/contactus" element={<LetsCola/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>  

    </div>
  )
}

export default App

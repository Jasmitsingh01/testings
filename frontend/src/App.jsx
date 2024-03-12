import { Route, Routes } from "react-router-dom"
import Singup from "./Pages/Singup"
import Login from "./Pages/Login"
import Product from "./Pages/Product"


function App() {
  
  return (
    <>
     <Routes>
         <Route path="/" element={<Product/>}/>
         <Route path="/singup"  element={<Singup/>}/>
         <Route path="/login"   element={<Login/>}/>

     </Routes>
    </>
  )
}

export default App

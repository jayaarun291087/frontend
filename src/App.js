import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter, Route,Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Register from "./components/auth/Register";

function App(){
  return(
     <div className="App">;
  <BrowserRouter>
  <ToastContainer/>
  <NavBar/>
  <div className="content-container">
  <Routes>
    <Route path="/" exact element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/not-found" element={<NotFound/>} />
    <Route to="/not-found"/>
    </Routes>
    </div>
  </BrowserRouter>
  </div>

) }

export default App;
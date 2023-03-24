import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Sobre from "./Sobre";
import Usuario from "./Usuario";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Sobre} path="/sobre" />
        <Route Component={Usuario} path="/usuario" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

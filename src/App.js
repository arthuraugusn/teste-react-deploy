import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Sobre from "./Sobre";
import Usuario from "./Usuario";

function App() {
  return (
    <Routes>
      <Route Component={Home} path="/" />
      <Route Component={Sobre} path="/sobre" />
      <Route Component={Usuario} path="/usuario" />
    </Routes>
  );
}

export default App;

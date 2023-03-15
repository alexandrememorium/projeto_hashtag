import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './paginas/Inicio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio></Inicio>}></Route>
      </ Routes>
    </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import CepJS from './cep.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />}></Route>
          <Route path='/goalfy/create' element={<EmpCreate />}></Route>
          <Route path='/Goalfy/create/Goalfy/cep' element={<CepJS/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import MainRoute from './Route/MainRoute';

function App() {
  return (
    <div className="App">
      <MainRoute />  
    </div>
  );
}

export default App;

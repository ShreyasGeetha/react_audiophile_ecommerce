import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Headphones from './components/Category/Headphones/Headphones';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='headphones' element={ <Headphones />}/>
      </Routes>
    </>
  );
}

export default App;

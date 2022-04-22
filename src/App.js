import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Headphones from './components/Category/Headphones/Headphones';
import Speakers from './components/Category/Speakers/Speakers';
import Earphones from './components/Category/Earphones/Earphones';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='headphones' element={ <Headphones />}/>
        <Route path='speakers' element={ <Speakers />}/>
        <Route path='earphones' element={ <Earphones />}/>
      </Routes>
    </>
  );
}

export default App;

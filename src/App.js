import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Headphones from './components/Category/Headphones/Headphones';
import Speakers from './components/Category/Speakers/Speakers';
import Earphones from './components/Category/Earphones/Earphones';
import HeadphoneDetails from './components/Product/HeadphoneDetails/HeadphoneDetails';
import SpeakerDetails from './components/Product/SpeakerDetails/SpeakerDetails';
import EarphoneDetails from './components/Product/EarphoneDetails/EarphoneDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route exact path='headphones' element={<Headphones />} />
        <Route path="headphones/:headphoneId" element={<HeadphoneDetails />}></Route>
        {/* </Route>  */}
        <Route path='speakers' element={<Speakers />} />
        <Route path="speakers/:speakerId" element={<SpeakerDetails />}></Route>          
        <Route path='earphones' element={<Earphones />} />        
        <Route path="earphones/:earphoneId" element={<EarphoneDetails />}></Route>          
      </Routes>
    </>
  );
}

export default App;

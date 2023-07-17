
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Audience from './Pages/Audience/Audience';
import Teams from './Pages/Team/Teams';

function App() {
  return (
    <>
<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/audience" element={<Audience/>}/>
<Route path="/team" element={<Teams/>}/>
</Routes>
    </>
  );
}

export default App;


import { Route, Routes } from 'react-router-dom';
import './App.css';
import Flash from './pages/Flash';
import SignUp from './pages/SignUp';
import MakeUpPage from './pages/MakeUpPage';
import StorePage from './pages/StorePage';
import Profile from './pages/Profile';
import FacePage from './pages/FacePage';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Flash/>} />
    <Route path='/signup' element={<SignUp />} />
    <Route path='/makeup' element={ <MakeUpPage />} />
    <Route path='/store' element={ <StorePage />} />
    <Route path ='/profile' element={ <Profile />} />
    <Route path='/face/:id' element={ <FacePage />} />
  
   </Routes>
   </>
  );
}

export default App;

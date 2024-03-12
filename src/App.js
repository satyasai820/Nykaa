
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Flash from './pages/Flash';
import SignUp from './pages/SignUp';
import MakeUpPage from './pages/MakeUpPage';
import StorePage from './pages/StorePage';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Flash/>} />
    <Route path='/signup' element={<SignUp />} />
    <Route path='/makeup' element={ <MakeUpPage />} />
    <Route path='/store' element={ <StorePage />} />
 
   </Routes>
   </>
  );
}

export default App;

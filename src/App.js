
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Flash from './pages/Flash';
import SignUp from './pages/SignUp';
import MakeUpPage from './pages/MakeUpPage';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Flash/>} />
    <Route path='/signup' element={<SignUp />} />
    <Route path='/makeup' element={ <MakeUpPage />} />
 
   </Routes>
   </>
  );
}

export default App;

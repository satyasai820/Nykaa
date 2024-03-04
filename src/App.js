
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Flash from './pages/Flash';
import SignUp from './pages/SignUp';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Flash/>} />
    <Route path='/signup' element={<SignUp />} />
 
   </Routes>
   </>
  );
}

export default App;

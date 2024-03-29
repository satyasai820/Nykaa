import React,{useEffect, useRef} from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Flash from './pages/Flash';
import SignUp from './pages/SignUp';
import MakeUpPage from './pages/MakeUpPage';
import StorePage from './pages/StorePage';
import Profile from './pages/Profile';
import FacePage from './pages/FacePage';
import DetailsPage from './pages/DetailsPage';


const ScrollToTop = () => {
  const  pathname  = useLocation();
  const prevPathname = useRef();

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      window.scrollTo(0, 0);
      prevPathname.current = pathname;
    }
  }, [pathname]);

  return null;
};

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
    <Route path='/Details' element={ <DetailsPage />} />
  
   </Routes>

   <ScrollToTop />
   </>
  );
}

export default App;

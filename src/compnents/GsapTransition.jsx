import { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home';
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import SellerDashoard from "../pages/SellerDashboard";
import gsap from "gsap"
import {Toaster} from "react-hot-toast"

const GsapTransition = () => {
    const nodeRef = useRef(null);
    const location = useLocation();
  

    useEffect(() => {
if(nodeRef.current){
    gsap.fromTo(nodeRef.current,  {opacity: 0,},{duration: 0.5, opacity: 1,})
}
    },[location]);
  return (
    <div ref={nodeRef}>
        <Toaster/>
      <Routes location={location}>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/sellerDashboard' element={<SellerDashoard/>}/>
    </Routes>
    </div>
  )
}

export default GsapTransition

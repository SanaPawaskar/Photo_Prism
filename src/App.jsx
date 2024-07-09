import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './compnents/Navbar';

import GsapTransition from './compnents/GsapTransition';
function App() {


  return (
    <>
  <BrowserRouter>

  <Navbar/>
<GsapTransition/>


  </BrowserRouter>
    </>
  )
}

export default App

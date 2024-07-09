import {} from 'react'
import "../styles.css"
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='nav-container'>
     <div className='Logo-name-div'>
    Photo - Prism
     </div>
  
  <ul className='nav-items'>
      <Link to="/">Home</Link>
      <li to="">About</li>
      <li>Contact</li>
      <Link to="/signup">Sign Up</Link>
      <li></li>
     </ul>
 
    </div>
  )
}

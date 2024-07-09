import {} from 'react'
import "../styles.css"
const HeroSection = () => {
  return (
    <div className='search-container'>
      <form>
        <input type='search' id='search' name='search' className='input-search-field'
        placeholder='Search your asset..'/>
      </form>
    </div>
  )
}

export default HeroSection

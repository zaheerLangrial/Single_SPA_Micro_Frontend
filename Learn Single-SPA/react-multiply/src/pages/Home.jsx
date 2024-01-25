import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{display: 'flex' , gap : 30}}>
      <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/'}>Home</Link>
    </div>
  )
}

export default Home
import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='fony-[font2] flex items-center justify-center gap-5 text-white' >
      <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-[6vw] flex items-center px-10 border-white rounded-full uppercase'>
      <Link className='text-[6.5vw] font-semibold' to="/projects">Projects</Link>
      </div>
      <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-[6vw] flex items-center px-10 border-white rounded-full uppercase'>
      <Link className='text-[6.5vw] font-semibold' to="/agence">Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
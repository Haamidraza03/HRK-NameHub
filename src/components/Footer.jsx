import React from 'react'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <>
    <footer className="row justify-content-center rounded-pill text-white align-items-center px-2 py-2 bg-black fixed-bottom">
        <p className='m-0 text-center'>Copyright &copy; HRK-NameHub 2025. All Rights Reserved.</p>
        <p className="m-0 text-center">Made with &hearts; by <span className='text-info'><a href="https://hrk03.vercel.app" style={{textDecoration:"none"}} target='_blank' className='text-info'>Haamid Raza Kazi</a></span>  </p>
    </footer>
    </>
  )
}

export default Footer
import React from 'react'

const Footer = ({length}) => {
    const year = new Date();
  return (
    <footer className='w-100 bg-primary text-white'>
      <div className="pt-1">
        <p>{length}</p>
      {/* <p>Copyright &copy; {year.getFullYear()}</p> */}
      </div>
    </footer>
  )
}

export default Footer
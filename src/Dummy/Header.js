import React from 'react'

const Header = ({title = "To Do List 2"}) => {
  return (
    <header className='w-100 bg-primary'>
      <div className="container d-flex justify-content-center text-white">
        <h1 className='px-2'>To</h1>
      </div>
    </header>
  )
}

// Depricated :
// Header.defaultProps = {
//   title: "To Do List 2"
// }

export default Header

// rafce
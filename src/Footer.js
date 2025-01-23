import React from 'react'

const Footer = ({length}) => {
    const year = new Date();
  return (
    <footer>
      <p>{length}</p>
      {/* <p>Copyright &copy; {year.getFullYear()}</p> */}
    </footer>
  )
}

export default Footer
import React from 'react'

const Footer = ({length}) => {
    const year = new Date();
  return (
    <footer>
      <p>{length}</p>
    </footer>
  )
}

export default Footer
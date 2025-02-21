import React from 'react'

const SearchItem = () => {
  return (
    <form className='searchForm'
        onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search</label>
            <input 
                id='search'
                type="search" 
                role='searchbox'
                placeholder='Search task'
                className='form-control'
            />
    </form>
  )
}

export default SearchItem
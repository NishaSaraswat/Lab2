import React from 'react'
import { SearchContainer, SearchInput } from '../styles/Search.styles'
import { useGlobalContext } from '../../context/NewsContext'

function Search() {
  const {query, searchPost} = useGlobalContext();

  return (
    <SearchContainer>
      <h1>Tech News On The Go</h1>
      <form onSubmit={(e)=>e.preventDefault()}>
        <SearchInput 
          type="text" 
          placeholder="Search for stories..."
          value={query}
          onChange={(e) => searchPost(e.target.value)}
        />
      </form>
  </SearchContainer>
  )
}

export default Search
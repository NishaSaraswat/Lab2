import React from 'react'
import { SearchContainer, SearchInput } from '../styles/Search.styles'

function Search() {
  return (
    <SearchContainer>
    <SearchInput 
      type="text" 
      placeholder="Search for stories..."
    />
  </SearchContainer>
  )
}

export default Search
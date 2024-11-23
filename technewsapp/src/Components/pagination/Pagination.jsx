import React from 'react'
import { PaginationContainer, PaginationButton } from '../styles/Pagination.styles';

function Pagination() {
  return (
    <PaginationContainer>
    <PaginationButton>Prev</PaginationButton>
    <PaginationButton>Next</PaginationButton>
  </PaginationContainer>
  )
}

export default Pagination
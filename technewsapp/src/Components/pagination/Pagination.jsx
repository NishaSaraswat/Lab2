import React from 'react'
import { useGlobalContext } from '../../context'
import { PaginationContainer, PaginationButton } from '../styles/Pagination.styles';


function Pagination() {
  const {page, nbPages, getPrePage, getNextPage} = useGlobalContext();
  return (
    <PaginationContainer>
    <PaginationButton onClick={()=>getPrePage()}>Prev</PaginationButton>
    <p>{page + 1} of {nbPages}</p>
    <PaginationButton onClick={()=>getNextPage()}>Next</PaginationButton>
  </PaginationContainer>
  )
}

export default Pagination
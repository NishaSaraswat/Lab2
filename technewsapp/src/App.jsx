import React from 'react'
import Search from './Components/search/Search'
import Pagination from './Components/pagination/Pagination'
import Stories from './Components/stories/Stories'
import { AppContainer } from './Components/styles/App.styles'


function App() {
  return (
    <AppContainer>
      <Search />
      <Pagination />
      <Stories />
    </AppContainer>
  )
}

export default App
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import styled, {ThemeProvider} from 'styled-components'

import {GlobalStyles} from '../../styles/global'
import {useRoutes} from '../../routes'

import {Header} from '../../components'
import {useSelector} from 'react-redux'
import {lightTheme, darkTheme} from '../../styles/theme'

const Main = styled.main`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
`

const Layout = () => {
  const {isAuthenticated} = useSelector(state => state.dataAuth)
  const router = useRoutes(isAuthenticated)

  return (
    <Router>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        {isAuthenticated && <Header />}
        <Main>
          {router}
        </Main>
      </ThemeProvider>
    </Router>
  )
}

export default Layout

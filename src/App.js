import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import ByCountry from './ByCountry'
import Footer from './Footer'
import GlobalStyles from './GlobalStyles'
import Header from './Header'
import HomePage from './HomePage'
import Recovered from './Recovered'
import TotalCases from './TotalCases'

export default function App() {
  return (
    <BodyStyled>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/totalcases">
          <TotalCases />
        </Route>
        <Route path="/recovered">
          <Recovered />
        </Route>
        <Route path="/bycountry">
          <ByCountry />
        </Route>
      </Switch>
      <Footer />
    </BodyStyled>
  )
}

const BodyStyled = styled.div`
  display: grid;
  grid-template-rows: 48px auto 48px;
  height: 100vh;
`

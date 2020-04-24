import React from 'react'
import styled from 'styled-components/macro'
import Headline from './Headline'
import useCountryData from './useCountryData'

export default function Recovered() {
  const { countryData } = useCountryData()

  return (
    <main>
      <Headline>Recovered</Headline>
      <ListStyled>
        {countryData.map((country) => {
          return (
            <ListItemStyled key={country.country}>
              <span>{country.country}:</span> {country.recovered} recovered
            </ListItemStyled>
          )
        })}
      </ListStyled>
    </main>
  )
}

const ListStyled = styled.ul`
  line-height: 1.5;
`
const ListItemStyled = styled.li`
  display: grid;
  grid-template-columns: 50% 50%;
`

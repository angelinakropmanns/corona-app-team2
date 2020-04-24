import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Headline from './Headline'
import useCountryData from './useCountryData'

export default function ByCountry() {
  const { countryData } = useCountryData()
  const [selectedIndex, setSelectedIndex] = useState([null])
  const selectedCountry = countryData[selectedIndex]

  return (
    <main>
      <Headline>By Country</Headline>
      <label>
        <select onChange={(event) => setSelectedIndex(event.target.value)}>
          <option>All</option>
          {countryData.map((country, index) => (
            <option key={country.country} value={index}>
              {country.country}
            </option>
          ))}
        </select>
      </label>
      <ListStyled>
        {selectedCountry === undefined &&
          countryData.map((country) => (
            <ListItemStyled key={country.country}>
              <span>{country.country}:</span> <br />
              Cases: {country.cases}
              <br />
              Cases Today: {country.todayCases}
              <br />
              Deaths: {country.deaths}
              <br />
              Deaths Today: {country.todayDeaths}
              <br />
              Recovered: {country.recovered}
              <br />
              Active: {country.active}
              <br />
              Critical: {country.critical}
              <br />
              Cases per 1 Mio: {country.casesPerOneMillion}
              <br />
              Deaths per 1 Mio: {country.deathsPerOneMillion}
              <br />
            </ListItemStyled>
          ))}

        {selectedCountry && (
          <ListItemStyled key={selectedCountry.country}>
            <span>{selectedCountry.country}:</span> <br />
            Cases: {selectedCountry.cases}
            <br />
            Cases Today: {selectedCountry.todayCases}
            <br />
            Deaths: {selectedCountry.deaths}
            <br />
            Deaths Today: {selectedCountry.todayDeaths}
            <br />
            Recovered: {selectedCountry.recovered}
            <br />
            Active: {selectedCountry.active}
            <br />
            Critical: {selectedCountry.critical}
            <br />
            Cases per 1 Mio: {selectedCountry.casesPerOneMillion}
            <br />
            Deaths per 1 Mio: {selectedCountry.deathsPerOneMillion}
            <br />
          </ListItemStyled>
        )}
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

import { useEffect, useState } from 'react'
import { loadCountries, loadFromStorage, saveToStorage } from './services'

export default function useCountryData() {
  const [countryData, setCountryData] = useState(
    loadFromStorage('countryData') || []
  )

  const lastSavedDate = loadFromStorage('lastSavedDate')

  useEffect(() => {
    lastSavedDate !== getCurrentDate() &&
      loadCountries()
        .then((data) => setCountryData(data.reverse()))
        .catch((error) => console.log(error))
  }, [lastSavedDate])

  useEffect(() => {
    saveToStorage('countryData', countryData)
    saveToStorage('lastSavedDate', getCurrentDate())
  }, [countryData])

  function getCurrentDate() {
    return new Date().toLocaleDateString('de-DE')
  }

  return { countryData }
}

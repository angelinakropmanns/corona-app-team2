export function saveToStorage(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}

export function loadFromStorage(name) {
  try {
    return JSON.parse(localStorage.getItem(name))
  } catch (error) {
    console.log(error.message)
  }
}

export function loadCountries() {
  return fetch('https://corona.lmao.ninja/countries?sort=country').then((res) =>
    res.json()
  )
}

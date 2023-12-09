import React from 'react'
import { useParams } from 'react-router-dom'
import worldcountries from 'world-countries'
import CountryInfo from '../CountryInfo' // ..går tillbaka i directory dvs ut från components mappen till src mappen

// Sorterar länderna efter yta
worldcountries.sort((a, b) => b.area - a.area)
const onlyCountries = worldcountries.filter(country => (country.name.common !== 'Antarctica'))

function getCountryByCca3 (cca3) {
  const found = onlyCountries.find(element => element.cca3 === cca3)
  return (
    found
  )
}

// sidan som visar mer info om de landet som man klickat på
function CountryDetails () {
  const { cca3 } = useParams()
  const country = getCountryByCca3(cca3)
  const grannar = country.borders.map(cca3 => getCountryByCca3(cca3))

  return (
    <div>
      <div> <h1>Border countries of {country.name.common}</h1> </div>
      {grannar.sort((a, b) => b.area - a.area).map((country) => <CountryInfo key={country.cca3} data={country}> </CountryInfo>)}

    </div>
  )
}

export default CountryDetails

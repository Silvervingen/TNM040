import React, { useState } from 'react'
import './App.css'
import worldcountries from 'world-countries'
import CountryInfo from './CountryInfo'
import CountryDetails from './components/CountryDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

// Sorterar länderna efter yta
worldcountries.sort((a, b) => b.area - a.area)

// Tar bort antartica från listan
const onlyCountries = worldcountries.filter(country => (country.name.common !== 'Antarctica'))

// sidan som visar listan av länder
function CountryList () {
  // använder setsearchstrings värde och skriver in i searchstring, varje gång text i searchbar ändras
  const [searchString, setSearchString] = useState('')

  // Ändrar setSearchString till det som skrivits i searchbaren
  function searchInput (event) {
    setSearchString(event.target.value)
  }

  // omvandlar ord till små bokstäver för att komma runt felet med jämförelsen
  const match = word => {
    const lowerCaseWord = word.toLowerCase()
    const lowerCaseSearch = searchString.toLowerCase()
    return lowerCaseWord.indexOf(lowerCaseSearch) === 0
  }

  const searchFilter = onlyCountries.filter(country => match(country.name.common)).slice(0, 15)

  return (
    <div>
      <div>
        <input className='searchBar' type='text' placeholder='Search for a country' onChange={searchInput} />
      </div>
      {searchFilter.map((country, index) => <CountryInfo key={country.cca3} data={country} detailed={index < 5}> </CountryInfo>)}
    </div>
  )
}

// Main, den som renderar
function App () {
  return (
    <Router>
      <div>
        <Link to='/'>Back to country list </Link>
        <Switch>
          <Route exact path='/'>
            <CountryList />
          </Route>
          <Route path='/Country/:cca3'>
            <CountryDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

// Hjälp kommentarer för koden i return()

// contries.map((country, index) => <CountryInfo detailed = {index<5}> skapar en fråga är förmålet på plats mindre än 5 så är det true,
// detta kan göras istället för att dela upp listan har ge var sin lista en egen true eller false tillstånd.

//  rad 41 ändrar man countries till searchFilter då man tittar på samma array men att den filtreras hela tiden med sök
// ordet. När ingen är skrivit så visas alla då det finns ett "inget" framför varje bokstav

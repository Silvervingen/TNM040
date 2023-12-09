import React from 'react';
import './App.css';
import worldcountries from 'world-countries' 
import CountryInfo from './CountryInfo'

//Sorterar länderna efter yta
worldcountries.sort((a, b) => b.area - a.area)

//Tar bort antartica från listan
const filter = worldcountries.filter(country => ( country.name.common !== "Antarctica" ))

// Skapar en ny array för första 15 av worldcountries array
const countries = filter.slice(0,15)

function App() {
return (
    <div>
      {countries.map((country, index) => <CountryInfo key ={country.cca3} data = {country} detailed = {index<5}> </CountryInfo>)}
    </div>
  );
}
// contries.map((country, index) => <CountryInfo detailed = {index<5}> skapar en fråga är förmålet på plats mindre än 5 så är det true,
// detta kan göras istället för att dela upp listan har ge var sin lista en egen true eller false tillstånd.
export default App;



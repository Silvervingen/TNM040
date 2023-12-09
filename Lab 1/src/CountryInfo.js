import React from 'react'

// Tar in värdet från barwidth till css
const Box = props => {
  return (
    <div
      style={{
        width: props.width,
        height: '10px',
        backgroundColor: '#00f'
      }}
    />
  )
}

function CountryInfo ({ data, detailed }) {
  // Boxens ratio
  const ratio = data.area / 17098242
  const barWidth = ratio * 100 + '%'
  return (
    <div>
      <div className='CountryInfo'>
        <p className='paragraf1'> {data.name.common} </p>
        <p className='paragraf2'> {data.area} km², </p>
        {detailed && <p className='paragraf1'> Capital: </p>}
        {detailed && <p className='paragraf2'> {data.capital} </p>}
      </div>
      <Box width={barWidth} />
    </div>
  )
}
export default CountryInfo

/* annat sätt att skriva diven CountryInfo med mer exakt kod. detailed === true/false kan skrivas men behövs ej då detailed testas redan
        {detailed  && <p className = "paragraf1" > {data.name.common} </p>}
        {detailed  && <p className = "paragraf2" > {data.area} km², </p>}
        {detailed  && <p className = "paragraf1" > {data.name.common} </p>}
        {detailed  && <p className = "paragraf2" > {data.area} km², </p>}
        {detailed  && <p className = "paragraf1"  > Capital: </p>}
        {detailed  && <p className = "paragraf2" > {data.capital} </p>}
         */
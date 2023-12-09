import React from 'react'
import { Link } from 'react-router-dom'

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
  const link = '/Country/' + data.cca3
  return (
    <Link to={link}>
      <div>
        <div className='CountryInfo'>
          <p className='paragraf1'> {data.name.common} </p>
          <p className='paragraf2'> {data.area} km², </p>
          {detailed && <p className='paragraf1'> Capital: </p>}
          {detailed && <p className='paragraf2'> {data.capital} </p>}
        </div>
        <Box width={barWidth} />
      </div>
    </Link>
  )
}
export default CountryInfo

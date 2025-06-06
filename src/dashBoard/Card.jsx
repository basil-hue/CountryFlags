import React from 'react'
import './Card.css'

function Card( {data}) {
  return (
    <div className='carder'>
        <div className='flag'>
<img src={data.flag} alt="flag" />
        </div>

        <div className='flagdetials'>
<h4>{data.name}</h4>
<p>{data.region}</p>
        </div>
    </div>
  )
}

export default Card
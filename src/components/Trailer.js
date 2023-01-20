import React from 'react'
import { useParams } from 'react-router-dom'

function Trailer({Lists}) {
  const params=useParams()
  const Movies=Lists.filter((el)=>el.name==params.name)[0]
  return (
    <div>
<img src={Movies.posterurl}/>   
<h1> {Movies.name}</h1>
<p>{Movies.description}</p>
 </div>
  )
}

export default Trailer

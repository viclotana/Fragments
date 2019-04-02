import React from 'react'
function Fragment() {
  const artists = [
    {id: '1', name: 'Davido', genre: 'afro pop'},
    {id: '2', name: 'Skepta', genre: 'afrobeats'},
    {id: '3', name: 'Burna Boy', genre: 'afro pop'},
    {id: '4', name: 'Mr. Eazi', genre: 'afro pop'},
    {id: '5', name: 'Stormzy', genre: 'afro pop'},
    {id: '6', name: 'Wizkid', genre: 'afro pop'}

  ]
 return (
  <>
  <h1>UK Urban Artists Chart</h1>
  { 
    artists.map( artist => (
      <React.Fragment key={artist.id}>
       <h2>{artist.id}: {artist.name}</h2>
      </React.Fragment>
    ))
  }
  </>
 )
}
export default Fragment
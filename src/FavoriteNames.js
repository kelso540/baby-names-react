import React from 'react'

export default function FavoriteNames({favoriteNames, removeFromFavorites, favorites}) {
  return (
        (favorites === true)
        ?<div className='favorites-container'>
          <h2 className='favoriteNamesHeader'>Favorite Names</h2>
          <h5>(click on name to remove)</h5>
          {
            favoriteNames.map(item=>{
              return <button onClick={()=>removeFromFavorites(item)} key={item.id} className={item.sex === 'f' ? "female-button-A" : "male-button-A"}>{item.name} {item.sex === 'f' ? <i className='fa-solid fa-venus'></i> : <i className='fa-solid fa-mars'></i>}</button>
            })
          }
        </div>
        :<div className='names-container-none'></div>
  )
}

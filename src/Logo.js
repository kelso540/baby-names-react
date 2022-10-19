import React from 'react'
import Input from './Input';
import FavoriteNames from './FavoriteNames'; 
import Names from './Names';

export default function Logo({handleFilter, getAllNames, getOnlyGirls, getOnlyBoys, favoriteNames, removeFromFavorites, favorites, display, allNames, addToFavorites, scrollToBottom}) {
  return (
    <div>
      <div className='logoDiv'>
          <div className='textFlex'>
              <h1 className='logoHeader'>Welcome to Baby Names!</h1>
              <h3 className='logoText'>Find that perfect Name!</h3>
              <h4 className='logoSubText'>Search for names below or select Girls, Boys, and All Names.</h4>
              <i className='fa-solid fa-arrow-down-long fa-7x'></i>
          </div>
        </div>
          <Input getOnlyGirls={getOnlyGirls} getOnlyBoys={getOnlyBoys} getAllNames={getAllNames} handleFilter={handleFilter} />
          <FavoriteNames favoriteNames={favoriteNames} removeFromFavorites={removeFromFavorites} favorites={favorites}/>
          <Names display={display} allNames={allNames} addToFavorites={addToFavorites} scrollToBottom={scrollToBottom}/>
    </div>
  )
}

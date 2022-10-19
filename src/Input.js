import React from 'react'

export default function Input({handleFilter, getAllNames, getOnlyGirls, getOnlyBoys}) {
  return (
    <div className='input-container'>
      <div className='inputMobileDiv'>
        <input onChange={ handleFilter } placeholder='Search for a Name' type='text' />
      </div>
      <div className='inputButtonsDiv'>
        <button onClick={ getAllNames } className='all-button button'>All <i className='fa-solid fa-venus-mars'></i></button>
        <button onClick={ getOnlyGirls } className='female-button-main button'>Girls <i className='fa-solid fa-venus'></i></button>
        <button onClick={ getOnlyBoys } className='male-button-main button'>Boys <i className='fa-solid fa-mars'></i></button>
      </div>
    </div>
  )
}

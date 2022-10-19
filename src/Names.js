import React from 'react';
import {useEffect} from 'react'; 

export default function Names({display, allNames, addToFavorites, scrollToBottom}) {

  useEffect(()=>{
    scrollToBottom();
    console.log("effect worked"); 
  }, [scrollToBottom]); 
  
  return (
    <div>
        {
            (display === true)
            ?<div className='names-container'>
            {
              allNames.map(item => {
                return <div className='names-container-buttons'>
                            <button onClick={()=>addToFavorites(item)} key={item.id} className={item.sex==='f' ? "female-button" : "male-button"}>
                            {item.name} {item.sex === 'f' ? <i className='fa-solid fa-venus'></i> : <i className='fa-solid fa-mars'></i>}</button>
                          <div className='hiddenPopUp'>
                            <h3 className='margin'>{item.name}</h3> 
                            <h4 className='margin'>Click to add to Favorites</h4>
                          </div>
                      </div>
              })
            }
            </div>
            :<div className='names-container-none'>
              {/* <i class="fa-solid fa-baby fa-7x"></i> */}
            </div>
      }
    </div>
  )
}

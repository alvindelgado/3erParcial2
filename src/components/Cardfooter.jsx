import React from 'react'
import{Cardsegui}from'./Cardsegui'
import'../styles/Cardfooter.css'
function Cardfooter() {
  return (
    <div className='Cardfooter'>
        <div className='imagens'></div>
        <div className='letra'>
        <span>Yarriba Castro</span>
        <span>Design Track</span>
        <span>I chose design track because I love to design beautiful user-centered interfaces.</span>
        </div>
        <Cardsegui/>

        
    </div>
  )
}

export  {Cardfooter}
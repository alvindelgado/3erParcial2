import React from 'react'
import linkedin from '../assets/ln.svg'
import instagram from '../assets/in.svg'
import  '../styles/Cardsegui.css'
function Cardsegui() {
  return (
    <div className='Cardsegui'>
        <img src={linkedin} alt="1" />
        <span>Yaretas24</span>
        <img src={instagram} alt="2" />
        <span>Yaretas24</span>
    </div>
  )
}

export  {Cardsegui}
import React from 'react'
import{Cardtop}from './Cardtop'
import {Cardfooter}from'./Cardfooter'
import '../styles/Card.css'
function Card() {
  return (
    <div className='Card'>
        <Cardtop/>
        <Cardfooter/>
    </div>
  )
}

export  {Card}
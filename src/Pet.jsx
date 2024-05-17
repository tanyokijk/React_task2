import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Pet({ pets }) {
  return (
    <>
      <h4>My pets:</h4>
      {pets.map((pet, index) => (
        <div key={index}>
          
          <img src={pet.photo} alt={pet.name} />
          <br />
          {pet.name}
          <br />
          Age: {pet.age}
          <br />
        </div>
      ))}
    </>
  )
}

export default Pet
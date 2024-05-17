import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Personal({ name, phone, email, city, experience, skills, photo }) {

  return (
    <>
      <img src={photo} alt={name} />
      <h2>{name}</h2>
      <h4>Phone number: {phone}</h4>
      <h4>Email: {email}</h4>
      <h4>City: {city}</h4>
      <h4>Experience: {experience}</h4>
      <div>
        <h4>Skills:</h4>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Personal
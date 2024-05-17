import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Movie({ movie_name, author_name, year, studio, poster }) {

  return (
    <>
      <img src={poster} alt={movie_name} />
      <h2>Movie: {movie_name}</h2>
      <h4>Author: {author_name}</h4>
      <h4>Year of release: {year}</h4>
      <h4>Movie studio: {studio}</h4>
    </>
  )
}

export default Movie
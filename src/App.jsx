import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Movie from './Movie.jsx'
import Nav from './Nav.jsx'
import Personal from './Personal.jsx'
import Time from './Time.jsx'
import Pet from './Pet.jsx'
import NotFound from './NotFound.jsx'

import { Route, BrowserRouter as Router, Routes, NavLink } from 'react-router-dom';
const skills =
  [
    { name: "PHP" },
    { name: "C++" },
    { name: "C#" },
    { name: "Html" },
  ]

const pets =
  [
    { name: "Kris", age: 5, photo: "/kris.jpg" },
    { name: "Yuki", age: 1, photo: "/yuki.jpg" },
    { name: "Artem", age: 19, photo: "/artem.jpg" },
  ]


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Movie movie_name='Joker' author_name='Todd Phillips' year={2019} studio='DC Films' poster="/joker.jpg" />} />
          <Route path="/personal" element={<Personal name="Tetiana Derevianko" phone="+380963009674" email="t.derevyanko1209@gmail.com" city="Chernivtsi" experience="1 year- copywriter" skills={skills} photo="/tanusha.jpg" />} />
          <Route path="/time" element={<Time />} />
          <Route path="/pet" element={<Pet pets={pets} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

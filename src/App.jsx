import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import MovieSection from './components/MovieSection'

const API_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_KEY

function App() {
  const [trending, setTrending] = useState([])
  const [popular, setPopular] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/trending/movie/week?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setTrending(data.results || []))

    fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setPopular(data.results || []))
  }, [])

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_90%_0%,rgba(120,0,40,0.45),transparent_35%),radial-gradient(circle_at_0%_40%,rgba(60,20,140,0.35),transparent_30%),radial-gradient(circle_at_100%_85%,rgba(150,0,40,0.35),transparent_30%)]"
      ></div>
      <Header />
      <Hero />
      <MovieSection heading="🔥 Trending" movies={trending} />
      <MovieSection heading="YOU MAY LIKE THIS" movies={popular} />
    </>
  )
}

export default App
import Header from './components/Header'
import Hero from './components/Hero'
import MovieSection from './components/MovieSection'
import { trending, mayLike } from './data/movies'

function App() {
  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_90%_0%,rgba(120,0,40,0.45),transparent_35%),radial-gradient(circle_at_0%_40%,rgba(60,20,140,0.35),transparent_30%),radial-gradient(circle_at_100%_85%,rgba(150,0,40,0.35),transparent_30%)]"
      ></div>
      <Header />
      <Hero />
      <MovieSection heading="🔥 Trending" movies={trending} />
      <MovieSection heading="YOU MAY LIKE THIS" movies={mayLike} />
    </>
  )
}

export default App
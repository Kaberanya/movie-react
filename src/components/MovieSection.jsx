import MovieCard from './MovieCard'

function MovieSection({ heading, movies }) {
  return (
    <section className="px-[6%] pb-[60px]">
      <div className="flex items-center gap-4 mb-5">
        <h2 className="text-lg font-bold">{heading}</h2>
        <span className="flex-1 h-px bg-[#222]"></span>
        <a href="#" className="text-xs text-[#9a9a9a] hover:text-white">See More</a>
      </div>
      <div className="grid grid-cols-6 gap-x-[14px] gap-y-5 max-[1000px]:grid-cols-3 max-[600px]:grid-cols-2">
        {movies.map((movie) => (
          <MovieCard key={movie.img} img={movie.img} title={movie.title} />
        ))}
      </div>
    </section>
  )
}

export default MovieSection
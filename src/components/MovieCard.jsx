function MovieCard({ movie }) {
  return (
    <article>
      {movie.poster_path ? (
        <img
          className="w-full aspect-[2/3] object-cover rounded-md mb-[10px] block"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      ) : (
        <div className="w-full aspect-[2/3] rounded-md mb-[10px] bg-[#222]"></div>
      )}
      <h3 className="text-xs font-medium truncate">{movie.title}</h3>
      <p className="text-[11px] text-[#9a9a9a] mt-1">
        {movie.release_date?.slice(0, 4)}
        <span className="text-[#e0147a] mx-1">•</span>
        ★ {movie.vote_average.toFixed(1)}
      </p>
    </article>
  )
}

export default MovieCard
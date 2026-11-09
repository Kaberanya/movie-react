function MovieCard({ img, title }) {
  return (
    <article>
      <img
        className="w-full aspect-[2/3] object-cover rounded-md mb-[10px] block"
        src={`/images/${img}`}
        alt={title}
      />
      <h3 className="text-xs font-medium truncate">{title}</h3>
      <p className="text-[11px] text-[#9a9a9a] mt-1">
        2023 <span className="text-[#e0147a] mx-1">•</span> 104 min
      </p>
    </article>
  )
}

export default MovieCard
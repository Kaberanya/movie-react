function Header() {
    return (
    <header className="flex justify-between items-center px-[6%] py-6">
        <a href="/" className="flex items-center shrink-0">
        <img src="/images/Logo.png" alt="Movie Bazer Logo" className="w-[170px] h-auto block object-contain"/>
    </a>
    <nav className="flex gap-7 text-sm max-[600px]:hidden">
      <a className="text-white font-bold" href="#">Home</a>
      <a className="text-white font-bold" href="#">Explore</a>
      <a className="text-white font-bold" href="#">Gernes</a>
      <a className="text-white font-bold" href="#">New</a>
      <a className="text-white font-bold" href="#">Movies</a>
      <a className="text-white font-bold" href="#">Tv Shows</a>
    </nav>
    </header> 
  )
}
export default Header;
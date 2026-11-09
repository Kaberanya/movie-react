function Hero() {
    return (
        <section className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] items-center gap-[30px] px-[6%] pt-[35px] pb-[65px] min-h-[480px] max-[1000px]:grid-cols-1 max-[1000px]:gap-[35px] max-[600px]:pb-[55px]">
      <div className="relative z-2">
        <h1 className="font-['Barlow_Condensed',sans-serif] text-[38px] leading-none font-extrabold max-[600px]:text-[34px]">
          FIND MOVIES
          <span className="block text-[clamp(32px,3.3vw,46px)] font-extrabold whitespace-nowrap bg-linear-to-r from-[#2b13ff] via-[#7620c8] to-[#d10c65] bg-clip-text text-transparent max-[1000px]:whitespace-normal max-[600px]:text-[36px]">
            TV SHOWS AND MORE
          </span>
        </h1>
        <p className="text-[#bdbdbd] text-sm leading-[1.25] max-w-[440px] mt-[22px] mb-[30px]">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <a className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#ddd] rounded-md text-[13px] font-semibold transition-colors duration-200 hover:bg-white/10" href="#">
          <span>▶</span>
          Watch Tutorial
        </a>
      </div>

      <div className="relative min-w-0 h-[440px] max-[1000px]:h-[420px] max-[1000px]:w-full max-[1000px]:max-w-[500px] max-[1000px]:mx-auto max-[600px]:h-[310px]">
        <img className="absolute right-0 top-0 z-1 w-[300px] h-[400px] object-cover max-[1000px]:w-[min(60%,260px)] max-[1000px]:h-[350px] max-[600px]:w-[55%] max-[600px]:h-[270px]" src="/images/poster2.jpg" alt="Back poster" />
        <img className="absolute right-[160px] top-[40px] z-2 w-[300px] h-[400px] object-cover max-[1000px]:right-[30%] max-[1000px]:top-[35px] max-[1000px]:w-[min(60%,260px)] max-[1000px]:h-[350px] max-[600px]:right-[35%] max-[600px]:top-[30px] max-[600px]:w-[55%] max-[600px]:h-[270px]" src="/images/poster1.jpg" alt="Front poster" />
        <button className="absolute right-[280px] top-[240px] translate-x-1/2 -translate-y-1/2 z-3 w-[60px] h-[60px] rounded-full bg-white text-[#111] text-[22px] cursor-pointer max-[1000px]:right-1/2 max-[1000px]:top-[200px] max-[600px]:top-[150px] max-[600px]:w-[50px] max-[600px]:h-[50px]" aria-label="Play trailer">
          ▶
        </button>
      </div>
    </section>
    )
}
export default Hero
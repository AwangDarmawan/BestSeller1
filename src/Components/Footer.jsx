

export default function Footer() {
  return (
    <footer className=" relative   text-white lg:mx-[490px] font-space">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6  ">

       
            <h1 data-aos="fade-up-right" className="text-sm font-playfair font-semibold">
          Made By
        </h1>
        {/* <h1 data-aos="fade-down-left" className="text-sm font-playfair font-semibold">
          4daDigital
        </h1>

        <a
        data-aos="flip-left"
          href="https://wa.me/6283125307355"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-1 hover:text-green-400 transition font-playfair font-semibold"
        >
          <FaWhatsapp className="text-2xl my-1 " />
          +6283125307355
        </a>

        <a
        data-aos="flip-left"
          href="https://instagram.com/awng_drmwn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-1 hover:text-red-700 hover:font-bold transition font-playfair font-semibold"
        >
          <FaInstagram className="text-2xl my-1" />
          @awng_drmwn
        </a> */}

        <h2 className="text-2xl sm:text-3xl font-bold tracking-wide mt-1 font-playfair">
    4daDigital
  </h2>
  <p className="mt-3 text-sm sm:text-base font-semibold text-white-800 animate-pulse italic">
    🎉 Promo spesial bulan ini! diskon 60% Lihat katalog template sekarang sebelum kehabisan.
  </p>

  <a
    href="https://web-4dadigital.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex
      items-center
      justify-center
      mt-6
      
      py-3
      rounded-full
      bg-gradient-to-r
      from-blue-700
      to-blue-600
      text-white
      font-semibold
      hover:scale-105
      transition-all
      duration-300
      shadow-xl
      w-full
      text-sm sm:text-base
      font-playfair
      
      
      
    "
  >
    🌐 Lihat Semua Template
  </a>

       
      </div>
    </footer>
  );
}
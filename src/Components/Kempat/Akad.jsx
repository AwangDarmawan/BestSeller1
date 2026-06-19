import { FaMapMarkerAlt, FaHeart } from "react-icons/fa";

export default function Akad({
  title,
  date,
  time,
  location,
  mapsLink,
}) {
  return (
    <div
      data-aos="fade-up"
      className="
        relative
        overflow-hidden

        rounded-[30px]
        sm:rounded-[40px]
        md:rounded-[50px]

        border
        border-white/20

        bg-white/10
        backdrop-blur-xl

        shadow-2xl

        px-6
        py-10

        sm:px-8
        md:px-12
        md:py-14

        text-white
      "
    >
      {/* Decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute left-5 top-5 text-6xl">❀</div>
        <div className="absolute right-5 top-5 text-6xl">❀</div>
        <div className="absolute left-5 bottom-5 text-6xl">❀</div>
        <div className="absolute right-5 bottom-5 text-6xl">❀</div>
      </div>

      <div className="relative z-10 text-center">
        <h2 data-aos="fade-up-right"className="font-serif text-3xl font-semibold italic md:text-5xl lg:text-3xl">
          {title}
        </h2>

        <div className="my-6 flex items-center justify-center gap-4">
          <div data-aos="zoom-in-left" className="h-px w-16 bg-white md:w-24" />
          <FaHeart className="text-lg animate-heartbeat" />
          <div data-aos="zoom-in-right" className="h-px w-16 bg-white md:w-24" />
        </div>

        <p className=" text-lg font-semibold font-space">
          {date}
        </p>

        <p className="mt-2 font-space text-base md:text-xl">
          {time}
        </p>

        <p className="mt-5 text-sm text-[9px] sm:text-[12px] md:text-[14px] lg:text-[16px] uppercase tracking-[0.25em] text-white/80 font-serif italic font-semibold">
          Kediaman Mempelai Wanita
        </p>

        <p
          className="
            mx-auto
            mt-4
            max-w-xl

            text-sm
            leading-7
            font-semibold
            md:text-base
            font-space
          "
        >
          {location}
        </p>

        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
          font-space
            mt-8
            inline-flex
            items-center
            gap-2

            rounded-full

            border
            border-white/30

            bg-white/10
            backdrop-blur-md

            px-6
            py-3

            transition-all
            duration-300

            hover:bg-white
            hover:text-black
            font-semibold
          "
        >
          <FaMapMarkerAlt />

          Lihat Lokasi
        </a>
      </div>
    </div>
  );
}
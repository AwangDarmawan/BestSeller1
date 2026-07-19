import { Mail } from "lucide-react";
import coverImage from "../../assets/Img/awal.png";
import { useNavigate, useParams } from "react-router-dom";

export default function Cover() {
     const navigate = useNavigate();
      const { nama } = useParams();
  return (
   <section className="relative min-h-screen  overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0 flex items-center justify-center">
    <img
      src={coverImage}
      alt="Cover"
      className="
        h-full
        w-full
        object-cover

        lg:h-auto
        lg:w-auto
        lg:max-h-screen
        lg:max-w-full
        lg:object-contain
      "
    />
  </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] items-end justify-center">
        <div className="w-full max-w-2xl px-6 pb-12 text-center text-white">
          {/* Title */}
          <p className="mb-1 text-[10px] uppercase tracking-[0.35em] sm:text-xs">
            The Wedding Of
          </p>

          <h1 data-aos="fade-down-left" className="font-serif text-2xl  italic font-semibold sm:text-5xl md:text-4xl lg:text-4xl">
            Romeo & Juliet
          </h1>

          {/* Guest */}
          <div className="mt-8 space-y-1 font-space">
            <p className="text-xs sm:text-sm md:text-base">
              Kepada Yth.
            </p>

            <p className="text-sm sm:text-base md:text-lg">
              Bapak/Ibu/Saudara/i
            </p>

            <h2 data-aos="fade-down-right" className="pt-2 text-xl font-semibold sm:text-2xl md:text-3xl">
              {nama}
            </h2>
          </div>

          {/* Button */}
          <button
          data-aos="fade-up"
              onClick={() => {
                   localStorage.setItem("playMusic", "true");
        navigate("/home");
      }}
            className="
              mx-auto mt-10
              flex items-center justify-center gap-2
              rounded-full
              bg-white
              px-6 py-3
              text-sm font-medium text-gray-900
              shadow-lg
              transition-all duration-300
              hover:scale-105
              hover:bg-gray-100
              active:scale-95
              sm:px-8
            "
          >
            <Mail size={18} />
            Buka Undangan
          </button>
        </div>
      </div>
    </section>
  );
}
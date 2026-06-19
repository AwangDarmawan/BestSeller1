import { FaHeart, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function KataSection() {
  return (
    <section className="relative z-10 px-5 py-24">
      <div className="mx-auto max-w-5xl lg:mx-[470px]">
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

            px-6
            py-12

            sm:px-8
            md:px-14
            md:py-16

            text-center
            text-white

            shadow-2xl
          "
        >
          {/* Ornament */}
          <FaQuoteLeft className="absolute left-6 top-6 text-3xl text-white/20" />
          
          <FaQuoteRight className="absolute bottom-6 right-6 text-3xl text-white/20" />

          {/* Title */}
          <p  data-aos="fade-up-right" className="text-[10px] uppercase tracking-[0.35em] text-white/80 sm:text-xs">
            Hadis Qur'an
          </p>

          <h2 data-aos="zoom-in" data-aos="fade-up-left" className="mt-3 font-serif text-3xl italic sm:text-4xl md:text-5xl font-semi-bold">
            QS. Ar-Rum : 21
          </h2>

          {/* Divider */}
          {/* <div className="mx-auto my-8 h-px w-28 bg-white/30" /> */}
          <div className="my-6 flex items-center justify-center gap-4">
          <div data-aos="zoom-in-left" className="h-px w-16 bg-white md:w-24" />
          <FaHeart className="text-lg animate-heartbeat" />
          <div data-aos="zoom-in-right" className="h-px w-16 bg-white md:w-24" />
        </div>
          

          {/* Ayat */}
          {/* <p
            className="
              mx-auto
              max-w-3xl

              text-sm
              leading-8

              sm:text-base
              md:text-lg
              font-space
            "
          >
            “Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda kebesaran Allah bagi kaum yang berpikir.”
          </p> */}
       

<TypeAnimation
  sequence={[
    "“Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda kebesaran Allah bagi kaum yang berpikir.”",
    3000, // diam 3 detik setelah selesai mengetik
    "", // hapus
    500, // jeda sebelum mengetik lagi
  ]}
  wrapper="p"
  speed={180} // mengetik lambat
  deletionSpeed={180} // menghapus lebih cepat
  repeat={Infinity}
  cursor={true}
  className="
    mx-auto
    max-w-3xl
    text-sm
    leading-8
    sm:text-base
    md:text-lg
    font-space
  "
/>

          {/* Source */}
          <p
            className="
              mt-10

              font-space

              text-[11px]
              uppercase

              tracking-[0.35em]

              text-white/80

              sm:text-xs
            "
          >
            QS. Ar-Rum Ayat 21
          </p>
        </div>
      </div>
    </section>
  );
}
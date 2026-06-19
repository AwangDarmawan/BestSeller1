import { FaGift } from "react-icons/fa";
import GiftCard from "./GiftCard";
import DataGift from "./DataGift";

export default function GiftSection() {
  return (
    <section className="relative z-10 px-5 py-24">
      <div className="mx-auto max-w-6xl lg:mx-[470px]">
        <div
          data-aos="fade-up"
          className="
            rounded-[40px]
            border
            border-white/20
            bg-white/10
            backdrop-blur-xl
            px-6
            py-12
            shadow-2xl
            md:px-10
          "
        >
          <div className="text-center">
            <FaGift className="mx-auto text-4xl text-white" />

            <p className="mt-4 font-space text-[11px] uppercase tracking-[0.35em] text-white/70">
              Wedding Gift
            </p>

            <h2 data-aos="fade-down" className="mt-3 font-serif italic font-semibold text-4xl  text-white sm:text-5xl md:text-5xl lg:text-3xl xl:text-4xl">
              Kirim Hadiah
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/80 font-space">
              Doa restu Anda merupakan hadiah terindah bagi kami. Namun apabila
              ingin memberikan tanda kasih, dapat melalui rekening berikut.
            </p>
          </div>

          <div className=" mt-12
    grid
    grid-cols-1
    gap-6

    sm:grid-cols-1
    md:grid-cols-2
    lg:grid-cols-1
    xl:grid-cols-1
    2xl:grid-cols-2">
            {DataGift.map((item) => (
              <GiftCard key={item.id} {...item} />
            ))}
          </div>

          {/* Alamat Pengiriman */}
          <div
            className="
              mt-10
              rounded-3xl
              border
              border-white/20
              bg-white/5
              p-6
              text-center
            "
          >
            <h3 className="font-serif font-semibold italic text-2xl text-white">
              Kirim Kado
            </h3>

            <p className="mt-4 leading-8 text-white/80 font-space">
              Romeo Saputra
              <br />
              Jl. Merdeka No. 88
              <br />
              Jakarta Selatan
              <br />
              12345
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
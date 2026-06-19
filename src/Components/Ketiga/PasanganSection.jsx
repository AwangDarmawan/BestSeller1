import PasanganCard from "./PasanganCard";


import { Pasangan} from "./Pasangan";

export default function PasanganSection() {
  return (
    <section id="pasangan" className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Title pasangan */}
        <div className="text-center text-white">
      <p className="text-xs uppercase tracking-[0.4em] font-space">
        Bride & Groom
      </p>

      <h2 data-aos="fade-up-right" className="mt-3  font-serif  italic text-4xl  font-semibold sm:text-5xl md:text-5xl lg:text-3xl xl:text-4xl">
        Pasangan 
      </h2>

      <p className=" mt-1 italic text-sm leading-7 sm:text-base md:text-lg lg:text-sm lg:mx-[500px] font-space">
        Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
        menyelenggarakan pernikahan putra-putri kami.
      </p>
    </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-1 lg:mx-[500px]">
          {Pasangan.map((item) => (
            <PasanganCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
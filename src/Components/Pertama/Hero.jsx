
import Timer from "./Timer";


export default function Hero() {
  return (
    <section className="flex min-h-screen items-end justify-center pb-14">
      <div className="text-center text-white">
        <p className="uppercase tracking-[0.35em] text-[9px] sm:text-[10px] md:text-xs lg:text-[10px] xl:text-xs font-space">
          The Wedding Of
        </p>

        <h1 data-aos="fade-down-right" className="mt-3 font-serif  italic text-2xl  font-semibold sm:text-5xl md:text-5xl lg:text-3xl xl:text-4xl">
          Romeo <span className="mx-1">&</span> Juliet
        </h1>
         <p className="mt-1 italic text-sm leading-7 sm:text-base md:text-lg font-space">
            17 Agustus 2026
  
          </p>

        <Timer />
      </div>
    </section>
  );
}
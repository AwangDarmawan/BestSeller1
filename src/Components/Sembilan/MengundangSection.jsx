
import DataMengundang from "./DataMengundang";

export default function MengundangSection() {
  return (
    <section id="family" className="relative z-10 px-5 py-24">
      <div className="mx-auto w-full max-w-6xl lg:px-[400px]">
        <div
          data-aos="fade-up"
          className="
            rounded-[40px]
            border
            border-white/20
            bg-white/10
            backdrop-blur-xl
            shadow-2xl

            px-6
            py-12

            sm:px-8
            md:px-12
            lg:px-16
          "
        >
          {/* Header */}

          <div className="text-center">
            <p className="font-space text-[10px] uppercase tracking-[0.35em] text-white/70">
              Our Family
            </p>

            <h2 className="mt-3 font-serif text-4xl font-semibold italic text-white md:text-5xl lg:text-3xl">
              Turut Mengundang
            </h2>

            

            <p className="mx-auto max-w-3xl font-space leading-8 text-white/80">
              Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
              Bapak/Ibu/Saudara/i berkenan hadir serta memberikan doa restu
              kepada kedua mempelai.
            </p>
          </div>

          {/* Content */}

          <div className="mt-14 grid
    grid-cols-1
    gap-6

    sm:grid-cols-1
    md:grid-cols-2
    lg:grid-cols-1
    xl:grid-cols-1
    2xl:grid-cols-2">
            {DataMengundang.map((group) => (
              <div
                key={group.id}
                data-aos="zoom-in"
                className="
                  rounded-3xl
                  border
                  border-white/20
                  bg-white/5
                  backdrop-blur-md
                  p-6
                  transition-all
                  duration-300
                  hover:bg-white/10
                "
              >
                <h3 className="text-center font-serif text-2xl font-semibold italic text-white">
                  {group.title}
                </h3>

                <div className="mx-auto my-5 h-px w-20 bg-white/20" />

                {/* <ul className=" list-decimal space-y-3">
                  {group.family.map((name, index) => (
                    <li
                      key={index}
                      className="
                        flex
                        items-center
                  
                        gap-3

                        font-space
                        text-sm
                        text-white/90

                        md:text-base
                      "
                    >
                     

                      <span>{name}</span>
                    </li>
                  ))}
                </ul> */}
                <ol className="list-decimal space-y-3 pl-5 text-white/90">
  {group.family.map((name, index) => (
    <li
      key={index}
      className="
        font-space
        text-sm
        md:text-base
     
      "
    >
      {name}
    </li>
  ))}
</ol>
              </div>
            ))}
          </div>

          {/* Footer */}

          <div className="mt-16 text-center">
            <h3 className="font-serif text-3xl font-semibold italic text-white">
              Terima Kasih
            </h3>

            <p className="mt-4 font-space leading-8 text-white/80">
              Atas kehadiran dan doa restu yang diberikan,
              <br />
              kami mengucapkan terima kasih.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
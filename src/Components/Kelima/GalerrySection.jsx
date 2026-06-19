import Gallery from "./Gallery";
import Poto1 from "../../assets/Img/awal.png"
import Poto2 from "../../assets/Img/awal.png"
import Poto3 from "../../assets/Img/awal.png"
import Poto4 from "../../assets/Img/awal.png"
export default function GallerySection() {
  const photos = [
    Poto1,Poto2,Poto3,Poto4
  ];

  return (
    <section id="galery" className="py-12 px-4  bg-white/10 rounded">
      <div className="mx-auto max-w-6xl ">
        <div className="text-center text-white">
      <p data-aos="fade-up-right" className="text-xs uppercase tracking-[0.4em] font-space">
        Bride & Groom
      </p>

      <h2 data-aos="fade-down-left" className="mt-3  font-serif  italic text-4xl  font-semibold sm:text-5xl md:text-5xl lg:text-3xl xl:text-4xl">
        Gallery
      </h2>
      </div>

        <div className="space-y-4 mt-8 lg:mx-[400px] ">
          {Array.from(
            { length: Math.ceil(photos.length / 3) },
            (_, index) => {
              const start = index * 3;

              return (
                <div
                  key={index}
                  className="space-y-4"
                   data-aos="fade-up"
                >
                  {/* Foto Besar */}
                  {photos[start] && (
                    <Gallery
                      src={photos[start]}
                      alt={`Gallery ${start + 1}`}
                      data-aos="zoom-in-up"
                      className="aspect-[16/9]"
                    />
                  )}

                  {/* Dua Foto */}
                  <div className="grid grid-cols-2 gap-4">
                    {photos[start + 1] && (
                      <Gallery
                        src={photos[start + 1]}
                        alt={`Gallery ${start + 2}`}
                        data-aos="fade-down-right"
                        className="aspect-square"
                      />
                    )}

                    {photos[start + 2] && (
                      <Gallery
                        src={photos[start + 2]}
                        alt={`Gallery ${start + 3}`}
                           data-aos="fade-down-left"
                        className="aspect-square"
                      />
                    )}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
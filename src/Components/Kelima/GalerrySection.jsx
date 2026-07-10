import Gallery from "./Gallery";
// import Poto1 from "../../assets/Img/awal.png"
// import Poto2 from "../../assets/Img/awal.png"
// import Poto3 from "../../assets/Img/awal.png"
// import Poto4 from "https://i.pinimg.com/736x/f9/c2/5e/f9c25e95bc50713f54d7676d856500ca.jpg"
export default function GallerySection() {
  // const photos = [
  //   Poto1,Poto2,Poto3,Poto4
  // ];
  const photos = [
  "https://i.pinimg.com/736x/f9/c2/5e/f9c25e95bc50713f54d7676d856500ca.jpg",
  "https://www.passionjewelry.co.id/uploads/rekomendasi-gelang-couple-pasangan-yang-mewah-buat-tampilan-semakin-memukau-366-2024-10-24-164902.jpg",
  "https://p16-lemon8-sign-sg.tiktokcdn.com/tos-alisg-v-a3e477-sg/ocGqAISAIQCPZL67eoxeEOCQSkAsEbAxfPIhJD~tplv-sdweummd6v-text-logo-v1:QGNld2V2aXJnb18wMQ==:q75.jpeg?lk3s=c7f08e79&source=lemon8_seo&x-expires=1786255200&x-signature=GfFvHQp5cekzag8yAC6fXyjlvWk%3D",
  "https://scontent-cgk1-2.xx.fbcdn.net/v/t39.30808-6/610869933_897504409451219_8688840779019264988_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1440&ctp=s1080x1440&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHheYDX9dzk4M3pnys11Imc9IiuknTsstH0iK6SdOyy0TZLuok5tdSowqvgm6PEUEFhDrla35r6bc-hIy0wKusF&_nc_ohc=44V2J0Hksn0Q7kNvwES6BBI&_nc_oc=AdoxOvWUENomOmV__ih0RJtDzk0xsJma_socqzO8QsZP9v59trUi_dc8r5y-FaveM1M&_nc_zt=23&_nc_ht=scontent-cgk1-2.xx&_nc_gid=08ttxwxajdqv9SNYkieB_A&_nc_ss=7b2a8&oh=00_AQDxjpLSpEyrSm35sdgrj7A0CmulTFvg7KpwF3XBdxXuGQ&oe=6A562C3D",
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
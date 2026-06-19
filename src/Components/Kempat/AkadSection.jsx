import Akad from "./Akad";

export default function AkadSection() {
  return (
    <section id="akad" className="relative z-10 py-24">
      <div className="mx-auto w-full max-w-6xl px-5">

        {/* Heading */}

        <div className="mb-16 text-center text-white">

          <p className="text-xs uppercase tracking-[0.4em] font-space">
            Wedding Event
          </p>

          <h2 data-aos="fade-down-right" className="mt-4  font-serif text-4xl italic sm:text-5xl md:text-5xl lg:text-3xl xl:text-4xl font-semibold">
            Save The Date
          </h2>

          <p className="mx-auto mt-1 italic text-sm leading-7 sm:text-base md:text-lg lg:text-sm lg:mx-[400px] font-space">
            Dengan memohon rahmat Allah SWT,
            kami mengundang Bapak/Ibu/Saudara/i
            untuk hadir pada acara pernikahan kami.
          </p>

        </div>

        {/* Card */}

        <div className="space-y-10  lg:mx-[400px]">

          <Akad
            title="Akad Nikah"
            date="Senin, 17 Agustus 2026"
            time="09.00 WIB s/d Selesai"
            location="Kp. Halimun RT 003/RW 004, Desa Warudoyong, Kecamatan Cikalongkulon, Kabupaten Cianjur, Jawa Barat."
            mapsLink="https://www.google.com/maps?q=-6.7095556,107.2343388"
          />

          <Akad
            title="Resepsi"
            date="Senin, 17 Agustus 2026"
            time="11.00 WIB s/d Selesai"
            location="Kp. Halimun RT 003/RW 004, Desa Warudoyong, Kecamatan Cikalongkulon, Kabupaten Cianjur, Jawa Barat."
            mapsLink="https://www.google.com/maps?q=-6.7095556,107.2343388"
          />

        </div>

      </div>
    </section>
  );
}
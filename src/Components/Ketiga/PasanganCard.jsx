import { FaInstagram } from "react-icons/fa";

export default function PasanganCard({
  role,
  name,
  image,
  father,
  mother,
  instagram,
}) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/10
        p-6
        backdrop-blur-md
        transition
        duration-300
        hover:scale-[1.02]
      "
    >
      <div className="flex flex-col items-center text-center text-white">
        <img
          src={image}
          alt={name}
          className="
            h-44
            w-44
            rounded-full
            object-cover
            ring-4
            ring-white/20
          "
        />

        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-gray-100 font-space font-black">
          {role}
        </p>

        <h2 className="mt-2 font-serif text-4xl italic">
          {name}
        </h2>

        <p className="mt-5 text-sm text-gray-300 font-space">
          Putra / Putri dari
        </p>

        <p className="mt-2 font-space">{father}</p>

        <p className="font-space">&</p>

        <p className="font-space">{mother}</p>

        <a
      
          href={instagram}
          target="_blank"
          rel="noreferrer"
          className="
          font-space
            mt-6
            flex
            items-center
            gap-2

            rounded-full

            border

            border-white/20

            px-5

            py-2

            transition

            hover:bg-white

            hover:text-black
          "
        >
          <FaInstagram />

          Instagram
        </a>
      </div>
    </div>
  );
}
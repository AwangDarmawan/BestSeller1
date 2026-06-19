import { FaCopy, FaUniversity } from "react-icons/fa";

export default function GiftCard({ bank, number, name, color }) {
  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(number);
      alert("Nomor rekening berhasil disalin.");
    } catch {
      alert("Gagal menyalin nomor rekening.");
    }
  };

  return (
    <div
      className="
        rounded-3xl
        border
        border-white/20
        bg-white/10
        backdrop-blur-xl
        p-6
        shadow-xl
      "
    >
      <div className="flex items-center gap-3">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full"
          style={{ backgroundColor: color }}
        >
          <FaUniversity className="text-xl text-white" />
        </div>

        <div>
          <h3 className="font-serif font-semibold italic text-xl text-white">{bank}</h3>

          <p className="text-sm text-white/70 font-space">Bank Transfer</p>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <p className="font-space text-white/70">Nomor Rekening</p>

        <h4 className="break-all text-xl font-bold tracking-widest text-white">
          {number}
        </h4>

        <p className="font-space text-white font-black">{name}</p>
      </div>

      <button
        onClick={copyNumber}
        className="
          mt-6
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-full
          border
          border-white/30
          bg-white/10
          py-3
          text-white
          transition-all
          duration-300
          hover:bg-white
          hover:text-black
          font-space
        "
      >
        <FaCopy />

        Copy Rekening
      </button>
    </div>
  );
}
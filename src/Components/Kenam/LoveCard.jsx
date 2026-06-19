export default function LoveCard({ title, description, last }) {
  return (
    <div  data-aos="fade-up" className="relative flex gap-6">
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className="h-4 w-4 rounded-full bg-white" />

        {!last && (
          <div className="mt-2 h-full w-[2px] bg-white/30" />
        )}
      </div>

      {/* Content */}
      <div className="pb-12">
        <h3 className="font-playfair text-2xl italic text-white">
          {title}
        </h3>

        <p className="mt-4 leading-8 text-white/80 font-space">
          {description}
        </p>
      </div>
    </div>
  );
}
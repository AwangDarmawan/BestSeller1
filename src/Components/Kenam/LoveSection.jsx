import { GiFlowerPot } from "react-icons/gi";
import LoveCard from "./LoveCard";
import DataLove from "./DataLove";

export default function LoveSection() {
  return (
    <section className="relative z-10 py-24 px-5">
      <div className="mx-auto max-w-4xl lg:mx-[470px]">

        <div
          className="
            rounded-[40px]

            border
            border-white/20

            bg-white/10
            backdrop-blur-xl

            px-6
            py-14

            shadow-2xl

            sm:px-10
            md:px-16
          "
        >
          {/* Header */}

          <div className="text-center">

            <GiFlowerPot className="mx-auto text-5xl text-white" />

            <h2 className="mt-6 font-serif font-semibold italic text-4xl text-white sm:text-5xl md:text-5xl lg:text-3xl xl:text-4xl">
              Love Story
            </h2>

          </div>

          {/* Timeline */}

          <div className="mt-16">

            {DataLove.map((item, index) => (
              <LoveCard
                key={item.id}
                title={item.title}
                description={item.description}
                last={index === DataLove.length - 1}
              />
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
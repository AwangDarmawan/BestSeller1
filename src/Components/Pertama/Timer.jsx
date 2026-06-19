import { useEffect, useState } from "react";

export default function Timer() {
  const targetDate = new Date("2026-08-17T09:00:00").getTime();

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date().getTime();

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0"
      ),
      hours: String(
        Math.floor((difference / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0"),
      minutes: String(
        Math.floor((difference / (1000 * 60)) % 60)
      ).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <div className="mt-8 grid grid-cols-4 gap-3 sm:gap-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="
            flex
            aspect-square
            w-16
            sm:w-18
            md:w-20
            lg:w-18
            xl:w-16

            flex-col
            items-center
            justify-center

            rounded-xl
            border
            border-white/20
            bg-white/10
            backdrop-blur-md
            shadow-lg
          "
        >
          <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
            {item.value}
          </h2>

          <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-200 sm:text-xs">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
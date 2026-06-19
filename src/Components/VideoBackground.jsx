import backgroundVideo from "../assets/Vd/Vdos.mp4";

export default function VideoBackground() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="
          fixed
          inset-0
          -z-20

          h-screen
          w-full

          object-cover

          lg:mx-auto
          lg:h-auto
          lg:w-auto
          lg:max-h-screen
          lg:max-w-full
          lg:object-contain
        "
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Overlay Global */}
      <div className="fixed inset-0 -z-10 bg-black/55" />
    </>
  );
}
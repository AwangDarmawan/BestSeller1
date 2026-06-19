
function Gallery({ src, alt,  className = "", aos, }) {
  return (
    <div
     data-aos={aos}
      className={`
        overflow-hidden
        rounded-2xl
        ${className}
      `}
    >
     
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-700
          hover:scale-105
        "
      />
    </div>
  );
}

export default Gallery;
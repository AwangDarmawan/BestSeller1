import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "Pasangan", "akad", "Galery","RSVP","Family"];

  return (
    <>
      <header
        className="
          fixed top-0 left-0 right-0 z-50
         bg-transparent
          backdrop-blur-xl
          border-b border-gold/10
        "
      >
        <div className="max-w-7xl mx-auto px-5 ">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}
            <h1
              className="
            text-2xl font-bold  font-space
            hover:scale-105
          
         
                text-white
                   drop-shadow-[0_0_15px_rgba(201,162,39,0.25)]"

            
            >
              THE WEDDING
            </h1>
          

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-10">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="
          bg-gradient-to-b
              text-white

  drop-shadow-[0_0_15px_rgba(201,162,39,0.25)]
        font-space
        font-bold
        transition-all
        duration-300

        hover:bg-gradient-to-r
         hover:from-[#8B6B2E]
        hover:via-[#C9A227]
       hover:to-[#E5C76B]
        hover:bg-clip-text
        hover:text-transparent

        after:content-['']
        after:absolute
        after:left-0
        after:-bottom-1
        after:w-0
        after:h-[2px]
        after:bg-gradient-to-r
        after:from-[#8B6B2E]
        after:via-[#C9A227]
        after:to-[#E5C76B]
        after:transition-all
        after:duration-300

        hover:after:w-full
                  "
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen(true)}
              className="
                md:hidden
               relative
                p-2
                rounded-lg
                    transition-all
                    hover:scale-105
                   border
              border-[#D6B75A]/40
              bg-gold
              
              shadow-[0_0_50px_rgba(201,162,39,0.45)]
              "
            >
              <Menu size={28} 
         className="
      
        text-white
      
      transition-all
      duration-300
      hover:text-yellow-500
      drop-shadow-[0_0_30px_rgba(201,162,39,0.20)]
     "/>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`
          md:hidden fixed inset-0 z-[60]
          transition-all duration-300
          ${
            open
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0  border-white/20

        bg-white/10
        backdrop-blur-xl

        shadow-2xl "
          onClick={() => setOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`
            absolute top-0 right-0
            h-screen
            w-[280px] sm:w-[320px]
               

        bg-white/5
        backdrop-blur-xl

       
            border-l border-violet-500/20
            shadow-[-10px_0_40px_rgba(0,0,0,0.5)]
            transition-transform duration-300
            ${open ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Header Drawer */}
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <h2
              className="
                font-bold
               
                  bg-gradient-to-b
                from-[#8B6B2E]
                 via-[#C9A227]
                 to-[#E5C76B]
                bg-clip-text
                text-transparent
                text-lg
                   drop-shadow-[0_0_15px_rgba(201,162,39,0.25)]
                   font-space

              "
            >
              Menu
            </h2>

            <button
              onClick={() => setOpen(false)}
              className="
                p-2
                rounded-lg
                text-white
                hover:bg-white/10
                transition
              "
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col p-6 gap-7">
            {menuItems.map((item) => (
  //             <button
  //                key={item}
  // onClick={() => {
  //   setOpen(false);

  //   setTimeout(() => {
  //     document
  //       .getElementById(item.toLowerCase())
  //       ?.scrollIntoView({
  //         behavior: "smooth",
  //       });
  //   }, 200);
  // }}
  <a
  key={item}
  href={`#${item.toLowerCase()}`}
  onClick={() => setOpen(false)}

                className="
         
                 inline-block
                  text-lg
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  font-space
                  relative
        hover:bg-gradient-to-t
         hover:from-[#8B6B2E]
          hover:via-[#C9A227]
           hover:to-[#E5C76B]
        hover:bg-clip-text
        hover:text-transparent

        after:content-['']
        after:absolute
        after:left-0
        after:-bottom-1
        after:w-0
        after:h-[2px]
        after:bg-gradient-to-r
          after:from-[#E5C76B]
          after:via-[#C9A227]
           after:to-[#8B6B2E]
        after:transition-all
        after:duration-300

        hover:after:w-[50%]
                  
                  
                "
              >
                {item}
              </a>
              
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
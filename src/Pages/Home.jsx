
import RsvpSection from "../Components/Kedelapan/RsvpSection"
import KataSection from "../Components/Kedua/KataSection"
import GallerySection from "../Components/Kelima/GalerrySection"
import Akadsection from "../Components/Kempat/AkadSection"
import LoveSection from "../Components/Kenam/LoveSection"
import PasanganSection from "../Components/Ketiga/PasanganSection"
import GiftSection from "../Components/Ketujuh/GiftSection"
import Hero from "../Components/Pertama/Hero"
import MengundangSection from "../Components/Sembilan/MengundangSection"
import VideoBackground from "../Components/VideoBackground"
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer"
import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"
import Lagu from "../assets/Vd/BatasSenja.mp3"


function Home() {
        const audioRef = useRef(null);
const [isPlaying, setIsPlaying] = useState(false);
// state swipe all
// const [scrollDirection, setScrollDirection] = useState("down");


useEffect(() => {
  const shouldPlay = localStorage.getItem("playMusic");

  if (shouldPlay === "true") {
    audioRef.current?.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {});
  }
}, []);
  return (
    <>
     <main className="relative">
      <VideoBackground/>
      <Navbar/>
      <Hero/>
      <KataSection/>
      <PasanganSection/>
      <Akadsection/>
      <GallerySection/>
      <LoveSection/>
      <GiftSection/>
      <RsvpSection/>
      <MengundangSection/>
      <Footer/>
      </main>
         <button
  onClick={() => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }}
  


  


  className="
     fixed
    bottom-6
    right-5
    z-50
    w-12
    h-12
    rounded-full
    border
  border-white
  bg-white/10
  text-white
    flex
    items-center
    justify-center
      shadow-[0_4px_15px_rgba(62,92,147,0.5)]
    
"
>
  {isPlaying ? (
     <Volume2 size={22} />
  ) : (
   
       <VolumeX size={22} />
   
     )}
</button>

     {/* musik */}
     <audio ref={audioRef} loop>
  <source src={Lagu} type="audio/mp3" />
   </audio>

    
    </>
  )
}

export default Home

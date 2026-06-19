import PesanAdmin from "../components/Admin/PesanAdmin"
import Footer from "../Components/Footer"
import NavbarAdmin from "../components/Navbar/NavbarAdmin"
import VideoBackground from "../Components/VideoBackground"


function PesanAdminPage() {
  return (
    <>
      <main className="relative">
          <VideoBackground/>
    <NavbarAdmin />
       <div className="max-w-6xl mx-auto p-4">
        <PesanAdmin />
      </div>
      <Footer/>
      </main>
      
    </>
  )
}

export default PesanAdminPage

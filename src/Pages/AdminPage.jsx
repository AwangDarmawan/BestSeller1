import Admin from "../Components/Admin/Admin"
import Footer from "../Components/Footer"
import NavbarAdmin from "../Components/Navbar/NavbarAdmin"

import VideoBackground from "../Components/VideoBackground"
function AdminPage() {
  return (
    <>
    <main className="relative">
              <VideoBackground/>
    <NavbarAdmin />
       <div className="max-w-6xl mx-auto p-4">
        <Admin />
      </div>
      <Footer/>
      </main>
      
    </>
  )
}

export default AdminPage

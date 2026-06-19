import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Cover from "./Components/Cover/Cover";
import Home from "./Pages/Home";
import Adminpage from "./Pages/AdminPage";
import PesanAdminPage from "./Pages/PesanAdmin";
import CoverPage from "./Pages/CoverPage";





function App() {
 

  return (
    <>
       <BrowserRouter>
          <Routes>
           <Route path="/" element={<Adminpage/>} />
               <Route path="/admin/pesan" element={<PesanAdminPage/>} />

               <Route path="/:nama" element={<CoverPage/>} />
             <Route path="/home" element={<Home />} />
          </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
      />
    </BrowserRouter>
    </>
  )
}

export default App

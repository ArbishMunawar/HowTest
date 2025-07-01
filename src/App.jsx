import { Outlet } from "react-router";
import Navbar from './ui/components/Navbar.jsx';
import Footer from './ui/components/Footer.jsx';

export default function Root() {
  

  return (
    <>
     
      <div className="layout">
      <Navbar/>
      <main  >
      <Outlet />
      </main>
      <Footer />
      </div>
    </>
  )
}

// pnpx json-server --watch db.json --port 3000
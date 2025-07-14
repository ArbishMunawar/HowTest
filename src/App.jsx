import { Outlet } from "react-router";
import Navbar from './ui/components/Common/Navbar.jsx';
import Footer from './ui/components/Common/Footer.jsx';

export default function Root() {
  

  return (
    <>
     
      <div className="layout">
        {/* <h1 className="text-azure-blue" >Test</h1> */}
      <Navbar/>
      <main >
      <Outlet />
      </main>
      <Footer />
      </div>
    </>
  )
}

// pnpx json-server --watch db.json --port 3000
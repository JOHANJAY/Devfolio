import { Outlet } from "react-router";
import Nav from "../components/Nav";
import Footer from "../components/Footer"


const LandingPageLayout = () => {
  return (
   <>
   <Nav />
   <Outlet />
   <Footer />
   </>
  )
}
export default LandingPageLayout
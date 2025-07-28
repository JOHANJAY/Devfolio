import { Outlet } from "react-router";
import Nav from "../components/Nav";


const LandingPageLayout = () => {
  return (
   <>
   <Nav />
   <Outlet />
   </>
  )
}
export default LandingPageLayout
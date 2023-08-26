import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Header } from "../components/Header"

const Layout = () => {
  return (
    <div>
        <NavBar/>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout
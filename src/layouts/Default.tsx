import { Outlet } from "react-router-dom"
import { Footer } from "../partials/Footer"
import { Navbar } from "../partials/Navbar"

export const DefaultLayout = () => {
    return(
        <>
            <Navbar />
                <Outlet/>
            <Footer />
        </>
    )
}
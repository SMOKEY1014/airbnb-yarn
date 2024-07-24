import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { HeaderIndex } from "./HeaderIndex";

export default function Layout() {
    const location = useLocation();
    const isIndexPage = location.pathname === "/";
    const isPlacePage = location.pathname === "/place";
    const isListingPage = location.pathname === "/places";

    return (
        <div className="w-screen min-h-screen flex flex-col hide-scrollbars ">
            <div className="py-4 px-16 w-full">
                {isIndexPage? <HeaderIndex/> : <Header />}
                <Outlet />
                <Footer />
            </div>
        </div>
    )
}

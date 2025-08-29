import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <div className="w-full h-screen bg-black max-w-screen flex flex-col">
        <Header />
        <Outlet />
    </div>
  )
}

export default RootLayout
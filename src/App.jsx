import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Works from "./pages/works/Works"
import Services from "./pages/services/Services"
import Contact from "./pages/contact/Contact"
import ThankYou from "./components/ThankYou/ThankYou"


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path={"about"} element={<About/>}/>
        <Route path={"works"} element={<Works/>}/>
        <Route path={"services"} element={<Services/>}/>
        <Route path={"contact"} element={<Contact/>}/>
        <Route path={"thank_you"} element={<ThankYou/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
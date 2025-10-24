import About from "./components/About";
import Blog from "./components/Blog";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Testimonian from "./components/Testimonian";



export default function App() {
  return (
    <>
      {/* import components here */}
    <Navbar/>
    <Home/>
    <Testimonian/>
    <Feature/>
    <Products/>
    <About/>
    <Blog/>
    <Footer/>
    </>
  )
}
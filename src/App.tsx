import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div>
      <div className="p-5 md:px-[15%]">
      <Navbar/>
      <Home/>
      </div>

      <About/>

      <div className="p-5 md:px-[15%]">
        <Experience/>
        <Projects/>
      </div>

      <Footer/>

    </div>
  );
}
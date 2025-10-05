import Navbar from "./components/Navbar"
import Home from "./components/Home"
//import About from "./components/About"
//import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Stage from "./components/Stage"
import ProjectStage from "./components/ProjetStage"


export default function App() {
  return (
    <div className="bg-primary text-base-content">
      <div className="p-5 md:px-[15%]">
        <Navbar/>
        <Home/>
      </div>

      <Stage/>
      

      <div className="p-5 md:px-[15%]">
        <ProjectStage/>
        <br />
        <br />
        <Projects/>
      </div>

      

      <Footer/>
    </div>
  );
}
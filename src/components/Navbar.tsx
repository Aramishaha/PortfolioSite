import {Container} from "lucide-react"

export const Navbar = () => {
  return (
    <div className="flex justify-center md:justify-between items-center p-4 ">
        <a href="#" className="flex-items-center font bold texte-3xl md:texty-xl">

        <Container className="mr-2" />
        Aramis Mohamed
        <span className="text-accent"> Développeur informatique</span>
        </a>

        <ul 
          className="hidden md:flex space-x-4">
            <li>
              <a href="#Home"
                className="btn btn-sm btn-ghost">
                  Acceuil
              </a>
            </li>
            <li>
              <a href="#About"
                className="btn btn-sm btn-ghost">
                   À propos
              </a>
            </li>
            <li>
              <a href="#Experience"
                className="btn btn-sm btn-ghost">
                  Mes expériences
              </a>
            </li>
            <li>
              <a href="#Projects"
                className="btn btn-sm btn-ghost">
                  Mes projets
              </a>
            </li>

        </ul>
    </div>
  )
}

export default Navbar 
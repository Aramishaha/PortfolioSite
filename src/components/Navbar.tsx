import { Container } from "lucide-react"

export const Navbar = () => {
  return (
    <div className="flex justify-center md:justify-between items-center p-4 text-base-content">
        <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
          <Container className="mr-2 text-accent" />
          Aramis M.
          <span className="text-accent ml-1"> Développeur logiciel</span>
        </a>

        <ul className="hidden md:flex space-x-4">
            <li>
              <a href="#Home"
                className="btn btn-sm btn-ghost text-base-content hover:text-accent text-lg">
                  Accueil
              </a>
            </li>
            <li>
              <a href="https://www.canva.com/design/DAGl4NcE1jY/50LtVu7689ZUUAY7rYNs2w/edit?ui=eyJBIjp7fX0"
                className="btn btn-sm btn-ghost text-base-content hover:text-accent text-lg">
                   Veille
              </a>
            </li>
            <li>
              <a href="#Experience"
                className="btn btn-sm btn-ghost text-base-content hover:text-accent text-lg">
                  Mes expériences
              </a>
            </li>
            <li>
              <a href="#Projects"
                className="btn btn-sm btn-ghost text-base-content hover:text-accent text-lg">
                  Mes projets
              </a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
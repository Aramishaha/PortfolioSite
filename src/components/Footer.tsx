import {Container, Twitter} from "lucide-react"

const Footer = () => {
  return (
        <footer className="footer footer-horizontal footer-center  p-10">
    <aside>

    <Container className="w-10 h-10" />
        <p className="font-bold">
        Aramis Mohamed
        <span className="text-accent"> Développeur informatique</span>
        </p>
        <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
    </aside>
    <nav>
        <div className="grid grid-flow-col gap-4">
        <a href="https://twitter.com" target="_blank" rel="noopener norefever">
            <Twitter className="w-6 h-6 text-current"/>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener norefever">
            <Twitter className="w-6 h-6 text-current"/>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener norefever">
            <Twitter className="w-6 h-6 text-current"/>
        </a>
        </div>
    </nav>
    </footer>
  )
}

export default Footer
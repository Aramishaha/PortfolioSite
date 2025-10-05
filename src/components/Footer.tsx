import { Container, Twitter, Github, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-300 text-base-content mt-16">
        <aside>
            <Container className="w-10 h-10 text-accent" />
            <p className="font-bold">
                Aramis Mohamed
                <span className="text-accent"> Développeur informatique</span>
            </p>
            <p className="text-base-content/70">Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
        </aside>
        <nav>
            <div className="grid grid-flow-col gap-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    <Twitter className="w-6 h-6 text-current"/>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    <Github className="w-6 h-6 text-current"/>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    <Linkedin className="w-6 h-6 text-current"/>
                </a>
            </div>
        </nav>
    </footer>
  )
}

export default Footer
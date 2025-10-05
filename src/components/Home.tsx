import { Mail } from 'lucide-react';
import img from '../assets/Aramis1.png';

const Home = () => {
  return (
    <div id="Home" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
        <div className="flex flex-col">
            <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                Bonjour, <br /> je suis {" "}
                <span className="text-accent"> Aramis Mohamed</span>
            </h1>
            <p className="my-4 text-md text-center md:text-left text-base-content/80">
                Votre futur stagiaire en développement et gestion de base de données.
                <br />
                Actuellement en formation de BUT 2 Informatique, <br />
                j'ai acquis de nombreuses compétences dans le domaine du développement. 
            </p>
            <a 
              href="mailto:aramismohamedaramis@proton.me" 
              className="btn btn-accent text-primary font-bold md:w-fit"
            >
                <Mail className="w-5 h-5"/> 
                Contactez-moi
            </a>
        </div>

        <div className="md:ml-20 order-first md:order-last mb-6 md:mb-0">
            <img 
              src={img} 
              alt="Aramis Mohamed" 
              className="w-96 h-96 object-cover border-8 border-accent shadow-xl" 
              style={{
                  borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%"
              }}
            />
        </div>
    </div>
  )
}

export default Home
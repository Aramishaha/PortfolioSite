import Title from "./Title";
//import img1 from '../assets/projects/1.png';
import SIOshop from '../assets/projects/SioSHop1.png';
import FRMobilier from '../assets/projects/FranceMobilier.png';
import pendu from '../assets/projects/Pendu.png';
import cube from '../assets/projects/cube.png';
import porte from '../assets/projects/Portolio.png';
import { Video, Github } from "lucide-react";

const projets = [
    { 
        id: 1,
        title: "Projet Cube",
        description: "Site Web spécialisé dans les rubik's cube référant les différents modèles et les étapes respectives pour leur solution",
        technologies: [
            'CSS', 'PHP', 'HTML','MYSQL'
        ],
        demoLink: '#',
        repoLink: '#',
        image: cube,
    },
    { 
        id: 2,
        title: "Projet SIOSHOP",
        description: "Outil de gestion d'une concession automobile",
        technologies: [
            'C#', 'MYSQL', 'Windosws Form'
        ],
        demoLink: '#',
        repoLink: '#',
        image: SIOshop,
    },
    { 
        id: 3,
        title: "Projet France Mobilier",
        description: "Site web de vente spécialisé dans le mobilier d'intérieur",
        technologies: [
            'CSS', 'PHP', 'MYSQL'
        ],
        demoLink: '#',
        repoLink: '#',
        image: FRMobilier,
    },
    { 
        id: 4,
        title: "Application Mobile",
        description: "Application de jeux du pendu version mobile",
        technologies: [
            'C#', 'MAUI'
        ],
        demoLink: '#',
        repoLink: '#',
        image: pendu,
    },
    { 
        id: 5,
        title: "Portfolio Personnel",
        description: "Site web personnel présentant mes compétences et projets",
        technologies: [
            'React', 'Tailwind CSS', 'Vite'
        ],
        demoLink: '#',
        repoLink: '#',
        image: porte,
    },
];

const Projects = () => {
  return (
    <div id="Projects" className="mt-10">
        <Title title="Mes Projets"/>
        <div className="grid md:grid-cols-3 gap-4">
            {projets.map((project) => (
                <div key={project.id} className="bg-base-200 p-5 h-fit rounded-xl shadow-lg border-t-4 border-accent">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full rounded-xl h-56 object-cover"
                    />
                    <div>
                        <h1 className="my-2 font-bold text-accent text-xl">
                            {project.title}
                        </h1>
                        <p className="text-sm text-base-content/80">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 my-3">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="badge badge-accent text-primary font-medium">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex">
                        <a className="btn btn-accent text-primary font-bold w-2/3" href={'https://github.com/Aramishaha'}>
                            Diapo
                            <Video className="w-4"/>
                        </a>
                        <a className="btn btn-outline btn-accent w-1/3 ml-2" href={'https://github.com/Aramishaha'}>
                            <Github className="w-4"/>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects
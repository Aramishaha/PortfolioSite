import Title from "./Title";
//import img1 from '../assets/projects/1.png';
import Mairie from '../assets/projects/Mairie.png';
import jib from '../assets/projects/Djib1.png';
import { Video, Github } from "lucide-react";

const projets = [
    { 
        id: 1,
        title: "Djib Journey",
        description: "Site touristique présentant les richesses de la culture djiboutienne",
        technologies: [
            'Wordpress','Linux','Local'
        ],
        demoLink: '#',
        repoLink: '#',
        image: jib,
    },
    { 
        id: 2,
        title: "Projet Mairie",
        description: "Outil de gestion de contrats liant des mairies à un prestataire",
        technologies: [
            'PHP', 'MYSQL', 'CSS'
        ],
        demoLink: '#',
        repoLink: '#',
        image: Mairie,
    },
];

const ProjectStage = () => {
  return (
    <div id="Projects" className="mt-10">
        <Title title="Mes Projets réalisés au cours de mes stages"/>
        <br />
        <br />
        <div className="grid md:grid-cols-2 gap-16">
            {projets.map((project) => (
                <div key={project.id} className="bg-base-200 p-5 h-fit rounded-xl shadow-lg border-t-4 border-accent">
                    <div className="w-full rounded-xl h-64 overflow-hidden">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-contain bg-white"
                        />
                    </div>
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

export default ProjectStage
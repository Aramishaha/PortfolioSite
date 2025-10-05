import Title from "./Title";

import imgHTMLTAIL from "../assets/techno/tailwind.png";
import imgHTML from "../assets/techno/html.png";
import imgHTMLREACT from "../assets/techno/react.png";
import imgHTMLCSS from "../assets/techno/css.png";
import imgHTMLJavascript from "../assets/techno/js.png";
// import imgHTMLTypescript from "../assets/techno/typescript.svg";
import imgHTMLCS from "../assets/techno/cs-icon.png";
import imgHTMLPHP from "../assets/techno/Php.jpg";
import DevisseInfo from "../assets/companies/DevisseInfo.png"
import ANT from "../assets/companies/ANT.png"
import imgSQL from "../assets/techno/pngimg.com - mysql_PNG1.png";

const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgHTMLCSS },
    { id: 3, name: "JavaScript", image: imgHTMLJavascript },
    { id: 4, name: "React", image: imgHTMLREACT },
    { id: 5, name: "SQL", image: imgSQL },
    { id: 6, name: "C#", image: imgHTMLCS },
    { id: 7, name: "Tailwind", image: imgHTMLTAIL },
    { id: 8, name: "PHP", image: imgHTMLPHP }, // Correction de l'ID dupliqué
];

const experiences = [
    { 
        id: 1,
        role: "Stagiare en développement logiciel",
        company: "Devisse Informatique",
        period: "Octobre 2024 - Decembre 2024",
        description: [
            "Développement d'un outil de gestion permettant de gérer les mairies",
            "Mise en lien avec une base de donnée local",
        ],
        image: DevisseInfo,
    },
    { 
        id: 2,
        role: "Stagiaire en développement web",
        company: "Agence National du Tourisme de djibouti",
        period: "Mai 2024 - Juin 2024",
        description: [
            "Développement d'un site internet promouvant la culture djiboutienne",
            "Recencement des activités culturelles",
        ],
        image: ANT,
    },
];

const Stage = () => {
  return (
    <div id="Experience" className="bg-base-300 p-10 mb-10 md:mb-32">
        <Title title="Expériences" />
        <div className="md:h-screen flex flex-col-reverse md:flex-row justify-center items-center">
            <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
                {skills.map((skill) => (
                    <div key={skill.id} className="flex justify-center items-center flex-col">
                        <div className="w-32 h-32 p-3 rounded-full border-3 border-accent bg-base-200 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
                            <img 
                                src={skill.image} 
                                alt={skill.name}  
                                className="object-contain rounded-full h-full w-full"
                            />
                        </div>
                        <span className="mt-3 text-base text-accent font-bold">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
            <div className="md:ml-4 flex flex-col space-y-4 md:w-1/2">
                {experiences.map((experience) =>(
                    <div 
                        key={experience.id} 
                        className="flex flex-col bg-base-200 p-5 rounded-xl shadow-xl border-l-4 border-accent"
                    >
                        <div className="flex items-center">
                            <div className="w-28 h-28 bg-base-100 rounded-full p-1 border-2 border-accent shadow-lg">
                              <img 
                                src={experience.image} 
                                alt={experience.company}
                                className="object-contain h-full w-full rounded-full"
                              />
                            </div>
                            <div className="ml-6">
                                <h1 className="text-xl text-accent font-bold">
                                    {experience.role}, {experience.company}
                                </h1>
                                <span className="text-sm text-base-content/70">{experience.period}</span>
                            </div>
                        </div>
                        <ul className="list-disc ml-16 mt-2 text-base-content/90">
                            {experience.description.map((desc, index) => (
                                <li key={index}>
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Stage
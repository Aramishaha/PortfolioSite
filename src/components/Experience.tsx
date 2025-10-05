import Title from "./Title";

import imgHTMLTAIL from "../assets/techno/tailwind.png";
import imgHTML from "../assets/techno/html.png";
import imgHTMLREACT from "../assets/techno/react.png";
import imgHTMLCSS from "../assets/techno/css.png";
import imgHTMLJavascript from "../assets/techno/js.png";
//import imgHTMLTypescript from "../assets/techno/typescript.svg";
import imgHTMLCS from "../assets/techno/cs-icon.png";
import imgHTMLPHP from "../assets/techno/Php.jpg";
import imgSQL from "../assets/techno/pngimg.com - mysql_PNG1.png";

import google from "../assets/companies/google.png"

const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgHTMLCSS },
    { id: 3, name: "JavaScript", image: imgHTMLJavascript },
    { id: 4, name: "React", image: imgHTMLREACT },
    { id: 5, name: "SQL", image: imgSQL },
    { id: 6, name: "C#", image: imgHTMLCS },
    { id: 7, name: "Tailwind", image: imgHTMLTAIL },
    { id: 8, name: "PHP", image: imgHTMLPHP },
];

const experiences = [
    { 
        id: 1,
        role: "Software engineer",
        company: "Google",
        period: "Sep 2022 - Present",
        description: [
            "Développement de nouvelles fonctionnalités pour Google Maps",
            "Optimisation des performances de l'application",
        ],
        image: google,
    },
    { 
        id: 2,
        role: "Software engineer",
        company: "Google",
        period: "Sep 2022 - Present",
        description: [
            "Développement de nouvelles fonctionnalités pour Google Maps",
            "Optimisation des performances de l'application",
        ],
        image: google,
    },
    { 
        id: 3,
        role: "Software engineer",
        company: "Google",
        period: "Sep 2022 - Present",
        description: [
            "Développement de nouvelles fonctionnalités pour Google Maps",
            "Optimisation des performances de l'application",
        ],
        image: google,
    },
];

const Experience = () => {
  return (
    <div id="Experience">
        <Title title="Expériences" />
        <div className="flex flex-col-reverse md:flex-row justify-center items-center">
            <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
                {skills.map((skill) => (
                    <div key={skill.id} className="flex justify-center items-center flex-col">
                        <div className="w-24 h-24 p-2 rounded-full border-2 border-accent bg-base-200">
                            <img src={skill.image} alt={skill.name}  
                            className="object-cover rounded-full h-full w-full"/>
                        </div>
                        <span className="mt-2 text-sm text-accent font-medium">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
            <div className="md:ml-4 flex flex-col space-y-4">
                {experiences.map((experience) =>(
                    <div 
                        key={experience.id} 
                        className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg border-l-4 border-accent"
                    >
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-base-100 rounded-full p-1 border border-accent">
                              <img src={experience.image} alt={experience.company}
                              className="object-cover h-full w-full rounded-full" />
                            </div>
                            <div className="ml-4">
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

export default Experience
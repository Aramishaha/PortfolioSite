import Title from "./Title"
import img from '../assets/img.jpg'
import { CalendarSync, LetterText, Paintbrush } from "lucide-react"

const aboutSections = [
    {
        id: 1,
        title: "Développeur Frontend",
        description: "Je suis un développeur backend avec une bonne expérience.",
        icon: <LetterText className="text-accent scale-150" />,
    },
    {
        id: 2,
        title: "Développeur PHP",
        description: "Je suis un développeur backend ayant une familiarité particulière avec le php.",
        icon: <CalendarSync className="text-accent scale-150" />,
    },
    {
        id: 3,
        title: "Développeur Frontend",
        description: "Je suis un développeur backend avec une bonne expérience.",
        icon: <Paintbrush className="text-accent scale-150" />,
    },
]

export const About = () => {
  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
        <Title title = " À propos"/>
        <div className="md:h-screen flex justify-center items-center">
            <div className="hidden md:block">
              <img src={img} alt="" className="w-96 object-cover rounded-xl border-4 border-accent shadow-xl" />
            </div>

            <div className="md:ml-4 space-y-4">
                {aboutSections.map((section) =>(
                    <div key={section.id} className="flex flex-col md:flex-row items-center bg-base-200
                    p-5 rounded-xl md:w-96 shadow-xl border-l-4 border-accent">

                        <div className="mb-2 md:mb-0">
                            {section.icon}
                        </div>
                        <div className="md:ml-4 text-center md:text-left">
                            <h2 className="text-xl font-bold mb-1 text-accent">
                                {section.title}
                            </h2>
                            <p className="text-sm text-base-content/90">
                                {section.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default About
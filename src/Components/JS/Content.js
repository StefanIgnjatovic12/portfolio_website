import '../CSS/Content.css'
import Skills from "./Skills";
import Projects from "./Projects"
import data from './SkillData.json'
import {Element} from 'react-scroll'


export default function Content() {
    const skillElements = data.map(entry => {
        return <Skills text={entry.text} image={entry.image}/>
    })

    return (
        <>

            <div className="intro">

                Hello!
                <img className="hand" src={process.env.PUBLIC_URL + "/images/hand.gif"} alt=""/>
                I am
                <div className="name">
                    Stefan Ignjatović
                </div>

                I am a self-thought full-stack web developer.

            </div>

            <div id="skills" className="skill-header">

                <Element id="scrollToSkills">
                    <img className="header-icons" src={process.env.PUBLIC_URL + "/images/pencil.png"} alt=""/>

                    Skills
                </Element>

            </div>

            <div className="skill-container">
                {skillElements}
            </div>

            <div id="projects" className="project-header">
                <Element id="scrollToProjects">
                    <img className="header-icons" src={process.env.PUBLIC_URL + "/images/clipboard.png"} alt=""/>

                    Projects
                </Element>
            </div>

            <div className="project-container">
                <Projects
                    title="Recipe finder by ingredients"
                    description="Clone of Supercook which allows users to search
                 for recipes that they can make with the ingredients they have on hand"
                    projectskills={['javascript', 'python', 'django', 'bootstrap']}
                    github="https://www.google.com/"
                    demo="https://www.google.com/"
                />
                <Projects
                    title="Recipe finder by ingredients"
                    description="Clone of Supercook which allows users to search
                 for recipes that they can make with the ingredients they have on hand"
                    projectskills={['javascript', 'python', 'django', 'bootstrap']}
                    github="https://www.google.com/"
                    demo="https://www.google.com/"
                />


            </div>

        </>


    )
}
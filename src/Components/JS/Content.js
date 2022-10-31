import '../CSS/Content.css'
import Skills from "./Skills";
import Projects from "./Projects"
import data from './SkillData.json'
import {Element} from 'react-scroll'
import {v4 as uuid} from 'uuid';


export default function Content() {
    const skillElements = data.map(entry => {
        return <Skills key={uuid()} text={entry.text} image={entry.image}/>
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

                {/*I am a self-taught full-stack web developer.*/}

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
                    title="AnonChat"
                    description="When a user creates an account, they are randomly matched with another user in an anonymous chat. If both members press the 'reveal' button,
                    their real profiles containing additional information pertaining to their identity will be made available to the conversation partner"
                    projectskills={['javascript', 'reactJS', 'socket.io', 'python', 'django',]}
                    imageArray={
                        [
                            process.env.PUBLIC_URL + "/images/Chat.png",
                            process.env.PUBLIC_URL + "/images/ChatHiddenProfile.gif",
                            process.env.PUBLIC_URL + "/images/ChatRevealedProfile.gif"
                        ]
                    }
                    github="https://linktr.ee/sterfan4129"
                    demo="https://drf-react-chat-frontend.herokuapp.com/"
                />
                <Projects
                    title="Project manager/issue tracker"
                    description="Inspired by Jira and other similar products, the issue tracker/ticketing system allows
                     for the management of user roles, projects and tickets used to request new features and report bugs "
                    projectskills={['javascript', 'reactJS', 'materialUI', 'python', 'django',]}
                    imageArray={
                        [
                            process.env.PUBLIC_URL + "/images/Ticketing1.png",
                            process.env.PUBLIC_URL + "/images/Ticketing2.png",
                            process.env.PUBLIC_URL + "/images/Ticketing3.png"
                        ]
                    }
                    github="https://linktr.ee/stefan412"
                    demo="https://drf-react-ticketing-frontend.herokuapp.com/"
                />


                <Projects
                    title="Recipe finder by ingredients"
                    description="Clone of Supercook which allows users to search
                 for recipes that they can make with the ingredients they have on hand. Recipes can be saved to favorites for later viewing."
                    projectskills={['javascript', 'python', 'django', 'bootstrap']}
                    imageArray={
                        [
                            process.env.PUBLIC_URL + "/images/Recipe.png",

                        ]
                    }
                    github="https://github.com/StefanIgnjatovic12/Django-Recipe-Search"
                    demo="https://django-recipe-search.herokuapp.com/"
                />


            </div>

        </>


    )
}
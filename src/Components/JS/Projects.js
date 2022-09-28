import '../CSS/Content.css'
import {v4 as uuid} from 'uuid';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import data from "./SkillData.json";
import Skills from "./Skills";


export default function Projects(props) {
    const projectSkills = props.projectskills.map(skill => {
        return <span key={uuid()} className="projects-skills">{skill}</span>
    })
    const demoLink = props.demo
    const gitLink = props.github
    const imageArray = props.imageArray
    const carouselElements = imageArray.map(entry => {
        return <div><img className="carousel-image" src={entry} /></div>
    })

    return (
        <div className="project-box">
            <div className="carousel">
                <Carousel showThumbs={false} showStatus={false}>
                    {carouselElements}
                </Carousel>
            </div>
            <div className="project-text-container">
                <div className="project-title">
                    {props.title}

                    <div className="git-demo-buttons">

                        <a href={`${gitLink}`} target="_blank">
                            <button className="git-button">
                                Github
                            </button>
                        </a>


                        <a href={`${demoLink}`} target="_blank">
                            <button className="demo-button">
                                Demo
                            </button>
                        </a>

                    </div>
                </div>

                <div className="project-skills">
                    {projectSkills}
                </div>
                <p className="project-description">
                    {props.description}
                </p>
            </div>
        </div>
    )
}




import '../CSS/Content.css'
import { v4 as uuid } from 'uuid';

export default function Projects(props) {
    const projectSkills = props.projectskills.map(skill => {
        return <span key={uuid()} className="projects-skills">{skill}</span>
    })
    const demoLink = props.demo
    const gitLink = props.github
    return (
        <div className="project-box">
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
    )
}




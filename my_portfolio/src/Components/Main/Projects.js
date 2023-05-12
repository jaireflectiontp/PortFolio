import React from 'react'
import "../../SCSS/_main.scss"
const Projects = (props) => {
    const { row_reverse, project_title, project_description, tech1, tech2, tech3, tech4, tech5, tech6, git_link, live_link, project_ss } = props
    return (
        <>
            <div className="projects_container">
                <div className={`container_in ${row_reverse}`}>
                    <div className="project_content">
                        <div className="content_in">
                            <div className="project_overline">Featured Project</div>
                            <div className="project_title"><h3>{project_title}</h3></div>
                            <div className="project_description"><p>{project_description}</p></div>
                            <ul className={`tech_list ${row_reverse}`}>
                                <li>{tech1}</li>
                                <li>{tech2}</li>
                                <li>{tech3}</li>
                                <li>{tech4}</li>
                                <li>{tech5}</li>
                                <li>{tech6}</li>
                            </ul>
                            <div className={`project_links ${row_reverse}`}>
                                <span><a href={git_link}></a></span>
                                <span><a href={live_link}></a></span>
                            </div>
                        </div>
                    </div>
                    <div className="project_img">
                        <img src={project_ss} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects

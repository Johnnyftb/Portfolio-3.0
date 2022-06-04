import React from 'react';
import { Navbar, Footer } from "./components/index";
import projectData from "../projects.json";

const Projects = () => {
    
    const [projectModalView, setProjectModalView] = React.useState(false);
    const [project, setProject] = React.useState({})

    function enterModal(e) {
        setProject(projectData[e.target.id])
        setProjectModalView(true);
    }

    function exitModal() {
        setProjectModalView(false);
    }

    return (
        <div className="projects">
            {project && projectModalView && (
               <div className="project-modal">
                    <div className="text-dark text-poppins d-flex justify-content-center align-items-center w-100 h-100">
                        <div className="modal-container bg-light w-50 shadow rounded p-3">
                            <div className="exit-container d-flex justify-content-end w-100">
                                <i className="fa fa-x fa-2x" onClick={exitModal}></i>
                            </div>
                            <div className="d-flex justify-content-between align-items-start">
                                <img src={project.image_path} className="w-50 rounded"/>
                                <div className='w-50 p-3 align-top'>
                                    <h2 className="text-quicksand">{project.project_name}</h2>
                                    <p className='lead'>{project.description}</p>
                                    <div className="d-flex align-items-center mt-5">
                                        <a href={project.links.website} className="text-decoration-none">
                                            <i className="fa fa-globe fa-2x me-4 text-secondary"></i>
                                        </a>
                                        <a href={project.links.source_code} className="text-decoration-none">
                                            <i className="fa fa-code fa-2x me-4 text-secondary"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            )}
            <Navbar selected={"Projects"} />
            <div className="content px-5 text-light text-quicksand row align-items-start justify-content-center">
                {projectData.map((item, index) => (
                    <div className="col-3 m-4">
                        <div className="image-container shadow">
                            <div className="overlay w-100 h-100 d-flex flex-column align-items-center justify-content-center rounded" onClick={enterModal} id={index}>
                                <h2 index={index}>{item.project_name}</h2>
                                <p className='text-poppins'>{item.work}</p>
                            </div>
                            <img src={item.image_path} alt="" className="rounded" />
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Projects;
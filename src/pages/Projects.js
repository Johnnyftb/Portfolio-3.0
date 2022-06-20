import React from 'react';
import { Navbar, Footer, Featured } from "./components/index";
import projectData from "../projects.json";

const Projects = ({windowWidth}) => {
    
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
               <div className={`project-modal ${projectModalView && 'fixed'}`}>
                    <div className="text-dark text-poppins d-flex flex-lg-row flex-column justify-content-center align-items-center w-100 h-100">
                        <div className={`modal-container bg-light ${windowWidth > 992 ? 'w-50' : 'w-75'} shadow rounded p-3 m-5 h-auto`}>
                            <div className="exit-container d-flex justify-content-end w-100 mb-3">
                                <i className="fa fa-x fa-2x" onClick={exitModal}></i>
                            </div>
                            <div className="d-flex flex-lg-row flex-column justify-content-lg-between justify-content-start align-items-lg-start align-items-center">
                                <img src={project.image_path} className={`${windowWidth > 992 ? 'w-50' : 'w-100'} rounded`}/>
                                <div className={`${windowWidth > 992 & 'w-50'} p-3 align-top`}>
                                    <h2 className="text-quicksand text-lg-start text-center">{project.project_name}</h2>
                                    <p className={windowWidth > 992 & 'lead'}>{project.description}</p>
                                    <div className="d-flex flex-column align-items-center justify-content-lg-start justify-content-center mt-5">
                                        {project.links.website && 
                                            (
                                                <a href={project.links.website} className="text-decoration-none">
                                                    <button className="btn bg-purple text-light px-4 py-2 text-quicksand rounded-pill mb-3">View Website <i className="fa fa-arrow-right fa-lg ms-2"></i></button>
                                                </a>
                                            )
                                        }
                                        {project.links.source_code && 
                                            (
                                                <a href={project.links.source_code} className="text-decoration-none">
                                                    <button className="btn bg-dark text-light px-4 py-2 text-quicksand rounded-pill">View Project on GitHub <i className="fa fa-arrow-right fa-lg ms-2"></i></button>
                                                </a>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            )}
            <Navbar selected={"Projects"} windowWidth={windowWidth} />
            <div className="content px-5 text-light text-quicksand row align-items-start justify-content-center">
                {projectData.map((item, index) => (
                    <div className="project col-lg-3 col-12 m-4">
                        <div className="image-container shadow">
                            <div className="overlay w-100 h-100 d-flex flex-column align-items-center justify-content-center rounded" onClick={enterModal} id={index}>
                                <h2 className="text-center" index={index}>{item.project_name}</h2>
                                <p className='text-poppins text-center'>{item.work}</p>
                            </div>
                            <img src={item.image_path} alt="" className="rounded" />
                            {item.featured && <Featured />}
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Projects;
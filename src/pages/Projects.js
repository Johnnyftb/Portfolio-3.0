import React from 'react';
import { Navbar, Footer } from "./components/index";
import projectData from "../projects.json";

const Projects = () => {

    return (
        <div className="projects">
            <Navbar selected={"Projects"} />
            <div className="content px-5 text-light text-quicksand row align-items-start justify-content-center">
                {projectData.map((item, index) => (
                    <div className="col-3 m-4">
                        <div className="image-container">
                            <div className="overlay w-100 h-100 d-flex flex-column align-items-center justify-content-center rounded">
                                <h3>{item.project_name}</h3>
                                <p className='text-poppins' index={index}>{item.work}</p>
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
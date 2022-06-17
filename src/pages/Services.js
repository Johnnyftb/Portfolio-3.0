import React from 'react';
import { Navbar, Footer } from "./components/index";

const Services = ({windowWidth}) => {
    console.log(windowWidth)

    const [selectedService, setSelectedService] = React.useState("");

    function handleClick(e) {
        setSelectedService(e.target.textContent);
    }

    return (
        <div className="services">
            <Navbar selected={"Services"} windowWidth={windowWidth} />
            {windowWidth > 992 ? (
                <div className="container content p-5 text-dark text-poppins d-flex justify-content-around align-items-center w-100">
                    <div className='w-25'>
                        <h1 className={`text-quicksand ${selectedService === "Frontend" ? "text-purple display-4" : "text-dark display-5"}`} onClick={handleClick}>Frontend</h1>
                        <h1 className={`text-quicksand ${selectedService === "Backend" ? "text-purple display-4" : "text-dark display-5"}`} onClick={handleClick}>Backend</h1>
                        <h1 className={`text-quicksand ${selectedService === "Blockchain" ? "text-purple display-4" : "text-dark display-5"}`} onClick={handleClick}>Blockchain</h1>
                    </div>
                    <div className="service-content w-50 text-center pb-5">
                        {selectedService === "" && (<img src="/images/2.png"/>)}
                        {selectedService === "Frontend" && (
                        <div>
                            <img src="/images/frontend.png" />
                            <h2 className="text-quicksand">Frontend Development</h2>
                            <p className="lead text-secondary mb-4">I'm all about simple, clean and responsive design. I love bringing ideas to life beautifully through a screen.</p>
                            <div className="row w-100 justify-content-center">
                                <p className="col-4 text-dark fw-bold mb-3"><i className="fab fa-react fa-xl"></i> React</p>
                                <p className="col-4 text-dark fw-bold mb-3"><i className="fab fa-bootstrap fa-xl"></i> Bootstrap</p>
                                <p className="col-4 text-dark fw-bold mb-3"><i className="fab fa-figma fa-xl"></i> Figma</p>
                                <p className="col-4 text-dark fw-bold mb-3"><img src="/images/icons/axios-icon.svg" alt="" id="axios-icon"/> Figma</p>
                            </div>
                            
                        </div>
                        )}
                        {selectedService === "Backend" && (
                        <div>
                            <img src="/images/backend.png" />
                            <h2 className="text-quicksand">Backend Development</h2>
                            <p className="lead text-secondary mb-4">Static pages are boring! I can develop functional and dynamic pages that handle user requests and interact with databases.</p>
                            <p className="text-dark fw-bold mb-3"><i className="fab fa-node-js fa-xl"></i> Node</p>
                            <p className="text-dark fw-bold mb-3"><img src="/images/icons/expressjs-icon.png" alt="" id="express-icon"/> Express</p>
                            <p className="text-dark fw-bold mb-3"><img src="/images/icons/mongodb-icon.png" alt="" id="express-icon"/> Mongo</p>
                        </div>
                        )}
                        {selectedService === "Blockchain" && (
                        <div>
                            <img src="/images/blockchain.png" />
                            <h2 className="text-quicksand">Blockchain Development</h2>
                            <p className="lead text-secondary mb-4">I can create decentralized apps and smart contracts that interact with the blockchain, specifically Ethereum.</p>
                            <p className="text-dark fw-bold mb-3"><i className="fab fa-ethereum fa-xl"></i> Solidity</p>
                            <p className="text-dark fw-bold mb-3"><i className="fab fa-python fa-xl"></i> Python</p>
                            <p className="text-dark fw-bold mb-3"><i className="fab fa-js-square fa-xl"></i> Javascript</p>
                        </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="content text-dark text-poppins p-5 d-flex flex-column justify-content-center align-items-center w-100">
                    <div className='w-100 mb-5'>
                        <img src="/images/frontend.png" className='w-100 mx-auto'/>
                        <h2 className="text-quicksand">Frontend Development</h2>
                        <p className="lead text-secondary mb-4">I'm all about simple, clean and responsive design. I love bringing ideas to life beautifully through a screen.</p>
                        <p className="text-dark fw-bold mb-3 text-center"><i className="fab fa-react fa-xl"></i> React</p>
                        <p className="text-dark fw-bold mb-3 text-center"><i className="fab fa-bootstrap fa-xl"></i> Bootstrap</p>
                        <p className="text-dark fw-bold mb-3 text-center"><i className="fab fa-figma fa-xl"></i> Figma</p>
                    </div>
                    <div className='w-100 mb-5'>
                        <img src="/images/backend.png" className='w-100 mx-auto' />
                        <h2 className="text-quicksand">Backend Development</h2>
                        <p className="lead text-secondary mb-4">Static pages are boring! I can develop functional and dynamic pages that handle user requests and interact with databases.</p>
                        <p className="text-dark fw-bold mb-3 text-center"><i className="fab fa-node-js fa-xl"></i> Node</p>
                        <p className="text-dark fw-bold mb-3 text-center"><img src="/images/icons/expressjs-icon.png" alt="" id="express-icon"/> Express</p>
                        <p className="text-dark fw-bold mb-3 text-center"><img src="/images/icons/mongodb-icon.png" alt="" id="express-icon"/> Mongo</p>
                    </div>
                    <div className='w-100 mb-5'>
                        <img src="/images/blockchain.png" className='w-100 mx-auto' />
                        <h2 className="text-quicksand">Blockchain Development</h2>
                        <p className="lead text-secondary mb-4">I can create decentralized apps and smart contracts that interact with the blockchain, specifically Ethereum.</p>
                        <p className="text-dark fw-bold mb-3 text-center"><i className="fab fa-ethereum fa-xl"></i> Solidity</p>
                        <p className="text-dark fw-bold mb-3 text-center"><i className="fab fa-python fa-xl"></i> Python</p>
                        <p className="text-dark fw-bold mb-3 text-center"><i className="fab fa-js-square fa-xl"></i> Javascript</p>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    )
}

export default Services;
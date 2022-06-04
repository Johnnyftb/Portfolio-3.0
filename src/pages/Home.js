import React from 'react';
import { Navbar, Footer } from "./components/index";

const Home = ({windowWidth}) => {

    const [imageIndex, setImageIndex] = React.useState(1);
    React.useEffect(() => {
        setInterval(() => {
            setImageIndex(prev => prev === 3 ? 1 : prev + 1)
        }, 2000)
    }, [])
    
    return (
        <div className="home">
            <Navbar windowWidth={windowWidth}/>
            <div className="content px-5 py-2 text-dark text-quicksand d-flex flex-lg-row flex-column justify-content-lg-around justify-content-center align-items-center">
                <div className={windowWidth > 992 && 'w-50'}>
                    <h1 className="display-3 mb-4 text-lg-start text-center">Hey, I'm John 👋</h1>
                    <h3 className="text-poppins mb-5 text-secondary text-lg-start text-center">I'm a full-stack web developer based in Australia and I love building applications for individuals, projects & companies</h3>
                    <a href="/contact" className="text-decoration-none">
                        <h3 className="text-purple text-quicksand text-lg-start text-center">Let's Work <i className="fa fa-arrow-right ms-2"></i></h3>
                    </a>
                </div>
                <img src={`images/${imageIndex}.png`} alt="" className={windowWidth > 992 ?'w-25' : 'w-75'} />
            </div>
            <Footer />
        </div>
    )
}

export default Home;
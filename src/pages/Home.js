import React from 'react';
import { Navbar, Footer } from "./components/index";

const Home = () => {

    const [imageIndex, setImageIndex] = React.useState(1);
    React.useEffect(() => {
        setInterval(() => {
            setImageIndex(prev => prev === 3 ? 1 : prev + 1)
        }, 2000)
    }, [])
    
    return (
        <div className="home">
            <Navbar/>
            <div className="content px-5 py-2 text-dark text-quicksand d-flex justify-content-around align-items-center">
                <div className='w-50'>
                    <h1 className="display-3 mb-4">Hey, I'm John 👋</h1>
                    <h3 className="text-poppins mb-5 text-secondary">I'm a full-stack web developer based in Australia and I love building applications for individuals, projects & companies</h3>
                    <a href="/contact" className="text-decoration-none">
                        <h3 className="text-purple text-quicksand">Let's Work <i className="fa fa-arrow-right ms-2"></i></h3>
                    </a>
                </div>
                <img src={`images/${imageIndex}.png`} alt="" className="w-25" />
            </div>
            <Footer />
        </div>
    )
}

export default Home;
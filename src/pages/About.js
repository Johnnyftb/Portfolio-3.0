import { Navbar, Footer } from "./components/index";

const About = () => {

    return (
        <div className="about">
            <Navbar selected={'About Me'}/>
            <div className="content px-5 py-2 text-dark text-quicksand d-flex justify-content-around align-items-center">
                <div className='w-50'>
                    <h1 className="display-3 mb-4">About Me</h1>
                    <h4 className="text-poppins mb-4 text-secondary lh-base">My name is John and I'm a self taught developer who loves to build things with code.</h4>
                    <h4 className="text-poppins mb-4 text-secondary lh-base">I'm currently heavily involved in the web3 space as I believe it's innovations and technologies will revolutionize the way we interact with each other on the internet. My <span className="fw-bold text-purple">goal</span> is to work with companies and projects looking to utiliize these technologies to <span className="fw-bold text-purple">produce true value</span> and <span className="fw-bold text-purple">create real change</span>.</h4>
                </div>
                <img src="/images/myphoto.jpg" alt="" className="rounded-circle" />
            </div>
            <Footer />
        </div>
    )
}

export default About;
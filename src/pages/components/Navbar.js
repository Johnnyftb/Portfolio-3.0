import React from 'react';

const navLinks = [
    {
        name: "About Me",
        link: "/about"
    },
    {
        name: "Services",
        link: "/services"
    },
    {
        name: "Projects",
        link: "/projects"
    },
    {
        name: "Contact",
        link: "/contact"
    }
]

const Navbar = ({selected, windowWidth}) => {

    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const [sidebarPosition, setSidebarPosition] = React.useState('absolute');

    function handleClick() {
        setSidebarOpen(prev => !prev);
        !sidebarOpen ? setTimeout(() => {
            setSidebarPosition('fixed')
        }, 500) : setSidebarPosition('absolute');
    }

    return (
        <nav className="navbar p-0">
            {windowWidth < 992 && (
                <div className={`sidebar bg-dark ${sidebarPosition}`} style={sidebarOpen ? {left: 0} : {left: '100vw'}}>
                    <div className="container px-5 text-dark text-quicksand d-flex flex-column align-items-center">
                        <div className="exit-container d-flex justify-content-end align-items-center w-100">
                            <i className="fa fa-x fa-2x text-light" onClick={handleClick}></i>
                        </div>
                        {navLinks.map(item => (
                            <a href={item.link} className="text-decoration-none text-light">
                                <h3 className={`mb-5 ${item.name === selected ? 'text-purple' : 'text-light'} mb-0`}>{item.name}</h3>
                            </a>
                        ))}
                    </div>
                </div>
            )}
            <div className="px-5 text-dark text-quicksand d-flex justify-content-between align-items-center w-100 h-100">
                <a href="/" className="nav-link text-dark">
                    <img src="/images/icons/j.png" alt="" />
                </a>
                {windowWidth > 992 ? (
                    <ul className="navbar-nav d-flex flex-row align-items-center">
                        {navLinks.map(item => (
                            <li className="nav-item">
                                <a href={item.link} className="nav-link">
                                    <h5 className={`mx-4 ${item.name === selected ? 'text-purple' : 'text-dark'} mb-0`}>{item.name}</h5>
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <i className="fa fa-bars fa-2x" onClick={handleClick}></i>
                )}
            </div>
        </nav>
    )
}

export default Navbar;
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

const Navbar = ({selected}) => {

    return (
        <nav className="navbar">
            <div className="px-5 text-dark text-quicksand d-flex justify-content-between align-items-center w-100 h-100">
                <a href="/" className="nav-link text-dark">
                    <h1 className="display-5 mb-0">John Pioc</h1>
                </a>
                <ul className="navbar-nav d-flex flex-row align-items-center">
                    {navLinks.map(item => (
                        <li className="nav-item">
                            <a href={item.link} className="nav-link">
                                <h5 className={`mx-4 ${item.name === selected ? 'text-purple' : 'text-dark'} mb-0`}>{item.name}</h5>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
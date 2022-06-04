import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import './css/utilities.css';
import './css/app.css';

import { Home, About, Services, Projects, Contact } from "./pages/index";

const App = () => {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <BrowserRouter>
            <div className="app bg-light">
                <Switch>
                    <Route exact path="/">
                        <Home windowWidth={windowWidth} />
                    </Route>
                    <Route exact path="/about">
                        <About windowWidth={windowWidth} />
                    </Route>
                    <Route exact path="/services">
                        <Services windowWidth={windowWidth} />
                    </Route>
                    <Route exact path="/projects">
                        <Projects windowWidth={windowWidth} />
                    </Route>
                    <Route exact path="/contact">
                        <Contact windowWidth={windowWidth} />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
        
    )
}

export default App;
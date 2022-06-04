import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import './css/utilities.css';
import './css/app.css';

import { Home, About, Services, Projects, Contact } from "./pages/index";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app bg-light">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/services">
                        <Services />
                    </Route>
                    <Route exact path="/projects">
                        <Projects />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
        
    )
}

export default App;
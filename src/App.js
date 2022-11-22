import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import "./App.css"
import NavbarComponent from "./Components/Navbar"
import Photos from "./Components/Photos"
import About from './Components/AboutUs'
import Contact from './Components/ContactUs'
import Photo from './Components/Photo'

function App() {
  return (
    <BrowserRouter>
		  <NavbarComponent />
			<Switch>
				<Route exact path="/">
					<Photos />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route path="/photos/:id">
					<Photo />
				</Route>
			</Switch>
    </BrowserRouter>
  );
}

export default App;
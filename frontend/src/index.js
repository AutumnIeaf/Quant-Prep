import React from 'react';  
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// Componenet imports
import App from "./App";
import Header from "./components/header";
import Footer from "./components/footer"
import About from "./components/about"
import Contact from "./components/contact"
import Register from "./components/register"
import Login from "./components/login"
import Courses from "./components/courses"
import Course1 from "./components/course1"

const routing = (
  <Router>
      <Header />
      <Switch>
          <Route exact path = "/" component = {App} />
          <Route exact path = "/about" component = {About} />
          <Route exact path = "/contact" component = {Contact} />
          <Route exact path = "/login" component = {Login} />
          <Route exact path = "/register" component = {Register} />
          <Route exact path = "/courses" component = {Courses} />
          <Route exact path = "/course1" component = {Course1} />
      </Switch>
      <Footer/>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

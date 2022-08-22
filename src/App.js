import Scrollspy from 'react-scrollspy'
import './App.scss';
import logo from './assets/logo.png';
import $ from 'jquery'; 
import { useEffect } from 'react';
import WorkExp from './tabs/WorkExp/WorkExp';
import Projects from './tabs/Projects/Projects';
import Experience from './tabs/Experience/Experience';
import Skills from './tabs/Skills/Skills';
import Contacts from './tabs/Contacts/Contacts';
import Education from './tabs/Education/Education';

function App() {

  useEffect(() => {
    console.log('useEffect')
    
  })

  const navClicked = (e) => {
    $(".nav-link").removeClass("active");
    e.target.className += ' active';
  }

  return (
    <div className="App">
      <div className="scroll-spy">
        <section id="intro"><WorkExp /></section>
        <section id="projects"><Projects /></section>
        <section id="work-exp"><Experience /></section>
        <section id="skills"><Skills /></section>
        <section id="education"><Education /></section>
        <section id="contact"><Contacts /></section>
      </div>
      
      <div className="navbar-ex">
        <a className="navbar-brand pl-4" href="#">
          <img src={logo} width="45%"/>
        </a>
        <Scrollspy className="scrollspy" items={ ['intro', 'projects', 'work-exp', 'skills', 'education', 'contact'] } currentClassName="active">
          <li><a href="#intro">About</a></li>
          <li><a href="#projects">Personal Projects</a></li>
          <li><a href="#work-exp">Experience</a></li>
          <li><a href="#skills">Skillsets</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </Scrollspy>
      </div>
    </div>
  );
}

export default App;

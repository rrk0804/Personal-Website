import { useRef, useState } from "react";
import NavBar from "./components/NavBar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import SocialMediaFooter from "./components/SocialMediaFooter";
import Education from "./components/Education";
import './App.css'

function App() {

  const sectionRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), 
                       useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), 
                       useRef<HTMLDivElement>(null)];
  
  const [browserMode, setBrowserMode] = useState("dark");
  const changeBrowserMode = () => {
    if (browserMode === "dark") {
      setBrowserMode("light");
    } else {
      setBrowserMode("dark");
    }
  };

  return (
    <div className={"app-component " + browserMode}>
      <NavBar DivRefs={ sectionRefs }/>
      <Introduction />
      <About />
      <Education divRef={ sectionRefs[0] } /> 
      <Experience divRef={ sectionRefs[1] } />
      <Projects divRef={ sectionRefs[2] }/>
      <Skills divRef={ sectionRefs[3] }/>
      <Hobbies divRef={ sectionRefs[4] }/>
      <Contact />
      <SocialMediaFooter changeBrowserMode={changeBrowserMode} browserMode={browserMode} />
    </div>
  );
}

export default App

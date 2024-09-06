import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Technologies from "./components/Technologies.jsx";
import Experiencie from "./components/Experiencie.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import logo from "./assets/aronjustologo.png";

function App() {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <Helmet>
        <title>Portafolio</title>
        <meta name="description" content="Una descripción de mi aplicación React" />
        <meta name="keywords" content="react, aplicación, portfolio" />
        <link rel="icon" type="image/png" href={logo} />
        {/* Puedes agregar más metadatos aquí */}
      </Helmet>

      <div className="fixed top-0 -z-10 h-full w-full"><div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div></div>
      
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies/>
        <Experiencie/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;

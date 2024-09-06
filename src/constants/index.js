import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Soy un apasionado desarrollador full stack que inició su carrera en el bootcamp de desarrollo full stack de Tecsup "codiGO". He creado proyectos utilizando tecnologías frontend como React y backend Django, MySQL y PostgreSQL. Mi objetivo es seguir aprendiendo y crear soluciones innovadoras.`;

export const ABOUT_TEXT = `Comencé mi viaje como desarrollador web en el bootcamp "codiGO" de Tecsup, donde aprendí a trabajar con tecnologías como React, Django y bases de datos. Desde entonces, he trabajado en proyectos personales, desarrollando aplicaciones web eficientes y fáciles de usar. Me apasiona resolver problemas complejos y trabajar en equipo.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Estudiante de Desarrollo Full Stack",
    company: "Tecsup - Bootcamp codiGO",
    description: `Participé en el desarrollo de aplicaciones web utilizando tecnologías como React y Django, integrando bases de datos como MySQL. Aprendí sobre la creación de APIs RESTful y el desarrollo full stack.`,
    technologies: ["Javascript", "React.js", "Django", "MySQL", "PostgreSQL"],
  },
  {
    year: "2024",
    role: "Estudiante de Desarrollo Backend",
    company: "Alura Latam - Proyecto Oracle ONE",
    description: `Participo en el bootcamp de desarrollo backend, enfocándome en Java y Spring Boot. Aprendo sobre el desarrollo de aplicaciones robustas y escalables, así como la creación de APIs RESTful con estas tecnologías.`,
    technologies: ["Java", "Spring Boot", "RESTful APIs", "SQL"],
  },
  // ... otros elementos del array EXPERIENCES si los hay
];

export const PROJECTS = [
  
  {
    title: "Aplicación de Gestión de Tareas",
    image: project2,
    description:
      "Una aplicación para gestionar tareas y proyectos, con funciones como creación de tareas y seguimiento de progreso.",
    technologies: ["HTML", "CSS", "React", "Firebase"],
  },
  {
    title: "Sitio Web de Portafolio",
    image: project3,
    description:
      "Un sitio web de portafolio personal que muestra proyectos y habilidades.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  
];

export const CONTACT = {
  address: "Ccorao S/n, San Sebastian, Cusco",
  phoneNo: "+51 929019747",
  email: "aronchoque72@gmail.com",
};

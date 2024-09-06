import logo from "../assets/aronjustologo.png";
import { FaLinkedin, FaGithub, FaTiktok, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img className="mx-2 w-10" src={logo} alt='logo' />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/aron-justo-choque-chauca-2810bb2a1/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/aron15951" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.tiktok.com/@aron_justo" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

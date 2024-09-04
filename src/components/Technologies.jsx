import { RiReactjsLine, SiHtml5 } from "react-icons/ri";
import { DiDjango } from "react-icons/di";
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaGithub } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24 '>
      <h1 className='my-20 text-center text-4xl'>Tecnologías</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='rounded-3xl border-4 border-neutral-600 p-4'>
          <RiReactjsLine className='text-7xl text-cyan-500'></RiReactjsLine>
        </div>
        <div className='rounded-3xl border-4 border-neutral-600 p-4'>
          <DiDjango className='text-7xl text-green-600'></DiDjango>
        </div>
        <div className='rounded-3xl border-4 border-neutral-600 p-4'>
          <FaHtml5 className='text-7xl text-orange-600'></FaHtml5>
        </div>
        <div className='rounded-3xl border-4 border-neutral-600 p-4'>
          <FaCss3Alt className='text-7xl text-blue-600'></FaCss3Alt>
        </div>
        <div className='rounded-3xl border-4 border-neutral-600 p-4'>
          <FaJs className='text-7xl text-yellow-500'></FaJs>
        </div>
        <div className='rounded-3xl border-4 border-neutral-600 p-4'>
          <FaGithub className='text-7xl text-gray-500'></FaGithub>
        </div>
      </div>
    </div>
  );
};

export default Technologies;

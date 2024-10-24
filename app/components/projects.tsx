import React from 'react';

export const Projects = () => {
  return (
    <div className='w-full h-auto text-center bg-black py-2 flex flex-col justify-center items-center'>
      <h1 className='font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-cyan-600 mb-2'>Projects</h1>

      {/* Projects Row */}
      <div className='flex flex-wrap justify-center space-x-8'>
        <div className='bg-black text-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
          <h2 className='text-xl font-bold'>
            <a href='https://book-markr.vercel.app/login' target='_blank' rel='noopener noreferrer'>BookMarkr</a>
          </h2>
          <p className='mt-2'>A web application for managing your bookshelf.</p>
        </div>
        <div className='bg-black text-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
          <h2 className='text-xl font-bold'>
            <a href='https://probably-weather.vercel.app' target='_blank' rel='noopener noreferrer'>Probably Weather</a>
          </h2>
          <p className='mt-2'>A lightweight weather application</p>
        </div>
      </div>
      <div className='-mt-8'></div>
    </div>
  );
}

export default Projects;

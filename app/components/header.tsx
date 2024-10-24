import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiExpress } from 'react-icons/si';

export const Header = () => {
    return (
        <div className='w-full h-auto bg-black flex justify-center items-center pt-48 pb-28'> {/* Add pt-8 for top padding */}
            <div className='flex flex-row justify-between items-center w-full max-w-6xl px-4'>
                {/* Text Box */}
                <div className='max-w-xl text-left'>
                    <h1 className='font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-cyan-600 mb-2'>HELLO, I&apos;M JEREMY</h1>
                    <h1 className='font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-pink-600 mb-4 leading-tight'>A WEB DEVELOPER</h1>
                    <p className='text-white mb-1 leading-snug'>I&apos;m passionate about web development and thrive on creating dynamic, user-friendly applications.</p>
                    <p className='text-white mb-1 leading-snug'>My primary focus is on JavaScript, where I enjoy leveraging frameworks and technologies like React, Next.js, Node.js, and Express to build robust solutions.</p>
                    <p className='text-white mb-1 leading-snug'>Whether I&apos;m crafting seamless user interfaces or developing scalable back-end services.</p>
                    <p className='text-white leading-snug'>I love the challenge of bringing ideas to life in the digital world.</p>
                </div>

                {/* Icons Row */}
                <div className='flex space-x-8'>
                    <div className='flex justify-center items-center rounded-full bg-black shadow-lg p-4'>
                        <FaReact className='text-blue-500 text-4xl' />
                    </div>
                    <div className='flex justify-center items-center rounded-full bg-black shadow-lg p-4'>
                        <SiNextdotjs className='text-white text-4xl' />
                    </div>
                    <div className='flex justify-center items-center rounded-full bg-black shadow-lg p-4'>
                        <SiExpress className='text-green-500 text-4xl' />
                    </div>
                    <div className='flex justify-center items-center rounded-full bg-black shadow-lg p-4'>
                        <FaNodeJs className='text-green-700 text-4xl' />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;
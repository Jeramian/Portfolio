import React from 'react';

export const Header = () => {
    return (
        <div className='w-full h-screen text-center bg-black py-4 flex flex-col justify-center items-center'>
            <h1 className='font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-cyan-600 pb-10'>I'M JEREMY, WEB DEVELOPER</h1>
            <div className='max-w-xl mx-auto'> {/* Set a max-width for the text block */}
                <p className='text-white mb-1 leading-snug'>I’m passionate about web development and thrive on creating dynamic, user-friendly applications.</p>
                <p className='text-white mb-1 leading-snug'>My primary focus is on JavaScript, where I enjoy leveraging frameworks and technologies like React, Next.js, Node.js, and Express to build robust solutions.</p>
                <p className='text-white mb-1 leading-snug'>Whether I'm crafting seamless user interfaces or developing scalable back-end services.</p>
                <p className='text-white leading-snug'>I love the challenge of bringing ideas to life in the digital world.</p>
            </div>
        </div>
    );
}
export default Header;
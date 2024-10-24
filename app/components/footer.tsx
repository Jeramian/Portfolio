import React from 'react';

export const Footer = () => {
    return (
        <div className='bg-black text-white text-center py-2 pt-32'>
            <p className='font-bold text-sm bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-cyan-600'>
                &copy; {new Date().getFullYear()} Jeremy Eramian. All rights reserved.
            </p>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" className="inline-block w-6 h-6 mt-2" />
            </a>
        </div>
    );
}

export default Footer;
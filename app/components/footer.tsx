import React from 'react'

export const Footer = () => {
    return(
        <div className='bg-black text-white py-4 text-center'>
            <p className='font-bold text-sm bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-cyan-600'>
                &copy; {new Date().getFullYear()} Jeremy Eramian. All rights reserved.
            </p>
        </div>
    )
}

export default Footer;
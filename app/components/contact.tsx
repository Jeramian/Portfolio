'use client';
import React, { FormEvent } from 'react';
import { useState } from 'react';

export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const sendMail = async (e: FormEvent) => {
        e.preventDefault();
        
        try {
            const res = await fetch('/api/sendMail', {
                method: 'POST',
                body: JSON.stringify({ name, email, subject, message }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (!res.ok) {
                // Log the response status and statusText for debugging
                console.error('Response error:', res.status, res.statusText);
                return;
            }
    
            const result = await res.json();
            console.log('Success:', result);
        } catch (err: any) {
            console.error('Error:', err);
        }
    };
    

  return (
    <div className='w-full h-auto text-center bg-black py-2 flex flex-col justify-center items-center'>
      <h1 className='font-bold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-cyan-600 mb-2'>Contact</h1>
      <div>
        <form className='rounded px-8 pt-6 pb-8 mb-4' onSubmit={sendMail}>
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='Name'></input>
            <br></br>
            <br></br>
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='email' placeholder='Email'></input>
            <br></br>
            <br></br>
            <label className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
            <input value={subject} onChange={(e) => setSubject(e.target.value)} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='Subject'></input>
            <br></br>
            <br></br>
            <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Message'></textarea>
            <br></br>
            <br></br>
            <button className='bg-gradient-to-r from-pink-600 to-cyan-600 text-white rounded-full py-2 px-4' type='submit'>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

'use client';
import React, { useState, useEffect } from 'react'; 
import { FC } from 'react';

const Contact: FC = () => {
 
  const [name, setName] = useState(''); 
	const [email, setEmail] = useState(''); 
	const [message, setMessage] = useState(''); 
	const [errors, setErrors] = useState({}); 
	const [isFormValid, setIsFormValid] = useState(false); 

  useEffect(() => { 
		validateForm(); 
	}, [name, email, message]); 
	
	const validateForm = () => { 
		let errors = {}; 

		if (!name) { 
			errors.name = 'Full Name is required.'; 
		} 

		if (!email) { 
			errors.email = 'Email is required.'; 
		} else if (!/\S+@\S+\.\S+/.test(email)) { 
			errors.email = 'Email is invalid.'; 
		} 

		if (!message) { 
			errors.message = 'Message is required.'; 
		} else if (message.length < 50) { 
			errors.message = 'Message must be at least 50 characters.'; 
		} 

		setErrors(errors); 
		setIsFormValid(Object.keys(errors).length === 0); 
	}; 
  const handleSubmit = () => { 
		if (isFormValid) { 
			console.log('Form submitted successfully!'); 
		} else { 
			console.log('Form has errors..'); 
		} 
	}; 

 

  return (
    <main className='max-w-4xl mx-auto mt-4'>
      <div className='text-left my-5 flex flex-col gap-4'><br />
    <form >
      <div className='mb-5'>
        <label
          htmlFor='name'
          className='mb-3 block text-base font-medium text-black'
        >
          Full Name
        </label>
        <input
          type='text'
          placeholder='Full Name'
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-emerald-800 focus:shadow-md'
        />
        {errors.name && <p style={styles.error}>{errors.name}</p>} 
      </div>
      <div className='mb-5'>
        <label
          htmlFor='email'
          className='mb-3 block text-base font-medium text-black'
        >
          Email Address
        </label>
        <input
          type='email'
          placeholder='example@domain.com'
          value={email} 
					onChange={(e) => setEmail(e.target.value)} 
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-emerald-800 focus:shadow-md'
        />{errors.email && <p style={styles.error}>{errors.email}</p>} 
      </div>
      <div className='mb-5'>
        <label
          htmlFor='message'
          className='mb-3 block text-base font-medium text-black'
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder='Type your message'
          value={message} 
					onChange={(e) => setMessage(e.target.value)} 
          className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-emerald-800 focus:shadow-md'
        >
        </textarea>
        {errors.message && <p style={styles.error}>{errors.message}</p>} 
      </div>
      <div>
        <button className='hover:shadow-form rounded-md btn btn bg-emerald-800 py-3 px-8 text-base font-semibold text-white outline-none'
        disabled={!isFormValid} 
        onClick={handleSubmit} >
          Submit
        </button>
      </div>
    </form>
    </div>
    </main>
  );
};
const styles ={
  error: { 
		color: 'red', 
		fontSize: '14px', 
		marginBottom: '6px', 
	}, 
}

export default Contact;
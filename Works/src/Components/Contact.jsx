// src/ContactForm.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    
<div>
  <div className=" w-full   text-center  md:flexr-row items-cente mt-6 bg-gray-200">
    <h1 className='text-teal-700 text-xl font-bold mt-6'>Get in Tech</h1>
    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Blanditiis officia laudantium culpa? Del</p>
  </div>
<div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
      
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 shadow-md rounded-lg"
      >
  

        
        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-2 text-sm font-bold text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-2 text-sm font-bold text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2 text-sm font-bold text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-sm font-bold text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            rows="4"
            required
          ></textarea>
        </div>
        
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2 text-sm text-gray-700">I agree to the terms and conditions</span>
          </label>
        </div>
        
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="px-20 py-2 font-bold text-white bg-teal-500 rounded-lg hover:bg-teal-700 focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
</div>
  );
};

export default Contact;

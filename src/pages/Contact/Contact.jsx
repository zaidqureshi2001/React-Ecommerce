import React from 'react'
const Contact = () => {
  
  return (
    <div className="bg-lightPink p-8 rounded-lg shadow-md max-w-md mx-auto my-32 font-playfair bg-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

      {/* Contact Form */}
      <form  method="POST" className="mb-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded h-32"
        ></textarea>
        <button 
          type="submit"
          className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-700 w-full"
        >
          Send Message
        </button>
      </form>

      {/* Social Media & Contact Options */}
      <div className="flex justify-around">
        <a 
          href="https://wa.me/YOUR_WHATSAPP_NUMBER"
          className="text-pink-500 hover:text-pink-700"
        >
          WhatsApp
        </a>
        <a
          href="https://instagram.com/YOUR_INSTAGRAM_USERNAME"
          className="text-pink-500 hover:text-pink-700"
        >
          Instagram
        </a>
        <a
          href="mailto:YOUR_EMAIL"
          className="text-pink-500 hover:text-pink-700"
        >
          Email
        </a>
      </div>
    </div>)
}

export default Contact
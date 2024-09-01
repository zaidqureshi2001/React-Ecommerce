import React, { useState } from 'react';

const FAQ = () => {
  // State to manage which FAQ is open
  const [openFAQ, setOpenFAQ] = useState(null);

  // Function to toggle FAQ
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="max-w-xl mx-auto p-6 my-32 font-playfair">
      <h2 className="text-3xl font-bold text-center mb-6">FAQs</h2>
      <div className="space-y-4">
        {/* FAQ 1 */}
        <div className="border-b border-gray-300 pb-4">
          <button
            className="flex justify-between w-full py-2 text-left font-medium text-gray-800"
            onClick={() => toggleFAQ(1)}
          >
            <span className='font-bold'> Is COD available?</span>
            <span>{openFAQ === 1 ? '-' : '+'}</span>
          </button>
          {openFAQ === 1 && (
            <p className="mt-2 text-gray-600">
              Yes, but only in serviceable areas in Mumbai.
            </p>
          )}
        </div>

        {/* FAQ 2 */}
        <div className="border-b border-gray-300 pb-4">
          <button
            className="flex justify-between w-full py-2 text-left font-medium text-gray-800"
            onClick={() => toggleFAQ(2)}
          >
            <span className='font-bold'>What are the payment options available?</span>
            <span>{openFAQ === 2 ? '-' : '+'}</span>
          </button>
          {openFAQ === 2 && (
            <p className="mt-2 text-gray-600">
              We accept credit cards, debit cards, PayPal, and UPI payments.
            </p>
          )}
        </div>

        {/* FAQ 3 */}
        <div className="border-b border-gray-300 pb-4">
          <button
            className="flex justify-between w-full py-2 text-left font-medium text-gray-800"
            onClick={() => toggleFAQ(3)}
          >
            <span className='font-bold'>What is the return policy?</span>
            <span>{openFAQ === 3 ? '-' : '+'}</span>
          </button>
          {openFAQ === 3 && (
            <p className="mt-2 text-gray-600">
              We offer a 30-day return policy for unused items in their original packaging.
            </p>
          )}
        </div>

        {/* FAQ 4 */}
        <div className="border-b border-gray-300 pb-4">
          <button
            className="flex justify-between w-full py-2 text-left font-medium text-gray-800"
            onClick={() => toggleFAQ(4)}
          >
            <span className='font-bold'>How can I track my order?</span>
            <span>{openFAQ === 4 ? '-' : '+'}</span>
          </button>
          {openFAQ === 4 && (
            <p className="mt-2 text-gray-600">
              You can track your order by entering your order ID on the tracking page.
            </p>
          )}
        </div>

        {/* FAQ 5 */}
        <div className="border-b border-gray-300 pb-4">
          <button
            className="flex justify-between w-full py-2 text-left font-medium text-gray-800"
            onClick={() => toggleFAQ(5)}
          >
            <span className='font-bold'>How long does delivery take?</span>
            <span>{openFAQ === 5 ? '-' : '+'}</span>
          </button>
          {openFAQ === 5 && (
            <p className="mt-2 text-gray-600">
              Delivery typically takes 3-5 business days within Mumbai and 5-7 business days outside.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

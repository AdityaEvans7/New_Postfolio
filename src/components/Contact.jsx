import React from 'react'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section className="bg-[#1a1a1a] text-white py-20 px-6 md:px-20">
      <h2 className="text-4xl font-semibold text-center mb-16">
        Get <span className="text-lime-400">In Touch</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left – Form */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
          <ContactForm />
        </div>

        {/* Right – Contact Details */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">My Contact Details</h3>
          <div className="space-y-6 text-gray-300 text-sm">
            <div>
              <p className="uppercase text-gray-400">Email</p>
              <p>adityaevans13@gmail.com</p>
            </div>
            <div>
              <p className="uppercase text-gray-400">Phone</p>
              <p>+91 7807336962</p>
            </div>
            <div>
              <p className="uppercase text-gray-400">Whatsapp</p>
              <p>+91 9263139129</p>
            </div>
            <div>
              <p className="uppercase text-gray-400">Address</p>
              <p>
                SP-40, RIICO<br />
                Arya Main Campus<br />
                Kukas, Jaipur, Rajasthan 302028
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

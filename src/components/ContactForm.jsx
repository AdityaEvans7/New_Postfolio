import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

export default function ContactForm() {
  const form = useRef()
  const [success, setSuccess] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_fjgvn0d',
      'template_bteajck',
      form.current,
      'im5JYFU3I7R5DGUid'
    ).then(() => {
      setSuccess(true)
      form.current.reset()
    }, (error) => {
      console.error('FAILED...', error.text)
    })
  }

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-5 max-w-xl w-full"
    >
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="bg-[#2b2b2b] text-white p-3 rounded-md focus:outline-none"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="bg-[#2b2b2b] text-white p-3 rounded-md focus:outline-none"
      />
      <input
        type="text"
        name="user_phone"
        placeholder="Your Phone"
        className="bg-[#2b2b2b] text-white p-3 rounded-md focus:outline-none"
      />
      <textarea
        name="message"
        placeholder="Write a Message"
        rows="5"
        required
        className="bg-[#2b2b2b] text-white p-3 rounded-md resize-none focus:outline-none"
      />
      <button
        type="submit"
        className="bg-lime-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-lime-500 transition"
      >
        SEND MESSAGE
      </button>
      {success && <p className="text-green-400">Message sent successfully!</p>}
    </form>
  )
}

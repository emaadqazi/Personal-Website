import Section from '../components/Section.jsx'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { useState } from 'react'

export default function Contact({ id }) {
  const [status, setStatus] = useState('idle')

  function handleSubmit(e) {
    e.preventDefault()
    // Replace with your submission logic or a service like Formspree / Getform.
    setStatus('submitting')
    setTimeout(() => setStatus('sent'), 800)
  }

  return (
    <Section
      id={id}
      title="Contact"
      subtitle="Want to collaborate or just say hi? Drop a message."
    >
      <div className="grid gap-8 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" required className="mt-1 block w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" required className="mt-1 block w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea rows="5" required className="mt-1 block w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900"></textarea>
          </div>
          <button
            type="submit"
            disabled={status !== 'idle'}
            className="inline-flex items-center rounded-full bg-gray-900 text-white text-sm px-5 py-2.5 hover:bg-gray-800 transition disabled:opacity-60"
          >
            {status === 'idle' && 'Send'}
            {status === 'submitting' && 'Sending...'}
            {status === 'sent' && 'Sent!'}
          </button>
          <p className="text-xs text-gray-500">
            To make this live, wire it to a service (Formspree, Getform, etc.) or your own API.
          </p>
        </form>

        <div>
          <div className="rounded-2xl border border-gray-200 p-5">
            <h3 className="font-semibold">Find me online</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="mailto:you@domain.com" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <FaEnvelope aria-hidden /> you@domain.com
                </a>
              </li>
              <li>
                <a href="https://github.com/yourhandle" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <FaGithub aria-hidden /> github.com/yourhandle
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/yourhandle" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <FaLinkedin aria-hidden /> linkedin.com/in/yourhandle
                </a>
              </li>
              <li>
                <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <FaTwitter aria-hidden /> @yourhandle
                </a>
              </li>
            </ul>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Replace the links above with your actual profiles.
          </p>
        </div>
      </div>
    </Section>
  )
}



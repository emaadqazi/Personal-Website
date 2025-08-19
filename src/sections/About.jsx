import Section from '../components/Section.jsx'

export default function About({ id }) {
  return (
    <Section
      id={id}
      title="About Me"
      subtitle="I craft clean, performant web experiences with modern tools."
    >
      <div className="prose prose-zinc max-w-none">
        <p>
          I’m a software engineer focused on building elegant products with an obsession for simplicity.
          I enjoy working across the stack, with a recent focus on React, TypeScript, and performant UI systems.
        </p>
        <p>
          Outside of code, you’ll find me exploring design systems, writing, and tinkering with new ideas.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#resume"
            className="inline-flex items-center rounded-full bg-gray-900 text-white text-sm px-4 py-2 hover:bg-gray-800 transition"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-gray-300 text-sm px-4 py-2 hover:bg-gray-50 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </Section>
  )
}



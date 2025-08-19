import PropTypes from 'prop-types'
import useActiveSection from '../hooks/useActiveSection.jsx'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experiences', label: 'Experiences' },
  { id: 'resume', label: 'Resume' },
  { id: 'recent', label: "What I've Been Up To" },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ sectionIds }) {
  const activeId = useActiveSection(sectionIds)

  return (
    <nav className="flex items-center justify-between py-4">
      <a href="#about" className="text-lg font-extrabold tracking-tight">
        Emaad<span className="text-brand-600">.</span>
      </a>

      <ul className="hidden md:flex items-center gap-6">
        {navItems.map((item) => {
          const active = activeId === item.id
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={[
                  'text-sm font-medium transition-colors',
                  active ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900',
                ].join(' ')}
              >
                <span
                  className={[
                    'inline-block rounded-full px-3 py-1',
                    active ? 'bg-gray-100' : '',
                  ].join(' ')}
                >
                  {item.label}
                </span>
              </a>
            </li>
          )
        })}
      </ul>

      <a
        href="#contact"
        className="hidden md:inline-flex items-center rounded-full bg-gray-900 text-white text-sm px-4 py-2 hover:bg-gray-800 transition"
      >
        Say hello
      </a>
    </nav>
  )
}

Navbar.propTypes = {
  sectionIds: PropTypes.arrayOf(PropTypes.string).isRequired,
}



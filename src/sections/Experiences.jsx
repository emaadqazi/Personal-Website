import Section from '../components/Section.jsx'
import experiences from '../data/experiences.json'

export default function Experiences({ id }) {
  return (
    <Section
      id={id}
      title="Experiences"
      subtitle="Roles, companies, and what I worked on."
    >
      <ul className="space-y-6">
        {experiences.map((item) => (
          <li key={`${item.company}-${item.role}`} className="rounded-2xl border border-gray-200 p-5 hover:shadow-sm transition">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold">
                  {item.role} <span className="text-gray-500">@ {item.company}</span>
                </h3>
                <p className="mt-1 text-sm text-gray-600">{item.description}</p>
              </div>
              <span className="shrink-0 text-xs text-gray-500">{item.dates}</span>
            </div>
            {item.tags?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-gray-100 px-2.5 py-1">{t}</span>
                ))}
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  )
}



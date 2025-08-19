import Section from '../components/Section.jsx'
import recent from '../data/recent.json'

export default function Recent({ id }) {
  return (
    <Section
      id={id}
      title="What I've Been Up To Recently"
      subtitle="Recent projects, posts, and updates."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {recent.map((item) => (
          <a
            key={item.title}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="group block rounded-2xl border border-gray-200 p-5 hover:shadow-sm transition"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-semibold group-hover:text-gray-900">{item.title}</h3>
              <span className="text-xs text-gray-500">{item.date}</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">{item.summary}</p>
            {item.tags?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-gray-100 px-2.5 py-1">{t}</span>
                ))}
              </div>
            ) : null}
          </a>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-500">
        Update these via the JSON file at <code>src/data/recent.json</code>.
      </p>
    </Section>
  )
}



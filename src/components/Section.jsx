import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
        {subtitle && <p className="mt-2 text-gray-500">{subtitle}</p>}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {children}
      </motion.div>
    </section>
  )
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node,
}



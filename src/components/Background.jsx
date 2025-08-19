export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-200 blur-3xl opacity-70 animate-drift" />
      <div className="absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-cyan-200 blur-3xl opacity-60 animate-drift" />
      <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-indigo-200 blur-3xl opacity-60 animate-drift" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05),transparent_60%)]" />
    </div>
  )
}



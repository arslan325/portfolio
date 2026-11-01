// Shared wrapper that gives every section the same spacing and heading style.
export default function Section({ id, title, intro, children, className = '' }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`scroll-mt-20 py-20 sm:py-28 ${className}`}>
      <div className="container-page">
        <header className="mb-12 max-w-2xl sm:mb-16">
          <h2 id={`${id}-title`} className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {intro && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}

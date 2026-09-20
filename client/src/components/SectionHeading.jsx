export default function SectionHeading({ index, title, description }) {
  return (
    <div className="mb-12 flex items-start gap-4 sm:mb-16">
      {typeof index !== 'undefined' && (
        <span className="line-index mt-2 hidden sm:block">{String(index).padStart(2, '0')}</span>
      )}
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl light:text-ink-light">
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-ink-muted light:text-ink-light-muted">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

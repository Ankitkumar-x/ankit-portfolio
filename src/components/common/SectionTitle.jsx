const SectionTitle = ({ eyebrow, title, subtitle }) => {
  return (
    <div style={{ marginBottom: '2rem' }}>
      {eyebrow && (
        <p style={{ color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>
          {eyebrow}
        </p>
      )}
      <h2 style={{ margin: 0, fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.1 }}>{title}</h2>
      {subtitle && (
        <p style={{ marginTop: '0.75rem', maxWidth: '700px', color: '#cbd5e1', fontSize: '1.05rem' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;

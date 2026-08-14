const Button = ({ children, href, variant = 'primary', style = {}, ...props }) => {
  const styles = {
    primary: {
      background: 'linear-gradient(135deg, #38bdf8, #8b5cf6)',
      color: '#f8fafc',
      boxShadow: '0 10px 30px rgba(56, 189, 248, 0.25)'
    },
    secondary: {
      background: 'transparent',
      border: '1px solid rgba(148, 163, 184, 0.4)',
      color: '#e2e8f0'
    }
  };

  const commonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: '0.9rem 1.4rem',
    borderRadius: '999px',
    fontWeight: 700,
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    ...styles[variant],
    ...style
  };

  if (href) {
    return (
      <a href={href} style={commonStyle} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button style={commonStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;

import { profile } from '../../data/profile';

const SocialLinks = ({ direction = 'row' }) => {
  return (
    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexDirection: direction }}>
      {profile.socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '50%',
            background: 'rgba(148, 163, 184, 0.08)',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            color: '#f8fafc',
            textDecoration: 'none'
          }}
          aria-label={social.name}
        >
          {social.label.charAt(0).toUpperCase()}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

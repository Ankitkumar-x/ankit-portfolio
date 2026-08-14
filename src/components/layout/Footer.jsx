import profile from "../../data/profile";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>

        <span>
          Built with React
        </span>
      </div>
    </footer>
  );
}

export default Footer;
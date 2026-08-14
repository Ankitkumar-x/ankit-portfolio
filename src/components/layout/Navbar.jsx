import { useEffect, useRef, useState } from "react";

const primaryNavItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

const secondaryNavItems = [
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
];

const allNavItems = [
  ...primaryNavItems,
  ...secondaryNavItems,
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navbarRef = useRef(null);

  /*
   * Determine the section currently occupying
   * the main viewport area.
   */
  useEffect(() => {
    const updateActiveSection = () => {
      const navbar = navbarRef.current;

      const navbarHeight = navbar
        ? navbar.getBoundingClientRect().height
        : 76;

      const scrollPosition =
        window.scrollY + navbarHeight + 80;

      let currentSection = "home";

      allNavItems.forEach((item) => {
        const sectionId = item.href.substring(1);
        const section = document.getElementById(sectionId);

        if (!section) return;

        const sectionTop =
          section.getBoundingClientRect().top +
          window.scrollY;

        if (sectionTop <= scrollPosition) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener(
      "scroll",
      updateActiveSection,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateActiveSection
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateActiveSection
      );

      window.removeEventListener(
        "resize",
        updateActiveSection
      );
    };
  }, []);

  /*
   * Close menus when clicking outside.
   */
  useEffect(() => {
    const handlePointerDown = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setIsMoreOpen(false);
      }
    };

    document.addEventListener(
      "pointerdown",
      handlePointerDown
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handlePointerDown
      );
    };
  }, []);

  /*
   * Close menus with Escape.
   */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setIsMoreOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  /*
   * Prevent the background page from scrolling
   * while the mobile navigation is open.
   */
  useEffect(() => {
    document.body.style.overflow = isOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavigation = () => {
    setIsOpen(false);
    setIsMoreOpen(false);
  };

  const isActive = (href) => {
    return activeSection === href.substring(1);
  };

  const isSecondaryActive = secondaryNavItems.some(
    (item) => isActive(item.href)
  );

  return (
    <header
      className="navbar"
      ref={navbarRef}
    >
      <div className="container navbar-inner">
        {/* Logo */}
        <a
          href="#home"
          className={`navbar-logo ${
            activeSection === "home"
              ? "navbar-logo-active"
              : ""
          }`}
          onClick={handleNavigation}
          aria-label="Ankit Kumar - Home"
        >
          AK<span>.</span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="navbar-desktop"
          aria-label="Primary navigation"
        >
          <div className="navbar-menu">
            {primaryNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`navbar-link ${
                  isActive(item.href)
                    ? "navbar-link-active"
                    : ""
                }`}
                onClick={handleNavigation}
              >
                {item.label}
              </a>
            ))}

            {/* More Dropdown */}
            <div className="navbar-dropdown">
              <button
                type="button"
                className={`navbar-link navbar-more-button ${
                  isSecondaryActive
                    ? "navbar-link-active"
                    : ""
                }`}
                onClick={() =>
                  setIsMoreOpen((prev) => !prev)
                }
                aria-expanded={isMoreOpen}
                aria-haspopup="menu"
              >
                More

                <span
                  className={`navbar-chevron ${
                    isMoreOpen
                      ? "navbar-chevron-open"
                      : ""
                  }`}
                  aria-hidden="true"
                >
                  ↓
                </span>
              </button>

              <div
                className={`navbar-dropdown-menu ${
                  isMoreOpen
                    ? "navbar-dropdown-open"
                    : ""
                }`}
                role="menu"
              >
                {secondaryNavItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`navbar-dropdown-link ${
                      isActive(item.href)
                        ? "navbar-dropdown-link-active"
                        : ""
                    }`}
                    onClick={handleNavigation}
                    role="menuitem"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <a
              href="#contact"
              className={`navbar-contact-button ${
                isActive("#contact")
                  ? "navbar-contact-active"
                  : ""
              }`}
              onClick={handleNavigation}
            >
              Contact
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          title={isOpen ? "Close navigation" : "Open navigation"}
          className="navbar-toggle"
          onClick={() => {
            setIsOpen((prev) => !prev);
            setIsMoreOpen(false);
          }}
          aria-label={
            isOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <span
            className={`menu-line ${
              isOpen
                ? "menu-line-top-open"
                : ""
            }`}
          />

          <span
            className={`menu-line ${
              isOpen
                ? "menu-line-middle-open"
                : ""
            }`}
          />

          <span
            className={`menu-line ${
              isOpen
                ? "menu-line-bottom-open"
                : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        id="mobile-navigation"
        className={`navbar-mobile ${
          isOpen
            ? "navbar-mobile-open"
            : ""
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <div className="navbar-mobile-inner">
          {primaryNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`navbar-mobile-link ${
                isActive(item.href)
                  ? "navbar-mobile-link-active"
                  : ""
              }`}
              onClick={handleNavigation}
            >
              <span>{item.label}</span>
              <span aria-hidden="true">
                ↗
              </span>
            </a>
          ))}

          <div className="navbar-mobile-divider" />

          <p className="navbar-mobile-label">
            MORE
          </p>

          {secondaryNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`navbar-mobile-link navbar-mobile-secondary ${
                isActive(item.href)
                  ? "navbar-mobile-link-active"
                  : ""
              }`}
              onClick={handleNavigation}
            >
              <span>{item.label}</span>
              <span aria-hidden="true">
                ↗
              </span>
            </a>
          ))}

          <a
            href="#contact"
            className={`navbar-mobile-contact ${
              isActive("#contact")
                ? "navbar-mobile-contact-active"
                : ""
            }`}
            onClick={handleNavigation}
          >
            Contact Me
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
import styles from './Navbar.module.css';
import React, { useState, useEffect } from 'react';

function Navbar() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setCompact(window.scrollY > 100);
      if (window.scrollY <= 100) setOpen(false); // reset when at top
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className={`${styles.navbar} ${compact ? styles.compact : ''} ${open ? styles.open : ''}`}
      onClick={() => compact && setOpen(!open)}
    >
      {compact && !open && (
        <div className={styles.hamburger}>
          {/* Simple hamburger icon */}
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      <div className={styles.navLinks}>
        <a href="#About">About</a>
        <a href="#Projects">Projects</a>
        <a href="#Intrests">Intrests</a>
        <a href="#Contact">Contact</a>
      </div>
    </section>
  );
}

export default Navbar;

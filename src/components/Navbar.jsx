import styles from './Navbar.module.css';
import React, { useState, useEffect, useRef} from 'react';

function Navbar() {
    const [hidden, setHidden] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                setHidden(true);
            } else {
                setHidden(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={`${styles.navbar} ${hidden ? styles.hidden : ''}`}>
            <div className={styles.navLinks}>
                <a href="#About">About</a>
                <a href="#Projects">Projects</a>
                <a href="#Intrests">Intrests</a>
                <a href="#Contact">Contact</a>
            </div>
        </section>
    )
}

export default Navbar;
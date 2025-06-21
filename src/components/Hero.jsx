import styles from './Hero.module.css'
import { useState, useEffect } from 'react'


function Hero() {
    const taglines = [
        'I like to build projects that solve problems.',
        'I like to do Lighting for my school.',
        'I like to volunteer for Greenham Common Control Tower'
    ]

    const [displayed, setDisplayed] = useState('')
    const [taglineIndex, setTaglineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);



    useEffect(() => {
        const current = taglines[taglineIndex];
        let timeout;

        if (isDeleting) {
            timeout = setTimeout(() => {
                setDisplayed(current.substring(0, charIndex - 1))
                setCharIndex(charIndex-1);
            }, 50);
        } else {
            timeout = setTimeout(() => {
                setDisplayed(current.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, 100);
        }

        if (!isDeleting && charIndex === current.length) {
            setTimeout(() => setIsDeleting(true), 2000);
            return;
        }

        if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setTaglineIndex((prev) => (prev + 1) % taglines.length);
        }

        return () => clearInterval(timeout);
    }, [charIndex, isDeleting, taglines, taglineIndex]);


    return (
        <section className={styles.hero}>
            <h1 className={styles.title}>Lawri Darbyshire</h1>
            <h2 className={styles.subtitle}>Developer | Stage Lighting Enthusaist</h2>
            <p className={styles.tagline}>
                {displayed}
                <span className={styles.cursor}>▌</span> 
            </p>
        </section>
    )
}

export default Hero
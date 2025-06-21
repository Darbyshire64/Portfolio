import React from 'react'
import styles from './Hero.module.css'
import { useState, useEffect } from 'react'


function Hero() {
    const tagLines = [
        'I like to build projects that solve problems.',
        'I like to do Lighting for my school.',
        'I like to volunteer for Greenham Common Control Tower'
    ]

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % tagLines.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    return (
        <section className={styles.hero}>
            <h1 className={styles.title}>Lawri Darbyshire</h1>
            <h2 className={styles.subtitle}>Developer | Stage Lighting Enthusaist</h2>
            <p className={styles.tagline}>{tagLines[current]}</p>
        </section>
    )
}

export default Hero
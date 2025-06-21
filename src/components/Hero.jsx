import React from 'react'
import styles from './Hero.module.css'



function Hero() {
    return (
        <section className={styles.hero}>
            <h1 className={styles.title}>Lawri Darbyshire</h1>
            <h2 className={styles.subtitle}>Developer | Stage Lighting Enthusaist</h2>
            <p className={styles.tagline}> I like to build projects that solve problems, I like to do lighting for my school, I like to Volunteer at Greenham Common </p>
        </section>
    )
}

export default Hero
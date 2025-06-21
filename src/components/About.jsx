import styles from './About.module.css';

function About() {
    return (
        <section className={styles.about}>
            <h2 className={styles.title}>About Me</h2>
            <p className={styles.text}>
                Hi, Im Lawri Darbyshire. I Enjoy programming and many other things. i like to desgn stage lighting. i also get to put this into practice when i do lighting for some events at my school. i also volunteer Guideing & Development for Greenham Common Control Tower & Cafe. I also love trains & planes and oddly signaling systems 
            </p>
        </section>
    );
}

export default About
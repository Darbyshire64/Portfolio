import styles from './About.module.css';

function About() {
    return (
        <section id='About' className={styles.about}>
            <h2 className={styles.title}>About Me</h2>
            <p className={styles.text}>
                Hi, Im Lawri Darbyshire. I Enjoy programming and many other things. I like to design stage lighting. I also get to put this into practice when i do lighting for some events at my school, this is also a great oppotuinty to build Teamwork Skill's.  
            </p>
        </section>
    );
}

export default About
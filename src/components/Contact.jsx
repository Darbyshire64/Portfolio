import styles from './Contact.module.css';

function Contact() {
    return (
        <section id="Contact"className={styles.contact}>
            <h2 className={styles.title}>Contact</h2>
            <div className={styles.cardContainer}>
                <a href="https://github.com/Darbyshire64" target="_blank" className={styles.contactCard}>
                    <span>💻</span>
                    <span>Github: Darbyshire64</span>
                </a>
                <a href="mailto:lawri@darbyshire.tech" target="_blank" className={styles.contactCard}>
                    <span>✉</span>
                    <span>Email: lawri@darbyshire.tech</span>
                </a>
            </div>
        </section>
    )
}

export default Contact;

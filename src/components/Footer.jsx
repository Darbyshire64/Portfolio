import styles from './Footer.module.css';

function Footer() {
    return (
        <section className={styles.Footer}>
            <p className={styles.FooterText}>© Lawri Darbyshire 2026 | All Rights Reserverd</p>
            <p className={styles.FooterText}> Images Property of there Respective Owners.</p>
            <p className={styles.FooterText}>This Site is protected via Cloudflare®</p>
        </section>        
    )
}

export default Footer;

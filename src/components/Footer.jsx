import styles from './Footer.module.css';

function Footer() {
    return (
        <section className={styles.Footer}>
            <p className={styles.FooterText}>© Lawri Darbyshire 2026 | All Rights Reserverd | Images Are Property of Respective Owners</p>
            <p className={styles.FooterText}>Analyitics are Collected in the intrest of site diagnostics.</p>
            <p className={styles.FooterText}>This Site is protected via Cloudflare® & CrowdSec</p>
        </section>        
    )
}

export default Footer;

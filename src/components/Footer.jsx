import styles from './Footer.module.css';

function Footer() {
    return (
        <section className={styles.Footer}>
            <p className={styles.FooterText}>© Lawri Darbyshire 2023-2025 | All Rights Reserverd</p>
            <p className={Styles.FooterText}>This Site is protected via Cloudflare®</p>
        </section>        
    )
}

export default Footer;
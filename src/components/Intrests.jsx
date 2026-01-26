import styles from './Intrests.module.css';

function Intrests() {
    return (
        <section id="Intrests" className={styles.intrest}>
            <h2 className={styles.title}>Intrests</h2>
            <div className={styles.cardContainer}>
                <p className={styles.intrestCard}>
                    <span>Computing & Electronics</span>
                
                </p>
                <p className={styles.intrestCard}>
                    <span>Stage Lighting</span>
                </p>
                <p className={styles.intrestCard}>
                    <span>Buisness & Politcs</span>
                </p>
                <p className={styles.intrestCard}>
                    <span>Trains & Signalling</span>
                </p>
                <p className={styles.intrestCard}>
                    <span>Areospace & Avioncs</span>
                </p>
            </div>
        </section>
    )
}

export default Intrests;
import styles from './Intrests.module.css';

function Intrests() {
    return (
        <section id="Intrests" className={styles.intrest}>
            <h2 className={styles.title}>Intrests</h2>
            <div className={styles.cardContainer}>
                <p className={styles.intrestCard}>
                    <span>Computing & Electronics</span>
                    <img width="200" height="100" src="https://assets.darbyshire.tech/portfolio/Computing.jpg" className={styles.cardImage}></img>
                </p>
                <p className={styles.intrestCard}>
                    <span>Stage Lighting</span>
                    <img width="200" height="100" src="https://assets.darbyshire.tech/portfolio/Lighting.jpg" className={styles.cardImage}></img>
                </p>
                <p className={styles.intrestCard}>
                    <span>Buisness & Politcs</span>
                    <img width="200" height="100" src="https://assets.darbyshire.tech/portfolio/Politics.jpg" className={styles.cardImage}></img>
                </p>
                <p className={styles.intrestCard}>
                    <span>Trains & Signalling</span>
                    <img width="200" height="100" src="https://assets.darbyshire.tech/portfolio/Trains.jpg" className={styles.cardImage}></img>
                </p>
                <p className={styles.intrestCard}>
                    <span>Areospace & Avioncs</span>
                    <img width="180" height="100" src="https://assets.darbyshire.tech/portfolio/Aviation.jpg" className={styles.cardImage}></img>
                </p>
            </div>
        </section>
    )
}

export default Intrests;
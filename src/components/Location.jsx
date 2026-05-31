import styles from './Location.module.scss';

const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Nazarbekyan%2025%2F5';

function Location() {
  return (
    <section className={styles.location}>
      <p className={styles.eyebrow}>Location</p>
      <h2>Արարողության վայրը</h2>

      <div className={styles.details}>
        <p className={styles.venue}>Աղաբաբյանս ռեստորան</p>
        <p className={styles.address}>Nazarbekyan 25/5</p>
        <p className={styles.time}>20 հունիսի, 2026 · 18:00</p>
      </div>

      <a className={styles.mapButton} href={mapUrl} target="_blank" rel="noreferrer">
        Բացել քարտեզը
      </a>
    </section>
  );
}

export default Location;

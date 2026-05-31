import coverPhoto from "../assets/images/dzerqer.JPG";
import styles from "./Cover.module.scss";

function Cover({ onOpen }) {
  return (
    <section className={styles.cover}>
      <img
        className={styles.background}
        src={coverPhoto}
        alt="Մայիս և Գոհար"
        loading="eager"
        decoding="async"
      />

      <div className={styles.content}>
        <p className={styles.kicker}>Նշանադրության հրավեր</p>
        <h1>Մայիս և Գոհար</h1>
        <p className={styles.date}>20.06.2026</p>
        <button className={styles.openButton} type="button" onClick={onOpen}>
          Բացել
        </button>
      </div>
    </section>
  );
}

export default Cover;

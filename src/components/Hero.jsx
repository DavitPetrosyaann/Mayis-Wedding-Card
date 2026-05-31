import heroImage from "../assets/images/IMG_8115.PNG";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageFrame}>
        <img
          src={heroImage}
          alt="Մայիս և Գոհար՝ սև հանդերձանքով"
          loading="lazy"
          decoding="async"
          style={{
            objectFit: "cover",
            objectPosition: "center top",
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <div className={styles.copy}>
        <p className={styles.eyebrow}>Սիրով հրավիրում ենք Ձեզ</p>
        <h1>Մայիս և Գոհար</h1>
        <p className={styles.subtitle}>նշանադրության արարողությանը</p>
      </div>
    </section>
  );
}

export default Hero;

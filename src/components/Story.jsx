import { motion } from "../lib/motion-fallback";
import storyOne from "../assets/images/IMG_3318.PNG";
import storyTwo from "../assets/images/IMG_3215.JPG";
import storyThree from "../assets/images/IMG_3534.JPG";
import styles from "./Story.module.scss";

const moments = [
  {
    src: storyOne,
    alt: "Մայիս և Գոհար՝ միասին",
    caption: "Սերը սկսվեց պարզ հայացքից ու դարձավ գեղեցիկ որոշում։",
  },
  {
    src: storyTwo,
    alt: "Մայիս և Գոհար՝ ջերմ պահ",
    caption: "Այս օրը ցանկանում ենք կիսել մեր ամենամոտ մարդկանց հետ։",
  },
  {
    src: storyThree,
    alt: "Մայիս և Գոհար՝ ծաղիկների մեջ",
    caption: "Սիրով լցված պահեր, որոնք մեզ բերել են այս գեղեցիկ ճանապարհին։",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.14,
      ease: "easeOut",
    },
  }),
};

function Story() {
  return (
    <section className={styles.story}>
      <p className={styles.eyebrow}>Love story</p>
      <h2>Մեր սիրո պատմությունը</h2>

      <div className={styles.grid}>
        {moments.map((moment, index) => (
          <motion.figure
            className={styles.card}
            key={moment.src}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={cardVariants}
          >
            <img
              src={moment.src}
              alt={moment.alt}
              loading="lazy"
              decoding="async"
            />
            <figcaption>{moment.caption}</figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

export default Story;

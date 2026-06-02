import { motion } from "../lib/motion-fallback";
import styles from "./SectionShell.module.scss";

function SectionShell({ children, eyebrow, title }) {
  return (
    <motion.section
      className={styles.section}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
    >
      {(eyebrow || title) && (
        <header className={styles.header}>
          {eyebrow && <p>{eyebrow}</p>}
          {title && <h2>{title}</h2>}
        </header>
      )}
      {children}
    </motion.section>
  );
}

export default SectionShell;

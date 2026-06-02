import { motion } from "../lib/motion-fallback";
import { eventDetails } from "../event.js";
import SectionShell from "./SectionShell.jsx";
import styles from "./LocationSection.module.scss";

function LocationSection() {
  return (
    <SectionShell title="Վայրը" eyebrow="Location">
      <div className={styles.location}>
        <h3>{eventDetails.location}</h3>
        <p>{eventDetails.address}</p>
        <motion.a
          href={eventDetails.mapUrl}
          target="_blank"
          rel="noreferrer"
          whileTap={{ scale: 0.98 }}
        >
          Տեսնել քարտեզի վրա
        </motion.a>
      </div>
    </SectionShell>
  );
}

export default LocationSection;

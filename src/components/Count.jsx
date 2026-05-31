import Countdown from "react-countdown";
import styles from "./Count.module.scss";

const targetDate = new Date("2026-06-20T17:30:00");

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <div className={styles.complete}>Սիրով սպասվում է</div>;
  }

  const units = [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Minutes" },
    { value: seconds, label: "Seconds" },
  ];

  return (
    <div className={styles.countdown}>
      {units.map((unit) => (
        <div className={styles.unit} key={unit.label}>
          <div className={styles.value}>
            {String(unit.value).padStart(2, "0")}
          </div>
          <div className={styles.label}>{unit.label}</div>
        </div>
      ))}
    </div>
  );
};

function Count() {
  return (
    <section className={styles.countSection}>
      <Countdown date={targetDate} renderer={renderer} />
    </section>
  );
}

export default Count;

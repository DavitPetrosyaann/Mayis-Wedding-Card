import styles from "./Calendar.module.scss";

const daysOfWeek = [
  "Երկ",
  "Երեք",
  "Չոր",
  "Հնգ",
  "Ուր",
  "Շաբ",
  "Կիր",
];
const daysInMonth = Array.from({ length: 30 }, (_, index) => index + 1);

function Calendar() {
  return (
    <section className={styles.calendar}>
      <div className={styles.header}>
        <p className={styles.monthLabel}>Հունիս 2026</p>
      </div>

      <div className={styles.grid}>
        {daysOfWeek.map((day) => (
          <div key={day} className={styles.weekday}>
            {day}
          </div>
        ))}

        {daysInMonth.map((day) => (
          <div
            key={day}
            className={`${styles.day} ${day === 20 ? styles.highlight : ""}`}
          >
            {day === 20 ? (
              <span className={styles.highlightContent}>
                <i className="fa fa-heart" aria-hidden="true" />
                <span>{day}</span>
              </span>
            ) : (
              day
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Calendar;

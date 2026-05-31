import { eventDetails } from '../event.js';
import SectionShell from './SectionShell.jsx';
import styles from './CalendarSection.module.scss';

const weekdays = ['Կիր', 'Երկ', 'Երք', 'Չրք', 'Հնգ', 'Ուրբ', 'Շբթ'];

function CalendarSection() {
  const { month, year, activeDay, days } = eventDetails.calendar;

  return (
    <SectionShell title="Օրը" eyebrow="Save the date">
      <div className={styles.calendar}>
        <div className={styles.calendarTop}>
          <span>{month}</span>
          <strong>{year}</strong>
        </div>
        <div className={styles.weekdays}>
          {weekdays.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
        <div className={styles.days}>
          {days.flat().map((day, index) => (
            <span
              className={day === activeDay ? styles.active : undefined}
              key={`${day}-${index}`}
            >
              {day}
            </span>
          ))}
        </div>
      </div>
      <p className={styles.note}>{eventDetails.calendarNote}</p>
    </SectionShell>
  );
}

export default CalendarSection;

import Countdown from 'react-countdown';
import { eventDetails } from '../event.js';
import SectionShell from './SectionShell.jsx';
import styles from './CountdownSection.module.scss';

const units = [
  ['days', 'Օր'],
  ['hours', 'Ժամ'],
  ['minutes', 'Րոպե'],
  ['seconds', 'Վրկ'],
];

function CountdownSection() {
  return (
    <SectionShell title="Սպասում ենք" eyebrow="Countdown">
      <Countdown
        date={eventDetails.date}
        renderer={({ days, hours, minutes, seconds, completed }) => {
          const values = { days, hours, minutes, seconds };

          if (completed) {
            return <p className={styles.complete}>Այսօր մեր գեղեցիկ օրն է</p>;
          }

          return (
            <div className={styles.countdown}>
              {units.map(([key, label]) => (
                <div className={styles.unit} key={key}>
                  <strong>{String(values[key]).padStart(2, '0')}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          );
        }}
      />
    </SectionShell>
  );
}

export default CountdownSection;

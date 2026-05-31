import { useState } from 'react';
import styles from './RSVP.module.scss';

const endpoint = 'https://formspree.io/f/mqkrvbwy';
const guestSides = ['Մայիսի կողմից', 'Գոհարի կողմից', 'Երկուսի'];

function RSVP() {
  const [name, setName] = useState('');
  const [side, setSide] = useState(guestSides[0]);
  const [status, setStatus] = useState('idle');

  const submitForm = async (event) => {
    event.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          side,
          _subject: 'Մայիս և Գոհար RSVP',
          owner_email: 'gog.xachatryan04@mail.ru',
        }),
      });

      if (!response.ok) {
        throw new Error('RSVP submission failed');
      }

      setName('');
      setSide(guestSides[0]);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className={styles.rsvp}>
      <p className={styles.eyebrow}>RSVP</p>
      <h2>Խնդրում ենք հաստատել</h2>

      <form className={styles.form} onSubmit={submitForm}>
        <label className={styles.field}>
          <span>Անուն, Ազգանուն</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Ձեր անունը"
            autoComplete="name"
            required
          />
        </label>

        <fieldset className={styles.radioGroup}>
          <legend>Ո՞ւմ կողմից եք</legend>
          {guestSides.map((option) => (
            <label key={option}>
              <input
                type="radio"
                name="side"
                value={option}
                checked={side === option}
                onChange={(event) => setSide(event.target.value)}
              />
              <span>{option}</span>
            </label>
          ))}
        </fieldset>

        <button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Ուղարկվում է...' : 'Հաստատել'}
        </button>

        {status === 'success' && (
          <p className={styles.success}>Շնորհակալություն։ Ձեր պատասխանը ուղարկվեց։</p>
        )}
        {status === 'error' && (
          <p className={styles.error}>Չհաջողվեց ուղարկել։ Խնդրում ենք փորձել կրկին։</p>
        )}
      </form>
    </section>
  );
}

export default RSVP;

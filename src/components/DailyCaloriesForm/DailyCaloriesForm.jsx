import React from 'react';
import styles from './DailyCaloriesForm.module.scss';

export function DailyCaloriesForm() {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>
          Розрахуйте добову норму калорій <br />
          прямо зараз
        </h1>
        <form className={styles.form}>
          <label>
            <input
              name="height"
              placeholder="Зріст *"
              type="text"
              className={styles.input}
            />
          </label>

          <label>
            <input name="age" placeholder="Вік *" className={styles.input} />
          </label>

          <label>
            <input
              name="weight"
              placeholder="Поточна вага *"
              className={styles.input}
            />
          </label>

          <label>
            <input
              id="desiredWeight"
              name="desiredWeight"
              type="text"
              placeholder="Бажана вага *"
              className={styles.input}
            />
          </label>

          <div id="bloodGroup" className={styles.label}>
            Група крові *
            <div
              role="group"
              aria-labelledby="bloodGroup"
              className={styles.radiogroup}
            >
              <label className={styles.label}>
                <input
                  type="radio"
                  name="bloodGroup"
                  value="1"
                  className={styles.radio}
                />
                1
              </label>
              <label className={styles.label}>
                <input
                  type="radio"
                  name="bloodGroup"
                  value="2"
                  className={styles.radio}
                />
                2
              </label>
              <label className={styles.label}>
                <input
                  type="radio"
                  name="bloodGroup"
                  value="3"
                  className={styles.radio}
                />
                3
              </label>
              <label className={styles.label}>
                <input
                  type="radio"
                  name="bloodGroup"
                  value="4"
                  className={styles.radio}
                />
                4
              </label>
            </div>
          </div>
          <button type="submit">Почніть худнути</button>
        </form>
      </div>
    </div>
  );
}

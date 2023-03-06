import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import styles from './MainPage.module.css';

export function HomePage() {
  return (
    <div className={styles.homePage}>
      <DailyCaloriesForm />
    </div>
  );
}

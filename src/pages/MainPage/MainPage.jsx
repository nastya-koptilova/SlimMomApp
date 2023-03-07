import Modal from 'components/Modal/Modal';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import styles from './MainPage.module.css';

function HomePage() {
  return (
    <div className={styles.homePage}>
      <DailyCaloriesForm />
      {/* <Modal /> */}
    </div>
  );
}
export default HomePage;

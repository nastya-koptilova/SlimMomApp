// import Modal from 'components/Modal/Modal';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import styles from './MainPage.module.css';

function HomePage() {
  return (
    <div className={styles.homePage}>
      <DailyCaloriesForm />
      <DiaryAddProductForm />

      {/* <Modal/> */}
    </div>
  );
}
export default HomePage;

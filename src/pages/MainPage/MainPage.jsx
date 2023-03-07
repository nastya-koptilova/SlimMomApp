import Modal from 'components/Modal/Modal';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import styles from './MainPage.module.css';
import {useState} from 'react';

function HomePage() {
const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className={styles.homePage}>
      <DailyCaloriesForm />
      <Modal />
    </div>
  );
}
export default HomePage;

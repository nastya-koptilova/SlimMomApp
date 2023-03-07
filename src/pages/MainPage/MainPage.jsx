import Modal from 'components/Modal/Modal';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import styles from './MainPage.module.css';
import {useState} from 'react';

// import { selectUser } from 'redux/dailyCalories/caloriesSelectors';

function HomePage() {  
const [isModalOpen, setIsModalOpen] = useState(false);

const handleModalOpen = () => {
    setIsModalOpen(true);
}

  return (
    <div className={styles.homePage}>
      <DailyCaloriesForm handleModalOpen={handleModalOpen}/>
      {isModalOpen &&  <Modal />}  
    </div>
  );
}
export default HomePage;

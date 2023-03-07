import Modal from 'components/Modal/Modal';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import styles from './MainPage.module.css';
import {useState} from 'react';

// import { selectUser } from 'redux/dailyCalories/caloriesSelectors';

function HomePage() {  
const [isModalOpen, setIsModalOpen] = useState(false);

const handleModalOpen = () => {
    setIsModalOpen(true);
}
const onClose = () => {
    setIsModalOpen(false);
}

  return (
    <div className={styles.homePage}>
      <DailyCaloriesForm handleModalOpen={handleModalOpen}/>
      {isModalOpen &&  <Modal onClose={onClose} />}  
    </div>
  );
}
export default HomePage;

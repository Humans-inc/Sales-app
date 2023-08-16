import './MainScreen.scss';

import Button from '../UI/Button/Button';
import Pagination from '../UI/Pagination/Pagination';

const MainScreen = ({onButtonClick}) => {
  return (
    <div className="main">
      <div className="main__author">Павел Шевченко</div>
      <div className="main__title">ПРОДАНО</div>
      <div className="main__subtitle">
        Путь селлера, или миллион на маркетплейсах
      </div>
      <Pagination
        length={[
          { number: 101, active: true },
          { number: 102, active: false },
        ]}
      />
      <Button addClass="main__button" onClick={onButtonClick}>
        Регистрация
      </Button>
    </div>
  );
};

export default MainScreen;

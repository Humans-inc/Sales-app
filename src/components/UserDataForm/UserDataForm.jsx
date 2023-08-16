import Pagination from '../UI/Pagination/Pagination';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

import './UserDataForm.scss';
const UserDataForm = ({ onFormButtonClick }) => {
  return (
    <div className="user-form">
      <div className="user-form__title">Анкета перед стартом</div>
      <Input placeholder="Имя" />
      <Input placeholder="Телефон" />
      <Input placeholder="Email" />
      <Input placeholder="Instagram" />
      <Input placeholder="Telegram" />
      <Pagination
        length={[
          { number: 101, active: false },
          { number: 102, active: true },
        ]}
      />
      <Button addClass="user-form__button" onClick={onFormButtonClick}>
        Открыть уроки
      </Button>
    </div>
  );
};

export default UserDataForm;

import Pagination from '../UI/Pagination/Pagination';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

import './UserDataForm.scss';
const UserDataForm = ({ onFormSubmit }) => {
  
  return (
    <form className="user-form" onSubmit={onFormSubmit}>
      <div className="user-form__title">Анкета перед стартом</div>
      <Input placeholder="Имя" name="user_name" />
      <Input placeholder="Телефон" name="user_phone" />
      <Input placeholder="Email" name="user_email" />
      <Input placeholder="Instagram" name="user_insta" />
      <Input placeholder="Telegram" name="user_telegram"/>
      <Pagination
        length={[
          { number: 101, active: false },
          { number: 102, active: true },
        ]}
      />
      <Button addClass="user-form__button" type="submit">
        Открыть уроки
      </Button>
    </form>
  );
};

export default UserDataForm;

import Pagination from '../UI/Pagination/Pagination';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

import './UserDataForm.scss';
const UserDataForm = ({ onFormSubmit, userName }) => {
  
  return (
    <form className="user-form" onSubmit={onFormSubmit}>
      <div className="user-form__title">Анкета перед стартом</div>
      <Input inputPlaceholder="Имя" name="user_name" />
      <Input inputPlaceholder="Телефон" name="user_phone" />
      <Input inputPlaceholder="Email" name="user_email" />
      <Input inputPlaceholder="Instagram" name="user_insta" />
      <Input
        inputPlaceholder="Telegram"
        name="user_telegram"
        value={userName}
      />
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

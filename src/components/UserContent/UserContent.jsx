import './UserContent.scss';

import VideoList from '../VideoList/VideoList';

const UserContent = () => {
  const list = [
    {
      id: 'myYDt7JTSWw',
      title: 'Бизнес на маркетплейсах',
      description: 'Глава 1. Будем знакомы!',
      number: '1',
    },
    {
      id: '2X5soNUUdqc',
      title: 'Инвестиции',
      description: 'Глава 3. Как стать селлером',
      number: '3',
    },
    {
      id: 'BgwOAYj1nq0',
      title: 'Кабинет WB',
      description: 'Глава 4. На старт. Внимание. Продано!',
      number: '4',
    },
    {
      id: 'J4BnZurn_BE',
      title: 'Как выбрать товар',
      description: 'Глава 5. Как подготовиться к продажам',
      number: '5',
    },
    {
      id: '-avncddH7Yk',
      title: 'Создание карточки',
      description: 'Глава 6. Создание карточки товара',
      number: '6',
    },
    {
      id: 'r40RENZPpSo',
      title: 'Личный бренд',
      description: 'Глава 7. Продвижение товара',
      number: '7',
    },
    {
      id: 'epGm3zIkM3M',
      title: 'Влияние окружения',
      description: 'Глава 8. Сила окружения',
      number: '8',
    },
  ];
  return (
    <div className="user-content">
      <div className="user-content__header">
        <div className="user-content__title">ПРОДАНО</div>
        <div className="user-content__author">Павел Шевченко</div>
      </div>
      <VideoList list={list} />
    </div>
  );
};

export default UserContent;

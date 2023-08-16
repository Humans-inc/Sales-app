import './UserContent.scss';

import VideoList from '../VideoList/VideoList';

const UserContent = () => {
  const list = [
    {
      id: 'myYDt7JTSWw',
      title: 'Бизнес на маркетплейсах',
      description: 'Глава 1. Будем знакомы!',
    },
    {
      id: '2X5soNUUdqc',
      title: 'Инвестиции',
      description: 'Глава 3. Как стать селлером',
    },
    {
      id: 'BgwOAYj1nq0',
      title: 'Кабинет WB',
      description: 'Глава 4. На старт. Внимание. Продано!',
    },
    {
      id: 'J4BnZurn_BE',
      title: 'Как правильно выбрать товар для продажи',
      description: 'Глава 5. Как подготовиться к продажам',
    },
    {
      id: 'r40RENZPpSo',
      title: 'Личный бренд',
      description: 'Глава 7. Продвижение товара',
    },
    {
      id: 'epGm3zIkM3M',
      title: 'Влияние окружения',
      description: 'Глава 8. Сила окружения',
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

import { useState, useEffect } from 'react';

import './App.scss';

import MainScreen from './components/MainScreen.jsx/MainScreen';
import UserDataForm from './components/UserDataForm/UserDataForm';
import UserContent from './components/UserContent/UserContent';

function App() {
  const [showMain, setShowMain] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const tg = window.Telegram.WebApp;
  tg.expand();

  useEffect(() => {
    const fetchData = async (init) => {
      const response = await fetch('https://hmns.in/prodano/public/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: init,
      });

      const data = await response.json();

      if (data.ok) {
        console.log({ registered: data.registered });
        if (data.registered) {
          setShowMain(false);
          setShowForm(false);
          setShowContent(true);
        } else {
          setShowMain(true);
        }
      }
    };
    fetchData(tg.initData);
  }, []);

  const handleShowMain = () => {
    setShowMain(false);
    setShowForm(true);
  };

  const handleForm = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    formData.append('user_tgid', tg.initDataUnsafe.user.id);

    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }

    if (
      e.target.user_name.value.length &&
      e.target.user_phone.value.length &&
      e.target.user_email.value.length &&
      e.target.user_insta.value.length
    ) {
      const response = await fetch('https://hmns.in/prodano/public/register', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      console.log(data);

      if (data.ok) {
        setShowMain(false);
        setShowForm(false);
        setShowContent(true);
      } else {
        alert('Что-то не так, попробуйте позже');
      }
    } else {
      alert('Заполните все поля');
    }
  };

  return (
    <>
      {showMain ? <MainScreen onButtonClick={handleShowMain} /> : ''}
      {showForm ? (
        <UserDataForm
          onFormSubmit={handleForm}
          userName={tg.initDataUnsafe.user.username}
        />
      ) : (
        ''
      )}
      {showContent ? <UserContent /> : ''}
    </>
  );
}

export default App;

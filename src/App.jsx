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
    setShowContent(true);
  };

  // const handleSendForm = (e) => {
  //   e.preventDefault();
  //   setShowForm(!showForm);
  //   setShowContent(!showContent);
  // };

  //const tg = window.Telegram.WebApp;

  // const checkData = async (init) => {
  //   try {
  //     const response = await fetch('https://hmns.in/prodano/public/check', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //       body: init,
  //     });

  //     const data = await response.json();

  //     if (data.ok) {
  //       if (data.registered) {
  //         setShowMain(false);
  //         setShowForm(false);
  //         setShowContent(true);
  //       } else {
  //         setShowMain(true);
  //       }
  //     }
  //   } catch (err) {
  //     alert('Ошибка ' + err.status + '\n' + err.statusText);
  //   }
  // };

  // checkData(tg.initData);


  const handleForm = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    formData.append('user_tgid', tg.initDataUnsafe.user.id);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

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

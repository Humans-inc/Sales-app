import { useState } from 'react';

import './App.scss';

import MainScreen from './components/MainScreen.jsx/MainScreen';
import UserDataForm from './components/UserDataForm/UserDataForm';
import UserContent from './components/UserContent/UserContent';


function App() {
  const [showMain, setShowMain] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleShowMain = () => {
    setShowMain(!showMain);
    setShowForm(!showForm);
  };

  const handleSendForm = () => {
    setShowForm(!showForm);
    setShowContent(!showContent);
  };

  return (
    <>
      {showMain ? <MainScreen onButtonClick={handleShowMain} /> : ''}
      {showForm ? <UserDataForm onFormButtonClick={handleSendForm} /> : ''}
      {showContent ? <UserContent /> : ''}
    </>
  );
}

export default App;

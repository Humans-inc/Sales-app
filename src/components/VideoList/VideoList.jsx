import { useState, useEffect } from 'react';

import VideoLink from '../VideoLink/VideoLink';
import Popup from '../Popup/Popup';

const VideoList = ({ list }) => {
  const tg = window.Telegram.WebApp;

  const [idVideo, setIdVideo] = useState('');
  const [openPopup, setOpenPopup] = useState(false);

  const [lessonNumber, setLessonNumber] = useState('');

  const getId = (id, lessonId) => {
    setIdVideo(id);
    setLessonNumber(lessonId);
    setOpenPopup(true);
  };

  const sendLessonId = async (lessonId) => {
    const formData = new FormData();
    formData.append('lesson_id', lessonId);
    formData.append('tgid', tg.initDataUnsafe.user.id);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    // const response = await fetch(
    //   'https://hmns.in/prodano/public/view-counter',
    //   {
    //     method: 'POST',
    //     body: formData,
    //   }
    // );

    // const data = await response.text();
    // console.log(data);
  };

  useEffect(() => {
    console.log(idVideo);
    sendLessonId(lessonNumber);
  }, [idVideo, openPopup, lessonNumber]);

  // setOpenPopup(!openPopup);
  // console.log({ id, idVideo, openPopup });

  return (
    <div>
      {!!list.length &&
        list.map((item, index) => (
          <VideoLink key={index} {...item} onClick={getId} />
        ))}
      <Popup id={idVideo} visible={openPopup} setVisible={setOpenPopup} />
    </div>
  );
};

export default VideoList;

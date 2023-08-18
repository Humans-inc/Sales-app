import { useState, useEffect } from 'react';

import VideoLink from '../VideoLink/VideoLink';
import Popup from '../Popup/Popup';

const VideoList = ({ list }) => {
  const tg = window.Telegram.WebApp;

  const [idVideo, setIdVideo] = useState('');
  const [openPopup, setOpenPopup] = useState(false);

  const getId = (id) => {
    setIdVideo(id);
    setOpenPopup(true);
  };

  // useEffect(() => {
  //   console.log(idVideo);
  // }, [idVideo, openPopup]);

  // setOpenPopup(!openPopup);
  // console.log({ id, idVideo, openPopup });

  return (
    <div>
      {!!list.length &&
        list.map((item, index) => (
          <VideoLink
            key={index}
            {...item}
            onClick={getId}
            tgId={tg.initDataUnsafe.user.id}
          />
        ))}
      <Popup id={idVideo} visible={openPopup} setVisible={setOpenPopup} />
    </div>
  );
};

export default VideoList;

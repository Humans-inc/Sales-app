import { useState, } from 'react';

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
      <a
        className="video-link"
        href="https://docs.google.com/forms/d/115vp-O4T-nFCj4uylPb-kTvrBERKxDZwe4uLSU2mLRA/edit">
        <div className="video-link__title">Доступ в MPSTATS</div>
        <div className="video-link__descr">
          Анкета для получения бесплатного доступа
        </div>
      </a>
      <Popup id={idVideo} visible={openPopup} setVisible={setOpenPopup} />
    </div>
  );
};

export default VideoList;

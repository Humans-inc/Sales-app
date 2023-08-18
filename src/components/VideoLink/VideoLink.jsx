import './VideoLink.scss';

const VideoLink = ({ id, title, description, onClick, number, tgId }) => {

  const sendLessonId = async (lessonId) => {
    const formData = new FormData();
    formData.append('lesson_id', lessonId);
    formData.append('tg_id', tgId);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    const response = await fetch(
      'https://hmns.in/prodano/public/view-counter',
      {
        method: 'POST',
        body: formData,
      }
    );

    const data = await response.text();
    console.log(data);
  };

  return (
    <div
      className="video-link"
      onClick={() => {
        onClick(id);
        sendLessonId(number);
      }}>
      <div className="video-link__title">{title}</div>
      <div className="video-link__descr">{description}</div>
    </div>
  );
};

export default VideoLink;

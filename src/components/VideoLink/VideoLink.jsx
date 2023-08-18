import './VideoLink.scss';

const VideoLink = ({ id, title, description, onClick, number }) => {

  return (
    <div className="video-link" onClick={() => onClick(id, number)}>
      <div className="video-link__title">{title}</div>
      <div className="video-link__descr">{description}</div>
    </div>
  );
};

export default VideoLink;

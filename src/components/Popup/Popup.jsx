import './Popup.scss';

const Popup = ({ id, visible, setVisible }) => {
  return (
    visible && (
      <div className="popup">
        <button className="popup__close" onClick={() => setVisible(false)}>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1L24.9999 24.9999"
              stroke="#D9D9D9"
              strokeLinecap="round"
            />
            <path
              d="M25 1L1.00006 24.9999"
              stroke="#D9D9D9"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="iframe-wrap-wrap">
          <div className="iframe-wrap">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${id}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen></iframe>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;

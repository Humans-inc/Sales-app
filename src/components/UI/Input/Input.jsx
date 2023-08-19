import './Input.scss';
const Input = ({ inputPlaceholder, ...props }) => {
  let isFull = false;
  if (inputPlaceholder === 'Telegram' && props.value && props.value.length) {
    isFull = true;
  }

  const handleBlur = (e) => {
    if(e.target.value.length) {
      e.target.classList.add('full');
    }
  }
  return (
    <div className="input-wrap">
      <div className="input-wrap__placeholder">{inputPlaceholder}</div>
      <input className={`input ${isFull ? 'full' : ''}`} {...props} onBlur={handleBlur}/>
    </div>
  );
};

export default Input;

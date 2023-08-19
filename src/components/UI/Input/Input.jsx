import './Input.scss';
const Input = ({ inputPlaceholder, ...props }) => {
  let isFull = false;
  if (inputPlaceholder === 'Telegram' && props.value && props.value.length) {
    isFull = true;
  }
  return (
    <div className="input-wrap">
      <div className="input-wrap__placeholder">{inputPlaceholder}</div>
      <input className={`input ${isFull ? 'full' : ''}`} {...props} />
    </div>
  );
};

export default Input;

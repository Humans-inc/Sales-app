import './Input.scss';
const Input = ({ inputPlaceholder, ...props }) => {
  return (
    <div className="input-wrap">
      <div className="input-wrap__placeholder">{inputPlaceholder}</div>
      <input
        className={`input ${inputPlaceholder === 'Telegram' ? 'full' : ''}`}
        {...props}        
      />
    </div>
  );
};

export default Input

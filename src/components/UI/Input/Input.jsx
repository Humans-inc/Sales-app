import './Input.scss';
const Input = ({ inputPlaceholder, name, value = '' }) => {
  return (
    <div className="input-wrap">
      <div className="input-wrap__placeholder">{inputPlaceholder}</div>
      <input className="input" name={name} value={value} />
    </div>
  );
};

export default Input

import './Input.scss';
const Input = (props) => {
  return (
    <div className="input-wrap">
      <div className="input-wrap__placeholder">{props.placeholder}</div>
      <input className="input" {...props} />
    </div>
  );
}

export default Input

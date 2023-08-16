import './Button.scss';

const Button = ({ children, addClass = '', onClick = null }) => {
  return <button className={`${addClass} button`} onClick={onClick}>{children}</button>;
};

export default Button;

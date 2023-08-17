import './Button.scss';

const Button = ({ children, addClass = '', onClick = null, type = 'button' }) => {
  return <button className={`${addClass} button`} onClick={onClick} type={type}>{children}</button>;
};

export default Button;

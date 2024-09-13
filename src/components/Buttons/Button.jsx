import './Button.scss'

import Icon from '../Icon';

const Button = ({
  iconFirst,
  firstWidth,
  firstHeight,
  className,
  text,
  iconSecond,
  secondWidth,
  secondHeight,
  classNameSecond,
  onClick }) => {
  return (
    <button className="btn" onClick={onClick} >

          {iconFirst && <Icon name={iconFirst} className={className} width={firstWidth} height={firstHeight} /> }
          <span>{text}</span>
          {iconSecond && <Icon className={classNameSecond} name={iconSecond} width={secondWidth} height={secondHeight} /> }

    </button>
  );
};

export default Button;
import sprite from './../../public/sprite.svg'; // Путь к спрайту

const Icon = ({ name, className, width, height }) => (
  <svg className={className} width={width} height={height}>
    <use href={`${sprite}#${name}`} />
  </svg>
);

export default Icon;

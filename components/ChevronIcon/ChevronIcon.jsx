import PropTypes from 'prop-types';
import classNames from '../../utils/classNames';
import styles from './ChevronIcon.module.css';

const ChevronIcon = ({
  color,
  type,
  className,
  onClick,
  width = 11,
  height = 24,
}) => {
  return (
    <i className={classNames(styles.container, className)} onClick={onClick}>
      <svg
        className={styles[type]}
        width={width}
        height={height}
        viewBox="0 0 12 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 17L3 9.5L10 2"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </i>
  );
};

ChevronIcon.propTypes = {
  color: PropTypes.string,
  type: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

ChevronIcon.defaultProps = {
  color: '#4e4d4d',
  type: 'up',
  className: '',
  onClick: () => {},
};

export default ChevronIcon;

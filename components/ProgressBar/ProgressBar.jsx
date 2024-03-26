import PropTypes from 'prop-types';
import styles from './ProgressBar.module.css';

/**
 * A progress bar that shows the progress of a task.
 * @param {number} status - A number between 0 and 1 that represents the progress of the bar.
 */
const ProgressBar = ({ status, color, withoutStatus }) => {
  const barWidth = status * 100;

  return (
    <div className={styles.container}>
      <div
        className={withoutStatus ? styles.withoutStatus : styles.progress}
        style={{ width: `${barWidth}%`, backgroundColor: `${color}` }}
      ></div>
    </div>
  );
};

ProgressBar.propTypes = {
  status: PropTypes.number.isRequired,
  color: PropTypes.string,
};

export default ProgressBar;

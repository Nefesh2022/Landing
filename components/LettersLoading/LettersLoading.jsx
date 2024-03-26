import styles from './LettersLoading.module.css';
import PropTypes from 'prop-types';

const LettersLoading = ({ text }) => {
  const letters = text.split('');

  return (
    <main className={styles.container}>
      {letters.map((letter, index) => (
        <span key={index} className={styles.letter} style={{ animationDelay: `${index * 0.1}s` }}>
          {letter}
        </span>
      ))}
    </main>
  );
};

LettersLoading.propTypes = {
  text: PropTypes.string
};

LettersLoading.defaultProps = {
  text: '',
};

export default LettersLoading;

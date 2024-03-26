import styles from './InputDate.module.css';
import { useState } from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import Img from 'components/Img';
import calendary from 'public/assets/icon-calendary.svg';
import classNames from 'utils/classNames';
import Calendar from '../Calendar';

const InputDate = ({
  label,
  required,
  errorMessage,
  errorMessageStyle,
  value,
  handleChange,
  className,
  name,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  const inputHandler = (e, index) => {
    const { name, value } = e.target;
    handleChange({
      target: { name: name, value: dayjs(value).format('YYYY-MM-DD') },
    });
  };

  const handleOpenCalendar = (e) => {
    e.stopPropagation;
    setOpen(!open);
  };

  return (
    <div className={styles.container}>
      <p className={styles.label}>
        {label}
        {required && <span className={styles.span}> *</span>}
      </p>
      <div
        className={classNames(styles.inputContainer, className)}
        onClick={handleOpenCalendar}
      >
        <input
          name="date"
          type="text"
          className={styles.input}
          value={dayjs(value).format('DD/MM/YYYY')}
          onChange={inputHandler}
          {...props}
          readOnly
        />
        <Img
          src={calendary}
          width={30}
          height={30}
          className={styles.calendaryImage}
          onClick={handleOpenCalendar}
          alt="calendary"
        />
      </div>
      {errorMessage && (
        <span className={classNames(styles.error, errorMessageStyle)}>
          {errorMessage}
        </span>
      )}
      {open && (
        <Calendar
          value={value}
          inputHandler={inputHandler}
          handleClose={() => setOpen(!open)}
          name={name}
          top="5rem"
          left="0rem"
        />
      )}
    </div>
  );
};

InputDate.defaultProps = {
  label: '',
  errorMessage: '',
  errorMessageStyle: '',
  value: '',
  handleChange: () => {},
};

InputDate.propTypes = {
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  errorMessageStyle: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default InputDate;

import { useState } from 'react';
import PropTypes from 'prop-types';
import Img from '../Img';
import cn from '@/utils/classNames';
import iconShown from '@/public/assets/icon-open-eye.svg';
import iconHidden from '@/public/assets/icon-closed-eye.svg';
import styles from './Input.module.css';

/** Styled reusable form's controlled Input component.
 * @warn Styles don't work properly on uncontrolled inputs.
 * You must explicitly provide value and handleChange props.
 */
const Input = ({ handleChange, className, label, errorMessage, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className={cn(
        label ? styles.labelContainer : '',
        styles[props.size],
        props.disabled ? styles.disabled : ''
      )}
    >
      <label>
        <div
          className={cn(
            styles.inputContainer,
            props.disabled ? styles.disabled : ''
          )}
        >
          {label && (
            <span
              className={cn(
                styles.label,
                !props.value && !props.placeholder ? styles.fakePlaceholder : ''
              )}
            >
              {label}
            </span>
          )}
          <input
            className={cn(
              styles.input,
              className,
              errorMessage && styles.errorBorder
            )}
            onChange={handleChange}
            {...props}
            type={
              props.type === 'password' && !showPassword ? 'password' : 'text'
            }
          />
          {props.type === 'password' && (
            <div
              className={styles.showPassword}
              onClick={() => setShowPassword(!showPassword)}
            >
              <Img
                src={showPassword ? iconShown : iconHidden}
                className={styles.faEye}
              />
            </div>
          )}
        </div>
      </label>
      {errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </div>
  );
};

Input.defaultProps = {
  handleChange: () => {},
  errorMessage: '',
  label: '',
  type: 'text',
};

Input.propTypes = {
  handleChange: PropTypes.func,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
};

export default Input;

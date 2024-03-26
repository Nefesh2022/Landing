import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'utils/classNames';
import styles from './Button.module.css';

const Button = ({
  children,
  handleClick,
  label,
  size,
  primary,
  className,
  disabled,
  isLoading,
  disabledLoading,
  typeLoading,
  ...props
}) => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setShowLoading(true);
    } else {
      setTimeout(() => {
        setShowLoading(false);
      }, 500);
    }
  }, [isLoading]);

  const handleAsyncClick = async () => {
    if (!disabledLoading) setShowLoading(true);
    await handleClick();
    setShowLoading(false);
  };

  const LoadingButton = () => {
    switch (typeLoading) {
      case 'span':
        return <SpinnerLoading />
      case 'text':
        return <LettersLoading text='cargando' />
      default:
        return <SpinnerLoading />
    }
  }

  return (
    <button
      className={classNames(
        styles.button,
        styles[size],
        styles[primary ? 'primary' : 'secondary'],
        className
      )}
      onClick={handleAsyncClick}
      disabled={showLoading || disabled}
      {...props}
    >
      {showLoading ? (
        <LoadingButton />
      ) : (
        children || label
      )}
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  label: PropTypes.string,
  size: PropTypes.oneOf(['', 'tiny', 'small', 'medium', 'large', 'xLarge']),
  className: PropTypes.string,
  primary: PropTypes.bool,
  isLoading: PropTypes.bool,
  disabledLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

Button.defaultProps = {
  handleClick: () => { },
  className: '',
  label: '',
  size: '',
  primary: true,
  disabled: false,
  isLoading: false,
  disabledLoading: false,
  children: null,
};

export default Button;

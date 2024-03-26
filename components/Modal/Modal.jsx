import Img from 'components/Img';
import styles from './Modal.module.css';
import close from 'public/assets/icon-close.svg';
import PropTypes from 'prop-types';

const Modal = ({ children, hide, hideCloseButton }) => {
  return (
    <div className={styles.container}>
      <div className={styles.children}>
        <div className={styles.headerClose}>
          {!hideCloseButton && (
            <Img
              src={close}
              width={30}
              height={30}
              alt="Cerrar"
              onClick={hide}
            />
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  hide: PropTypes.bool,
};

Modal.defaultProps = {
  children: <></>,
  hide: false,
};

export default Modal;

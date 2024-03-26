import Img from 'components/Img';
import styles from './WhatsAppButton.module.css';
import wpIcon from 'public/assets/icon-whatsapp.svg';

const WhatsAppButton = () => {
  const handleSubmit = () => {
    window.open(`https://wa.me/${2615450638}/?text=${'¡Hola! Estoy interesado/a en sus servicios de cortinas. ¿Podrían brindarme más información? Gracias.'}`);
  };

  return (
    <div
      className={styles.container}
    >
      <button className={styles.button} onClick={handleSubmit}>
        <Img
          alt="wpIcon"
          className={styles.wpShow}
          src={wpIcon}
          width={100}
          height={100}
        />
      </button>
    </div>
  );
};

export default WhatsAppButton;

import Img from 'components/Img';
import styles from './WhatsappContact.module.css';
import socIcon from 'public//assets/soc-icon.svg';
import greenIcon from 'public/assets/icon-conected-green.svg';
import triangle from 'public/assets/icon-triangleButton.svg';
import argentinianFlag from 'public/assets/flag-argentinian.svg';
import italianFlag from 'public/assets/flag-italian.svg';
import spanishFlag from 'public/assets/flag-spanish.svg';
import wpIcon from 'public/assets/icon-whatsapp.svg';
import useTracking from 'utils/tracking';
import { useTranslation } from 'react-i18next';

const citizenshipContact = {
  argentine: '1159461429',
  spanish: '1159461429',
  italian: '1159461429',
};

const WhatsappContact = ({ show }) => {

  return (
    <div className={show ? styles.windowContainer : styles.windowContainerHide}>
      <div className={show ? styles.header : styles.headerHide}>
        <div className={styles.imageContainer}>
          <Img
            className={styles.socIcon}
            src={socIcon}
            width={70}
            height={70}
            alt="socIcon"
          />
          <Img
            className={styles.greenIcon}
            src={greenIcon}
            width={15}
            height={15}
            alt="greenIcon"
          />
        </div>
        <div className={styles.textContainer}>
          <strong>{t('whatsAppContact.title')}</strong>
          <p>{t('whatsAppContact.subTitle')}</p>
        </div>
      </div>
      <div
        className={show ? styles.contactContainer : styles.contactContainerHide}
      >
        <div className={styles.contactButtonsContainer}>
          {citizenshipOptions.map((citizenship, index) => (
            <button
              onClick={track(`whatsapp-${citizenship.value}`, () =>
                handleSubmit(citizenship.value)
              )}
              className={styles.contactButton}
              key={citizenship.value}
            >
              <Img
                alt="triangle"
                className={styles.triangle}
                src={triangle}
                width={25}
                height={25}
              />
              <Img
                alt="flag"
                src={citizenshipFlag[citizenship.value]}
                width={25}
                height={25}
              />
              {citizenship.label}
            </button>
          ))}
        </div>
        <button
          onClick={track('whatsapp-chat', () =>
            window.open('https://wa.me/1159461429')
          )}
          className={styles.chatButton}
        >
          <Img alt="wp" src={wpIcon} width={30} height={30} />
          {t('whatsAppContact.chatButtons.chat')}
        </button>
      </div>
    </div>
  );
};

export default WhatsappContact;

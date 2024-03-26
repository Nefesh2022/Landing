import Img from 'components/Img';
import styles from './InfoCard.module.css';
import classNames from 'utils/classNames';

const InfoCard = ({ title, text, srcImage, className }) => {
  return (
    <div className={classNames(styles.info, className)}>
      <Img
        width={50}
        height={50}
        src={srcImage}
        className={styles.image}
        alt="chat"
      />
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.textContainer}>
        {
          Array.isArray(text)
            ? text.map(txt => (
              <p key={txt} className={styles.text}>{txt}</p>
            ))
            : <p className={styles.text}>{text}</p>
        }
      </div>
    </div>
  );
};

export default InfoCard;

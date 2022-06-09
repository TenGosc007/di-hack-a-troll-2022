import { RatingScale } from 'components/RatingScale';
import styles from './linkCard.module.scss';

export const LinkCard = ({ score, fakelink, categories, onClick }) => {
  return (
    <button className={styles.linkBase} onClick={onClick}>
      <p className={styles.text}>{fakelink}</p>
      <p className={styles.textcat}>{categories}</p>
      <RatingScale score={score} />
    </button>
  );
};

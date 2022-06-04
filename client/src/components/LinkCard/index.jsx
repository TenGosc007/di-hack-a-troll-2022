import { RatingScale } from 'components/RatingScale';
import styles from './linkCard.module.scss';

export const LinkCard = ({ score, fakelink, categories }) => {
  return (
    <div className={styles.linkBase}>
      <p>{fakelink}</p>
      <p>{categories}</p>
      <RatingScale score={score} />
    </div>
  );
};

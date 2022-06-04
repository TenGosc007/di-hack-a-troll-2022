import Rating from 'react-rating';
import styles from './ratingScale.module.scss';

import { ReactComponent as Angry } from 'assets/icons/angry.svg';
import { ReactComponent as Sad } from 'assets/icons/sad.svg';
import { ReactComponent as Neutral } from 'assets/icons/neutral.svg';
import { ReactComponent as Smile } from 'assets/icons/smile.svg';
import { ReactComponent as Happy } from 'assets/icons/happy.svg';

export const RatingScale = ({ score }) => {
  return (
    <Rating
      readonly
      className={styles.rating}
      stop={5}
      initialRating={score}
      emptySymbol={[
        <Angry className={styles.emptyIcon} />,
        <Sad className={styles.emptyIcon} />,
        <Neutral className={styles.emptyIcon} />,
        <Smile className={styles.emptyIcon} />,
        <Happy className={styles.emptyIcon} />,
      ]}
      fullSymbol={[
        <Angry className={styles.angry} />,
        <Sad className={styles.sad} />,
        <Neutral className={styles.neutral} />,
        <Smile className={styles.smile} />,
        <Happy className={styles.happy} />,
      ]}
    />
  );
};

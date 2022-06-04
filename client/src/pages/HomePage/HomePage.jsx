import { useTranslation } from 'react-i18next';

import styles from './homePage.module.scss';
import { Counter, Input, Btn } from 'components';

export const HomePage = () => {
  const { t } = useTranslation(['survey']);
  return (
    <main className={styles.home}>
      <Counter />
      <Input type="mail" placeholder={t`survey1.linkPlaceholder`} />
      <Btn children={t`survey1.culture`} outline />
      <Btn children={t`survey1.button`} />
    </main>
  );
};

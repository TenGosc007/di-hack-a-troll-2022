import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

import styles from './footer.module.scss';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = useMemo(() => moment().format('YYYY'), []);

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        {t`footer.paragraph`} &copy; {currentYear}
      </p>
    </footer>
  );
};

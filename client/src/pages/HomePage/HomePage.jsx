import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { paths } from '../../constants/paths';
import styles from './homePage.module.scss';
import { Btn } from 'components';
import graphic1 from '../../assets/images/1.png';
import graphic2 from '../../assets/images/2.png';
import graphic3 from '../../assets/images/3.png';
import blue from '../../assets/icons/arrow_blue.png';
import white from '../../assets/icons/arrow_white.png';

export const HomePage = () => {
  const { t } = useTranslation(['home']);
  const navigate = useNavigate();
  return (
    <main className={styles.home}>
      <section className={styles.container1}>
        <div className={styles.container1__grap}>
          <img src={graphic1}></img>
        </div>
        <div className={styles.container1__txt}>
          <div className={styles.container1__all}>
            <div className={styles.container1__head}>{t`home.header`}</div>
            <div className={styles.container1__headw}>{t`home.header!`}</div>
          </div>
          <div className={styles.container1__instrText}>{t`home.instruction.header`}</div>
          <div className={styles.container1__instr}>
            <div>{t`home.instruction.1`}</div>
            <div>{t`home.instruction.2`}</div>
            <div>{t`home.instruction.3`}</div>
          </div>
          <div className={styles.container1__btns}>
            <Btn children={t`home.button1`} onClick={() => navigate(paths.survey, { replace: true })} />
            <Btn children={t`home.button2`} onClick={() => navigate(paths.linksBase, { replace: true })} />
          </div>
        </div>
        <a href="#one">
          <div className={styles.arrowBlue}>
            <img src={blue}></img>
          </div>
        </a>
      </section>

      <section className={styles.container2} id="one">
        <div className={styles.container1__txt}>
          <div className={styles.container2__head}>{t`home.headerFake`}</div>
          <div className={styles.container2__txt}>{t`home.contentFake`}</div>
          <div className={styles.container2__head}>{t`home.headerEducation`}</div>
          <div className={styles.container2__txt}>{t`home.contentEducation`}</div>
        </div>
        <div className={styles.container1__grap}>
          <img src={graphic2}></img>
        </div>
        <a href="#two">
          <div className={styles.arrowWhite}>
            <img src={white}></img>
          </div>
        </a>
      </section>

      <section className={styles.container3} id="two">
        <div className={styles.container3__all}>
          <div className={styles.container1__grap}>
            <img src={graphic3}></img>
          </div>
          <div className={styles.container1__txt}>
            <div className={styles.container3__header}>{t`home.statHeader`}</div>
            <div className={styles.container3__txt}>{t`home.statContent`}</div>
            <Btn children={t`home.button3`} onClick={() => navigate(paths.linksBase, { replace: true })} />
          </div>
        </div>
        <div className={styles.container3__footer}>
          <div className={styles.container3__txtfoot}>{t`home.contactHeader`}</div>
          <a className={styles.container3__head} href="mailto:hack_a_troll@yahoo.com">{t`home.contactContent`}</a>
        </div>
      </section>
    </main>
  );
};

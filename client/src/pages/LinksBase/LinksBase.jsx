import { Input, Layout } from 'components';
import { LinkCard } from 'components/LinkCard';
import styles from './linksBase.module.scss';

export const LinksBase = () => {
  return (
    <Layout>
      <div className={styles.linksBase}>
        <h1>Baza podejrzanych artykułów:</h1>
        <div className={styles.inputs}>
          <Input search />
          <Input search />
        </div>
        <div className={styles.layout}>
          <p>Link</p>
          <p>Tagi</p>
          <p>Fejk</p>
        </div>
        <LinkCard score={3.5} fakelink={'www.facebook.com'} categories={'ŚWIAT, CELEBRYCI'} />
        <LinkCard score={5} fakelink={'www.facebook.com/DDDDDD'} categories={'ŚWIAT, CELEBRYCI'} />
        <LinkCard score={2.5} fakelink={'www.facebook.com/GGGG'} categories={'ŚWIAT, CELEBRYCI'} />
        <LinkCard score={1.5} fakelink={'www.facebook.com/VCE'} categories={'ŚWIAT, CELEBRYCI'} />
      </div>
    </Layout>
  );
};

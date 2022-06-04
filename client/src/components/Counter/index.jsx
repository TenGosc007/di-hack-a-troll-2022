import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import styles from './counter.module.scss';
import { decrement, increment, incrementByAmount, selectCount } from 'reduxStore/counter';
import { Button } from 'components/Button';

export const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [counterValue, setCounterValue] = useState('');
  const { t } = useTranslation();

  const onIncrement = () => dispatch(increment());
  const onDecrement = () => dispatch(decrement());
  const handleChange = ({ target: { value } }) => setCounterValue(value);
  const onAdd = () => +counterValue && dispatch(incrementByAmount(+counterValue));

  return (
    <article className={styles.counter}>
      <div className={styles.content}>
        <Button secondary onClick={onDecrement}>
          -
        </Button>
        <span>{count}</span>
        <Button onClick={onIncrement}>+</Button>
      </div>
      <div>
        <input type="number" placeholder="value" value={counterValue} onChange={handleChange} />
        <Button onClick={onAdd}>{t`counter.add`}</Button>
      </div>
    </article>
  );
};

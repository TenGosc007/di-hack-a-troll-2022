import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './input.module.scss';

export const Input = ({ className, ...rest }) => {
  const inputStyle = clsx(styles.input, className);

  return <input className={inputStyle} {...rest} />;
};

Input.propTypes = {
  className: PropTypes.string,
};

import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './input.module.scss';

export const Input = ({ className, search, ...rest }) => {
  const inputStyle = clsx(styles.input, className, { [styles.search]: search });

  return <input className={inputStyle} {...rest} />;
};

Input.propTypes = {
  className: PropTypes.string,
  search: PropTypes.bool,
};

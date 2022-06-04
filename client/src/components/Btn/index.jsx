import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './btn.module.scss';

export const Btn = ({ children, className, outline, ...rest }) => {
  const buttonStyle = clsx(styles.button, className, { [styles.outline]: outline });

  return (
    <button className={buttonStyle} {...rest}>
      {children}
    </button>
  );
};

Btn.defaultProps = {
  children: 'Button',
};

Btn.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  outline: PropTypes.bool,
};

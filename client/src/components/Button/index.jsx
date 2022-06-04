import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './button.module.scss';

export const Button = ({ children, className, secondary, ...rest }) => {
  const buttonStyle = clsx(styles.button, className, { [styles.secondary]: secondary });

  return (
    <button className={buttonStyle} {...rest}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: 'Button',
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  secondary: PropTypes.bool,
};

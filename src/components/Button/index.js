import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = forwardRef(
  (
    {
      primary,
      disabled,
      rounded,
      outlinePrimary,
      outlineBlack,
      outlineNone,
      small,
      large,
      to,
      href,
      children,
      className,
      leftIcon,
      rightIcon,
      onClick,
      ...passProps
    },
    ref,
  ) => {
    let Comp = 'button';

    const _props = {
      onClick,
      ...passProps,
    };

    if (disabled) {
      Object.keys(_props).forEach((key) => {
        if (key.startsWith('on') & (typeof _props[key] === 'function')) {
          delete _props[key];
        }
      });
    }

    if (to) {
      _props.to = to;
      Comp = Link;
    } else if (href) {
      _props.href = href;
      Comp = 'a';
    }

    const classes = cx('wrapper', {
      [className]: className,
      primary,
      disabled,
      'outline-primary': outlinePrimary,
      'outline-black': outlineBlack,
      'outline-none': outlineNone,
      rounded,
      small,
      large,
    });
    return (
      <Comp className={classes} {..._props} ref={ref}>
        {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
        <span className={cx('title')}>{children}</span>
        {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </Comp>
    );
  },
);

export default Button;

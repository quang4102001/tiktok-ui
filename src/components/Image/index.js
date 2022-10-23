import classNames from 'classnames';
import { useState, forwardRef } from 'react';

import images from '~/assests/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(customFallback);
  };

  // eslint-disable-next-line jsx-a11y/alt-text
  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      {...props}
      src={fallback || src}
      alt={alt}
      onError={handleError}
    />
  );
});

export default Image;

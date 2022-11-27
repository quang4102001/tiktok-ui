import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './ListBox.module.scss';

const cx = classNames.bind(styles);

function TagBoxItem({ className, data }) {
  return (
    <Link className={cx('tag-item', className)} to={`/tag/${data.text}`}>
      <span className={cx('tag-item__icon')}>{data.type}</span>
      <span className={cx('tag-item__text')}>{data.text}</span>
    </Link>
  );
}

TagBoxItem.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
};

export default TagBoxItem;

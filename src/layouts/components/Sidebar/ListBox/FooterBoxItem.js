import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './ListBox.module.scss';

const cx = classNames.bind(styles);

function FooterBoxItem({ className, data }) {
  return (
    <Link className={cx('footer-item', className)} to={data.to} target="_black">
      {data.text}
    </Link>
  );
}

FooterBoxItem.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
};

export default FooterBoxItem;

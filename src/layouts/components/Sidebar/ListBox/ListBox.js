import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './ListBox.module.scss';
import { TagBoxItem, FooterBoxItem } from '~/layouts/components/Sidebar/ListBox';

const cx = classNames.bind(styles);

function ListBox({ className, data, headerText, footerText }) {
  return (
    <div className={cx('wrapper', className)}>
      {headerText && <p className={cx('header-text')}>{headerText}</p>}
      <div className={cx('list')}>
        {headerText && data.map((data) => <TagBoxItem data={data} key={data.id} />)}
        {footerText && (
          <>
            {data.map((data) => (
              <FooterBoxItem data={data} key={data.id} />
            ))}
            <p className={cx('footer-more')}>Thêm</p>
            <p className={cx('footer-text')}>{footerText}</p>
          </>
        )}
      </div>
    </div>
  );
}

ListBox.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
  headerText: PropTypes.string,
  footerText: PropTypes.string,
};

export default ListBox;

import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './SidebarAccount.module.scss';
import SidebarAccountItem from './SidebarAccountItem';

const cx = classNames.bind(styles);

function SidebarAccountList({ className, showMore = 'Xem thêm', data, label = 'Tài khoản được đề xuất', headless }) {
  return (
    <div className={cx('wrapper', className)}>
      <p className={cx('text-header')}>{label}</p>
      <ul>
        {data.map((data) => (
          <SidebarAccountItem data={data} key={data.id} headless={headless} />
        ))}
      </ul>
      <p className={cx('show-more')}>{showMore}</p>
    </div>
  );
}

SidebarAccountList.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  showMore: PropTypes.string,
  data: PropTypes.array.isRequired,
  headless: PropTypes.bool,
};
export default SidebarAccountList;

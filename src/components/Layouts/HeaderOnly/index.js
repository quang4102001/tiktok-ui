import classNames from 'classnames/bind';
import styles from './HeaderOnly.module.scss';
import Header from '~/components/Layouts/components/Header';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;

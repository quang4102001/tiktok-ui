import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import styles from './Sidebar.module.scss';
import config from '~/config';
import { HomeIcon, UserIcon, CameraIcon } from '~/components/Icons';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

const data1 = [
  {
    nickname: 'hoaahanassii',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
    tick: true,
    full_name: 'Đào Lê Phương Hoa',
  },
  {
    nickname: 'hoaahanassii',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
    tick: true,
    full_name: 'Đào Lê Phương Hoa',
  },
  {
    nickname: 'hoaahanassii',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
    tick: true,
    full_name: 'Đào Lê Phương Hoa',
  },
  {
    nickname: 'hoaahanassii',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
    tick: true,
    full_name: 'Đào Lê Phương Hoa',
  },
  {
    nickname: 'hoaahanassii',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
    tick: true,
    full_name: 'Đào Lê Phương Hoa',
  },
];

const data2 = [
  {
    nickname: 'lebong95',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
    tick: false,
    full_name: 'Le Bong',
  },
  {
    nickname: 'lebong95',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
    tick: false,
    full_name: 'Le Bong',
  },
  {
    nickname: 'lebong95',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
    tick: false,
    full_name: 'Le Bong',
  },
  {
    nickname: 'lebong95',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
    tick: false,
    full_name: 'Le Bong',
  },
  {
    nickname: 'lebong95',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
    tick: false,
    full_name: 'Le Bong',
  },
  {
    nickname: 'lebong95',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
    tick: false,
    full_name: 'Le Bong',
  },
  {
    nickname: 'lebong95',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
    tick: false,
    full_name: 'Le Bong',
  },
  {
    nickname: 'lebong95',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
    tick: false,
    full_name: 'Le Bong',
  },
  {
    nickname: 'lebong95',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
    tick: false,
    full_name: 'Le Bong',
  },
  {
    nickname: 'lebong95',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
    tick: false,
    full_name: 'Le Bong',
  },
];

function Sidebar() {
  const [mainItemActive, setMainItemActive] = useState('home');

  const currentUser = true;

  return (
    <aside className={cx('sidebar')}>
      <div className={cx('main-container')}>
        <ul className={cx('main-container__list')}>
          <li
            className={cx('main-container__item', `${mainItemActive === 'home' ? 'active' : ''}`)}
            onClick={() => setMainItemActive('home')}
          >
            <Link to={config.routes.home}>
              <HomeIcon className={cx('main-item__icon')} height="3.2rem" width="3.2rem" />
              <h3 className={cx('main-item__text')}>Dành cho bạn</h3>
            </Link>
          </li>
          <li
            className={cx('main-container__item', `${mainItemActive === 'following' ? 'active' : ''}`)}
            onClick={() => setMainItemActive('following')}
          >
            <Link to={config.routes.following}>
              <UserIcon className={cx('main-item__icon')} height="3.2rem" width="3.2rem" />
              <h3 className={cx('main-item__text')}>Đang Follow</h3>
            </Link>
          </li>
          <li
            className={cx('main-container__item', `${mainItemActive === 'live' ? 'active' : ''}`)}
            onClick={() => setMainItemActive('live')}
          >
            <Link to={config.routes.live}>
              <CameraIcon className={cx('main-item__icon')} height="3.2rem" width="3.2rem" />
              <h3 className={cx('main-item__text')}>LIVE</h3>
            </Link>
          </li>
        </ul>
      </div>
      {!currentUser && (
        <div className={cx('main-container')}>
          <p className={cx('main-container__text-login')}>
            Đăng nhập để follow các tác giả, thích video và xem bình luận.
          </p>
          <Button outlinePrimary large onClick={() => alert('click')}>
            Đăng nhập
          </Button>
        </div>
      )}
      <div className={cx('main-container')}>
        <p className={cx('main-container__text-header')}>Tài khoản được đề xuất</p>
        <ul className={cx('main-container__user-list')}>
          {data1.map((data, index) => (
            <li className={cx('main-container__user-item')} key={index}>
              <AccountItem className={cx('main-container__user-item__box')} data={data} />
            </li>
          ))}
        </ul>
        <p className={cx('main-container__show-more')}>Xem tất cả</p>
      </div>
      <div className={cx('main-container')}>
        <p className={cx('main-container__text-header')}>Tài khoản được đề xuất</p>
        <ul className={cx('main-container__user-list')}>
          {data2.map((data, index) => (
            <li className={cx('main-container__user-item')} key={index}>
              <AccountItem className={cx('main-container__user-item__box')} data={data} />
            </li>
          ))}
        </ul>
        <p className={cx('main-container__show-more')}>Xem thêm</p>
      </div>
      <div className={cx('main-container')}></div>
      <div className={cx('main-container')}></div>
    </aside>
  );
}

export default Sidebar;

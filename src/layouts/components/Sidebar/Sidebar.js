import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import styles from './Sidebar.module.scss';
import config from '~/config';
import {
  HomeIconSolid,
  UserGroupIconSolid,
  LiveIconSolid,
  HomeIconRegular,
  UserGroupIconRegular,
  LiveIconRegular,
} from '~/components/Icons';
import AccountItem from '~/components/AccountItem';
import { Menu, MenuItem } from './Menu';

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
        <Menu>
          <MenuItem
            iconNonActive={<HomeIconRegular />}
            iconActive={<HomeIconSolid />}
            title="Dành cho bạn"
            to={config.routes.home}
          />
          <MenuItem
            iconNonActive={<UserGroupIconRegular />}
            iconActive={<UserGroupIconSolid />}
            title="Đang Follow"
            to={config.routes.following}
          />
          <MenuItem
            iconNonActive={<LiveIconRegular />}
            iconActive={<LiveIconSolid />}
            title="LIVE"
            to={config.routes.live}
          />
        </Menu>
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
    </aside>
  );
}

export default Sidebar;

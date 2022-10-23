import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './Slidebar.module.scss';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

function Slidebar() {
  const [mainItemActive, setMainItemActive] = useState('home');

  return (
    <aside className={cx('slidebar')}>
      <div className={cx('main-container')}>
        <ul className={cx('main-container__list')}>
          <li
            className={cx('main-container__item', `${mainItemActive === 'home' ? 'active' : ''}`)}
            onClick={() => setMainItemActive('home')}
          >
            <Link to={routesConfig.home}>
              <span className={cx('main-item__icon')}>
                <FontAwesomeIcon icon={faHouse} />
              </span>
              <h3 className={cx('main-item__text')}>Dành cho bạn</h3>
            </Link>
          </li>
          <li
            className={cx('main-container__item', `${mainItemActive === 'following' ? 'active' : ''}`)}
            onClick={() => setMainItemActive('following')}
          >
            <Link to={routesConfig.following}>
              <span className={cx('main-item__icon')}>
                <FontAwesomeIcon icon={faUserGroup} />
              </span>
              <h3 className={cx('main-item__text')}>Đang Follow</h3>
            </Link>
          </li>
          <li
            className={cx('main-container__item', `${mainItemActive === 'live' ? 'active' : ''}`)}
            onClick={() => setMainItemActive('live')}
          >
            <Link to={routesConfig.live}>
              <span className={cx('main-item__icon')}>
                <FontAwesomeIcon icon={faVideo} />
              </span>
              <h3 className={cx('main-item__text')}>Live</h3>
            </Link>
          </li>
        </ul>
      </div>
      <div className={cx('main-container')}>
        <p className={cx('main-container__text-login')}>
          Đăng nhập để follow các tác giả, thích video và xem bình luận.
        </p>
        <Button outlinePrimary large onClick={() => alert('click')}>
          Đăng nhập
        </Button>
      </div>
      <div className={cx('main-container')}></div>
      <div className={cx('main-container')}></div>
      <div className={cx('main-container')}></div>
      <div className={cx('main-container')}></div>
    </aside>
  );
}

export default Slidebar;

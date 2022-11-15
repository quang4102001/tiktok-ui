import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faEllipsisVertical,
  faEarthAsia,
  faUserTie,
  faCoins,
  faVideo,
  faGear,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { faCircleQuestion, faKeyboard, faUser } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import routesConfig from '~/config/routes';
import styles from './header.module.scss';
import images from '~/assests/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { MessageIcon, NotiIcon } from '~/components/Icons';
import Image from '~/components/Image';
import HeaderSearch from '~/layouts/components/HeaderSearch';
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    text: 'Tiếng Việt',
    children: {
      title: 'Ngôn ngữ',
      data: [
        {
          code: 'en',
          text: 'English',
          children: {
            title: 'English',
            data: [
              {
                code: 'ene',
                text: 'English(England)',
              },
              {
                code: 'enu',
                text: 'English(USA)',
              },
            ],
          },
        },
        {
          code: 'vi',
          text: 'Tiếng Việt',
        },
        {
          code: 'cn',
          text: 'Chinese',
        },
        {
          code: 'kr',
          text: 'Korean',
        },
        {
          code: 'jp',
          text: 'Japan',
        },
        {
          code: 'rs',
          text: 'Russian',
        },
        {
          code: 'gm',
          text: 'German',
        },
        {
          code: 'it',
          text: 'Italiano',
        },
        {
          code: 'id',
          text: 'Basa Jawa(Indonesia)',
        },
        {
          code: 'fl',
          text: 'Filipino',
        },
        {
          code: 'tl',
          text: 'Thailand',
        },
        {
          code: 'ls',
          text: 'Laos',
        },
        {
          code: 'cb',
          text: 'Cambodian',
        },
        {
          code: 'ml',
          text: 'Malaysian',
        },
        {
          code: 'vi',
          text: 'Tiếng Việt',
        },
        {
          code: 'cn',
          text: 'Chinese',
        },
        {
          code: 'kr',
          text: 'Korean',
        },
        {
          code: 'jp',
          text: 'Japan',
        },
        {
          code: 'rs',
          text: 'Russian',
        },
        {
          code: 'gm',
          text: 'German',
        },
        {
          code: 'it',
          text: 'Italiano',
        },
        {
          code: 'id',
          text: 'Basa Jawa(Indonesia)',
        },
        {
          code: 'fl',
          text: 'Filipino',
        },
        {
          code: 'tl',
          text: 'Thailand',
        },
        {
          code: 'ls',
          text: 'Laos',
        },
        {
          code: 'cb',
          text: 'Cambodian',
        },
        {
          code: 'ml',
          text: 'Malaysian',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    text: 'Phản hồi và trợ giúp',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    text: 'Phím tắt trên bàn phím',
  },
];

const cx = classNames.bind(styles);

function Header() {
  const currentUser = true;

  //handle logic
  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      text: 'Xem hồ sơ',
      to: routesConfig.info,
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      text: 'Nhận xu',
      to: routesConfig.coin,
    },
    {
      icon: <FontAwesomeIcon icon={faVideo} />,
      text: 'LIVE Studio',
      to: routesConfig.studio,
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      text: 'Cài đặt',
      to: routesConfig.setting,
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faRightFromBracket} />,
      text: 'Đăng xuất',
      to: routesConfig.logout,
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('header-logo')}>
          <Link to={routesConfig.home}>
            <img src={images.logo.default} alt="Tiktok" />
          </Link>
        </div>

        <HeaderSearch />

        <div className={cx('header-group-action')}>
          {currentUser ? (
            <>
              <Tippy content="Tải lên" placement="bottom">
                <Button outlineBlack leftIcon={<FontAwesomeIcon icon={faPlus} />} to={routesConfig.upload}>
                  Tải lên
                </Button>
              </Tippy>
              <Tippy content="Tin nhắn" placement="bottom">
                <button className={cx('action-send')}>
                  <MessageIcon className={cx('action-send-icon')} width="2.6rem" height="2.6rem" />
                </button>
              </Tippy>
              <Tippy content="Thông báo" placement="bottom">
                <button className={cx('action-noti')}>
                  <NotiIcon className={cx('action-noti-icon')} width="3.2rem" height="3.2rem" />
                  <span className={cx('action-noti-number')}>13</span>
                </button>
              </Tippy>
              <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                {currentUser ? (
                  <Image
                    className={cx('user-avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/a7ad69aa1cd6be080da40572317b3bca.jpeg?x-expires=1668340800&x-signature=HoENvo82u7PYKAQxY6l%2BJNnDx6E%3D"
                    alt="Quanglala"
                    fallback={images.fallback}
                  />
                ) : (
                  <button className={cx('action-avatar')}>
                    <FontAwesomeIcon icon={faUserTie} />
                  </button>
                )}
              </Menu>
            </>
          ) : (
            <>
              <Button outlineBlack leftIcon={<FontAwesomeIcon icon={faPlus} />} to={routesConfig.upload}>
                Tải lên
              </Button>
              <Button primary onClick={() => alert('click')}>
                Đăng nhập
              </Button>
              <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                <button className={cx('more-btn')}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </Menu>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

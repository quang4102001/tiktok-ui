import classNames from 'classnames/bind';

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
  NumberIcon,
  MusicIcon,
} from '~/components/Icons';
import { MenuSidebar, MenuSidebarItem } from './MenuSidebar';
import { SidebarAccountList } from '~/layouts/components/Sidebar/SidebarAccount';
import { ListBox } from '~/layouts/components/Sidebar/ListBox';

const cx = classNames.bind(styles);

const data1 = [
  {
    id: 1,
    nickname: 'hoaahanassii',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
    tick: true,
    full_name: 'Đào Lê Phương Hoa',
    follower: '10M',
    like: '342.3M',
  },
  {
    id: 2,
    nickname: 'hoaahanassii',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
    tick: true,
    full_name: 'Đào Lê Phương Hoa',
    follower: '10M',
    like: '342.3M',
  },
  {
    id: 3,
    nickname: 'hoaahanassii',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
    tick: true,
    full_name: 'Đào Lê Phương Hoa',
    follower: '10M',
    like: '342.3M',
  },
  {
    id: 4,
    nickname: 'hoaahanassii',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
    tick: true,
    full_name: 'Đào Lê Phương Hoa',
    follower: '10M',
    like: '342.3M',
  },
  {
    id: 5,
    nickname: 'hoaahanassii',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg',
    tick: true,
    full_name: 'Đào Lê Phương Hoa',
    follower: '10M',
    like: '342.3M',
  },
];

const data2 = [
  {
    id: 1,
    nickname: 'lebong95',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
    tick: false,
    full_name: 'Le Bong',
  },
  {
    id: 2,
    nickname: 'lebong95',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
    tick: false,
    full_name: 'Le Bong',
  },
  {
    id: 3,
    nickname: 'lebong95',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
    tick: false,
    full_name: 'Le Bong',
  },
  {
    id: 4,
    nickname: 'lebong95',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
    tick: false,
    full_name: 'Le Bong',
  },
  {
    id: 5,
    nickname: 'lebong95',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
    tick: false,
    full_name: 'Le Bong',
  },
  {
    id: 6,
    nickname: 'lebong95',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
    tick: false,
    full_name: 'Le Bong',
  },
  {
    id: 7,
    nickname: 'lebong95',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
    tick: false,
    full_name: 'Le Bong',
  },
  {
    id: 8,
    nickname: 'lebong95',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
    tick: false,
    full_name: 'Le Bong',
  },
  {
    id: 9,
    nickname: 'lebong95',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
    tick: false,
    full_name: 'Le Bong',
  },
  {
    id: 10,
    nickname: 'lebong95',
    avatar: 'https://files.fullstack.edu.vn/f8-tiktok/users/4/627395c8ec990.jpg',
    tick: false,
    full_name: 'Le Bong',
  },
];

const data3 = [
  {
    id: 1,
    type: <NumberIcon />,
    text: 'suthatla',
    to: '/suthatla',
  },
  {
    id: 2,
    type: <NumberIcon />,
    text: 'mackedoi',
    to: '/mackedoi',
  },
  {
    id: 3,
    type: <NumberIcon />,
    text: 'sansangthaydoi',
    to: '/sansangthaydoi',
  },
  {
    id: 4,
    type: <MusicIcon />,
    text: 'Yêu Đơn Phương Là Gì (MEE Remix) - MEE Meida & h0n',
    to: '/Yêu Đơn Phương Là Gì (MEE Remix) - MEE Meida & h0n',
  },
  {
    id: 5,
    type: <MusicIcon />,
    text: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng',
    to: '/Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng',
  },
  {
    id: 6,
    type: <MusicIcon />,
    text: 'Thiên Thần Tình Yêu - RICKY STAR',
    to: '/Thiên Thần Tình Yêu - RICKY STAR',
  },
  {
    id: 7,
    type: <NumberIcon />,
    text: '7749hieuung',
    to: '/7749hieuung',
  },
  {
    id: 8,
    type: <NumberIcon />,
    text: 'genzlife',
    to: '/genzlife',
  },
  {
    id: 9,
    type: <MusicIcon />,
    text: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn',
    to: '/Tình Đã Đầy Một Tim - Huyền Tâm Môn',
  },
  {
    id: 10,
    type: <MusicIcon />,
    text: 'Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham',
    to: '/Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham',
  },
];

const data4 = [
  {
    id: 1,
    text: 'Giới thiệu',
    to: '/about',
  },
  {
    id: 2,
    text: 'Bảng tin',
    to: '/news',
  },
  {
    id: 3,
    text: 'Liên hệ',
    to: '/contact',
  },
  {
    id: 4,
    text: 'Sự nghiệp',
    to: '/career',
  },
  {
    id: 5,
    text: 'ByteDance',
    to: '/bytedance',
  },
  {
    id: 6,
    text: 'TikTok for Good',
    to: '/forgood',
  },
  {
    id: 7,
    text: 'Quảng cáo',
    to: '/business',
  },
  {
    id: 8,
    text: 'Developers',
    to: '/developers',
  },
  {
    id: 9,
    text: 'Transparency',
    to: '/transparency',
  },
  {
    id: 10,
    text: 'TikTok Rewards',
    to: '/tiktok-rewards',
  },
  {
    id: 11,
    text: 'TikTok Browse',
    to: '/browse',
  },
  {
    id: 12,
    text: 'TikTok Embeds',
    to: '/embed',
  },
  {
    id: 13,
    text: 'Trợ giúp',
    to: '/support',
  },
  {
    id: 14,
    text: 'An toàn',
    to: '/safety',
  },
  {
    id: 15,
    text: 'Điều khoản',
    to: '/legal',
  },
  {
    id: 16,
    text: 'Quyền riêng tư',
    to: '/legal',
  },
  {
    id: 17,
    text: 'Creator Portal',
    to: '/creator',
  },
  {
    id: 18,
    text: 'Hướng dẫn cộng đồng',
    to: '/community-guidelines',
  },
];

function Sidebar() {
  const currentUser = true;

  return (
    <aside className={cx('sidebar')}>
      {/* menu */}
      <div className={cx('main-container')}>
        <MenuSidebar>
          <MenuSidebarItem
            iconNonActive={<HomeIconRegular />}
            iconActive={<HomeIconSolid />}
            title="Dành cho bạn"
            to={config.routes.home}
          />
          <MenuSidebarItem
            iconNonActive={<UserGroupIconRegular />}
            iconActive={<UserGroupIconSolid />}
            title="Đang Follow"
            to={config.routes.following}
          />
          <MenuSidebarItem
            iconNonActive={<LiveIconRegular />}
            iconActive={<LiveIconSolid />}
            title="LIVE"
            to={config.routes.live}
          />
        </MenuSidebar>
      </div>

      {/* login */}
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

      {/* suggest account */}
      <div className={cx('main-container')}>
        <SidebarAccountList
          className={cx('main-container__user-recommended')}
          label="Tài khoản được đề xuất"
          showMore="Xem tất cả"
          data={data1}
          headless
        />
      </div>

      {/* following account */}
      {currentUser && (
        <div className={cx('main-container')}>
          <SidebarAccountList
            className={cx('main-container__user-follow')}
            label="Các tài khoản đang follow"
            showMore="Xem thêm"
            data={data2}
          />
        </div>
      )}

      {/* list tag */}
      <div className={cx('main-container')}>
        <ListBox className={cx('tag-list')} data={data3} headerText="Khám phá" />
      </div>

      {/* footer sidebar */}
      <div className={cx('main-container')}>
        <ListBox className={cx('footer-list')} data={data4} footerText="© 2022 TikTok" />
      </div>
    </aside>
  );
}

export default Sidebar;

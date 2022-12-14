import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './MenuSidebar.module.scss';

const cx = classNames.bind(styles);

function MenuSidebarItem({ iconActive, iconNonActive, title, to }) {
  return (
    <NavLink to={to} className={(nav) => cx('menu-item', { active: nav.isActive })} end>
      <span className={cx('menu-item__icon-active')}>{iconActive}</span>
      <span className={cx('menu-item__icon-non-active')}>{iconNonActive}</span>
      <h3 className={cx('menu-item__text')}>{title}</h3>
    </NavLink>
  );
}
MenuSidebarItem.propTypes = {
  iconActive: PropTypes.node.isRequired,
  iconNonActive: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
export default MenuSidebarItem;

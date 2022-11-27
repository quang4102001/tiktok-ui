import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './MenuSidebar.module.scss';

const cx = classNames.bind(styles);

function MenuSidebar({ children }) {
  return <nav className={cx('menu')}> {children} </nav>;
}

MenuSidebar.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MenuSidebar;

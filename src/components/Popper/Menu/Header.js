import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
  return (
    <header className={cx('header')} onClick={onBack}>
      <button className={cx('back-btn')}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <p className={cx('header-title')}>{title}</p>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  onBack: PropTypes.func,
};

export default Header;

import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  const handleBackMenu = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
    console.log(history.length);
    if (history.length <= 2) {
    }
  };

  const handleResetMenu = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  const renderResult = (attrs) => (
    <div className={cx('menu__box')} tabIndex="-1" {...attrs}>
      <PopperWrapper className={cx('menu__list')}>
        {history.length > 1 && <Header title={current.title} onBack={handleBackMenu} />}
        <div className={cx('menu__list-croll')}>{renderItems()}</div>
      </PopperWrapper>
    </div>
  );

  return (
    <Tippy
      hideOnClick={hideOnClick}
      delay={[0, 700]}
      placement="bottom-end"
      interactive
      render={renderResult}
      onHide={handleResetMenu}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;

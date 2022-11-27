import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';

import styles from './SidebarAccount.module.scss';
import Image from '~/components/Image';
import AccountPreview from '~/components/AccountPreview';

const cx = classNames.bind(styles);

function SidebarAccountItem({ data, className, headless = false }) {
  const renderPreview = (attrs) => (
    <div className={cx('preview')} tabIndex="-1" {...attrs}>
      <AccountPreview data={data} />
    </div>
  );

  if (headless)
    return (
      <li>
        <Tippy
          popperOptions={{ modifiers: [{ name: 'flip', enabled: false }] }}
          delay={[800, 0]}
          offset={[-100, 0]}
          placement={'bottom'}
          interactive
          render={renderPreview}
        >
          <Link to={`/@${data.nickname}`} className={cx('user-item', className)}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
            <div className={cx('user-container')}>
              <span className={cx('user__id-box')}>
                <h4 className={cx('user__id')}>{data.nickname}</h4>
                <span className={cx('user__check-icon')}>{data.tick && <FontAwesomeIcon icon={faCircleCheck} />}</span>
              </span>
              <span className={cx('user__name')}>{data.full_name}</span>
            </div>
          </Link>
        </Tippy>
      </li>
    );

  return (
    <li>
      <Link to={`/@${data.nickname}`} className={cx('user-item', className)}>
        <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
        <div className={cx('user-container')}>
          <span className={cx('user__id-box')}>
            <h4 className={cx('user__id')}>{data.nickname}</h4>
            <span className={cx('user__check-icon')}>{data.tick && <FontAwesomeIcon icon={faCircleCheck} />}</span>
          </span>
          <span className={cx('user__name')}>{data.full_name}</span>
        </div>
      </Link>
    </li>
  );
}

SidebarAccountItem.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string,
  headless: PropTypes.bool,
};
export default SidebarAccountItem;

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem({ data = {} }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
      <div className={cx('user-container')}>
        <span className={cx('user__id-box')}>
          <h4 className={cx('user__id')}>{data.nickname}</h4>
          <span className={cx('user__check-icon')}>{data.tick && <FontAwesomeIcon icon={faCircleCheck} />}</span>
        </span>
        <span className={cx('user__name')}>{data.full_name}</span>
      </div>
    </Link>
  );
}

export default AccountItem;
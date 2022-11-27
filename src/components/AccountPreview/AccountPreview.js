import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import { Wrapper } from '~/components/Popper';
import styles from './AccountPreview.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
  return (
    <div className={cx('wrapper')}>
      <Wrapper className={cx('account-container')}>
        <div className={cx('box-avatar-btn')}>
          <Link to={`/@${data.nickname}`}>
            <Image className={cx('box-avatar-btn__avatar')} src={data.avatar} alt={data.nickname} />
          </Link>
          <Button primary small className={cx('box-avatar-btn__btn')}>
            Follow
          </Button>
        </div>
        <div className={cx('box-info')}>
          <Link to={`/@${data.nickname}`} className={cx('box-info__nick-name-container')}>
            <span className={cx('box-info__nick-name__id')}>{data.nickname}</span>
            <span className={cx('box-info__nick-name__check-icon')}>
              {data.tick && <FontAwesomeIcon icon={faCircleCheck} />}
            </span>
          </Link>
          <Link to={`/@${data.nickname}`} className={cx('box-info__full-name')}>
            {data.full_name}
          </Link>
          <span className={cx('box-info__container')}>
            <span className={cx('box-info__follower')}>
              {data.follower}
              <span>Follower</span>
            </span>
            <span className={cx('box-info__like')}>
              {data.like}
              <span>Thích</span>
            </span>
          </span>
        </div>
      </Wrapper>
    </div>
  );
}

export default AccountPreview;

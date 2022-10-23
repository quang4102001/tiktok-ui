import Headless from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import * as searchServices from '~/apiServices/searchServices';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './HeaderSearch.module.scss';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function HeaderSearch() {
  const [searchStr, setSearchStr] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();
  const groupInputRef = useRef();

  const debounce = useDebounce(searchStr, 800);

  //Xử lý khi click vào input thì group-input sẽ có border
  useEffect(() => {
    if (groupInputRef.current) {
      if (showResult) {
        groupInputRef.current.style.borderColor = '#ccc';
      } else {
        groupInputRef.current.style.borderColor = 'transparent';
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showResult]);

  //Xử lý khi nhập vào input sẽ gửi request lên server và nhận về dữ liệu, có icon loading và icon time
  useEffect(() => {
    if (!debounce) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);
      try {
        const res = await searchServices.search(debounce);

        setSearchResult(res);
        setTimeout(() => setLoading(false), 500);
      } catch (err) {
        setTimeout(() => setLoading(false), 500);
      }
    };

    fetchApi();
  }, [debounce]);

  //Không cho người dùng nhập khoảng trắng vào đầu input
  const handleChangeInput = (e) => {
    const searchValue = e.target.value;
    if (searchValue.startsWith(' ')) {
      searchValue.trim();
    }
    setSearchStr(searchValue);
  };

  return (
    <div className={cx('header-search')}>
      <Headless
        visible={!!searchResult.length & showResult}
        interactive
        render={(attrs) => (
          <div className={cx('search__result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <ul className={cx('search__result__list')}>
                <li className={cx('search__result__item')}>
                  <SearchIcon height="1.4rem" width="1.4rem" />
                  <span>{searchStr} đi học</span>
                </li>
                <li className={cx('search__result__item')}>
                  <SearchIcon height="1.4rem" width="1.4rem" />
                  <span>{searchStr} đi chơi</span>
                </li>
                <li className={cx('search__result__item')}>
                  <SearchIcon height="1.4rem" width="1.4rem" />
                  <span>{searchStr} đi ngủ</span>
                </li>
                <li className={cx('search__result__item')}>
                  <SearchIcon height="1.4rem" width="1.4rem" />
                  <span>{searchStr} đi ăn</span>
                </li>
                <li className={cx('search__result__item')}>
                  <SearchIcon height="1.4rem" width="1.4rem" />
                  <span>{searchStr} đi học</span>
                </li>
                <li className={cx('search__result__item')}>
                  <SearchIcon height="1.4rem" width="1.4rem" />
                  <span>{searchStr} đi chơi</span>
                </li>
                <li className={cx('search__result__item')}>
                  <SearchIcon height="1.4rem" width="1.4rem" />
                  <span>{searchStr} đi ngủ</span>
                </li>
                <li className={cx('search__result__item')}>
                  <SearchIcon height="1.4rem" width="1.4rem" />
                  <span>{searchStr} đi ăn</span>
                </li>
              </ul>
              <p className={cx('search__result__user-header')}>Tài khoản</p>
              <ul className={cx('search__result__user__list')}>
                {searchResult.map((result) => (
                  <li className={cx('search__result__user__item')} key={result.id}>
                    <AccountItem data={result} />
                  </li>
                ))}
                <li className={cx('search__result__user__item')}>
                  <span>
                    <span className={cx('search__result__more')}>{`Xem tất cả kết quả dành cho "${searchStr}"`}</span>
                  </span>
                </li>
              </ul>
            </PopperWrapper>
          </div>
        )}
        onClickOutside={() => setShowResult(false)}
      >
        <div className={cx('group-input')} ref={groupInputRef}>
          <input
            ref={inputRef}
            className={cx('input-search')}
            type="text"
            placeholder="Tìm kiếm tài khoản và video"
            spellCheck={false}
            value={searchStr}
            onChange={handleChangeInput}
            onFocus={(e) => setShowResult(true)}
            onBlur={() => setShowResult(false)}
          />
          {!!searchStr && !loading && (
            <span
              className={cx('search__clear')}
              onClick={() => {
                setSearchStr('');
                setSearchResult([]);
                inputRef.current.focus();
              }}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </span>
          )}

          {loading && (
            <span className={cx('search__loading')}>
              <FontAwesomeIcon icon={faSpinner} />
            </span>
          )}
          <span className={cx('search__line')}></span>

          <button className={cx('search__btn')}>
            <SearchIcon height="2rem" width="2rem" />
          </button>
        </div>
      </Headless>
    </div>
  );
}

export default HeaderSearch;

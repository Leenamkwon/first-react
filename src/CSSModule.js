import React from 'react';
import styles from './CSSModule.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CSSModule = () => {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요, 저는 <span className="something">CSS module!</span>
    </div>
  );
};

export default CSSModule;

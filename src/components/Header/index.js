import React from 'react';

import Github from '../../assets/images/github.svg';
import Twitter from '../../assets/images/twitter.svg';
import LinkedIn from '../../assets/images/linkedin.svg';

import styles from './style.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <a
        className={styles.link}
        rel="noreferrer"
        target="_blank"
        href="https://github.com/whitecrownclown"
      >
        <Github />
      </a>
      <a
        className={styles.link}
        rel="noreferrer"
        target="_blank"
        href="https://twitter.com/DanielCCAndrei"
      >
        <Twitter />
      </a>
      <a
        className={styles.link}
        rel="noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/daniel-andrei-367946103/"
      >
        <LinkedIn />
      </a>
    </div>
  );
}

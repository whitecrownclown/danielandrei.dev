import React from 'react';
import Github from '../../assets/images/github.svg';
import Twitter from '../../assets/images/twitter.svg';
import LinkedIn from '../../assets/images/linkedin.svg';
import './style.scss';

export default function Footer() {
  return (
    <div className="footer">
      <span>Follow me on&nbsp;</span>
      <a className="link" href="https://github.com/whitecrownclown">
        <Github />
      </a>
      <a className="link" href="https://twitter.com/DanielCCAndrei">
        <Twitter />
      </a>
      <a className="link" href="https://www.linkedin.com/in/daniel-andrei-367946103/">
        <LinkedIn />
      </a>
    </div>
  );
}

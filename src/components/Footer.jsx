import React from 'react';
import styles from './style/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        © 2024 Bojack Horseman | Created with by <b>Muhammad Firdous</b>
      </p>
      <p>
        Check out more on{' '}
        <a href="https://www.marvel.com" target="_blank" rel="noopener noreferrer">
          BojacK Horseman Official Page
        </a>
      </p>
    </footer>
  );
};

export default Footer;
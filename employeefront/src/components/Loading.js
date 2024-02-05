import React from 'react';
import styles from './Loading.module.css';
import logo from './logo.svg'; 

function Loading() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
      <img src={logo} alt="Logo" className={styles.logo} height={60}/>
        <div className={styles.loader}>
          
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}

export default Loading;

import React from 'react';
import styles from './productInfo.module.css';


export const ProductInfo = ({ item }) => {
  return (
      <div className={styles["main-content"]}>
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div className={styles["description"]}>{item.descriptionFull}</div>
        <div className={styles["highlight-window mobile"]}>
          <div className={styles["highlight-overlay"]}>
          </div>
        </div>
        <div className={styles["divider"]}></div>
        <div className={styles["purchase-info"]}>
          <div className={styles["price"]}>{item.currency}{item.price}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
  )
}


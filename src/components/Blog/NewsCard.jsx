// NewsCard.jsx
import React from 'react';
import styles from './NewsCard.module.css';

const NewsCard = ({ news }) => {
  return (
    <div className={styles.newsCard}>
      <img src={news.image} alt={news.title} className={styles.newsImage} />
      <div className={styles.newsContent}>
        <p className={styles.newsMeta}>
          <span className={styles.newsCategory}>{news.category}</span> | <span className={styles.newsDate}>{news.date}</span>
        </p>
        <h3 className={styles.newsTitle}>{news.title}</h3>
        <div className={styles.newsAuthor}>
          <img src={news.author.image} alt={news.author.name} className={styles.authorImage} />
          <span className={styles.authorName}>{news.author.name}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

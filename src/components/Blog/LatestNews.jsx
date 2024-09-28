// LatestNews.jsx
import React from 'react';
import styles from './LatestNews.module.css'; // Import styles using CSS Modules
import NewsCard from './NewsCard';
import BlogImage from '../../assets/Blog/blog_image.png';
import BlogDoctor from '../../assets/Blog/blog_doctor.png';

const newsData = [
  {
    image: BlogImage,
    category: 'Medical',
    date: 'March 31, 2022',
    title: '6 Tips To Protect Your Mental Health When You’re Sick',
    author: {
      name: 'Rebecca Lee',
      image: BlogDoctor,
    },
  },
  {
    image: BlogImage,
    category: 'Medical',
    date: 'March 31, 2022',
    title: '6 Tips To Protect Your Mental Health When You’re Sick',
    author: {
      name: 'Rebecca Lee',
      image: BlogDoctor,
    },
  },
  {
    image: BlogImage,
    category: 'Medical',
    date: 'March 31, 2022',
    title: '6 Tips To Protect Your Mental Health When You’re Sick',
    author: {
      name: 'Rebecca Lee',
      image: BlogDoctor,
    },
  },
];

const LatestNews = () => {
  return (
    <section className={styles.latestNews}>
      <p className={styles.name}>Blog & News</p>
      <h2 className={styles.sectionTitle}>Read Our Latest News</h2>
      <div className={styles.newsCardsContainer}>
        {newsData.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
      </div>
    </section>
  );
};

export default LatestNews;

import React, { useState, useEffect } from 'react';
import styles from './News.module.css';

export default function News() {
  const [newsData, setNewsData] = useState([]);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=apple&from=2023-11-30&to=2023-11-30&sortBy=popularity&apiKey=4afdeda6812e48c1b9c037b4c8c31e92"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setNewsData(data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchNewsData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentArticleIndex < newsData.length - 1) {
        setCurrentArticleIndex(currentArticleIndex + 1);
      } else {
        setCurrentArticleIndex(0);
      }
    }, 60000); // 1 minute interval in milliseconds

    return () => clearInterval(interval);
  }, [currentArticleIndex, newsData]);

  const currentArticle = newsData[currentArticleIndex];
  return (
    <div>
      <div className={styles.bigDiv}>
        <div className={styles.newsImage}>
          <div className={styles.newsList}>
            {currentArticle && (
              <div className={styles.newsArticle}>
                <h4>{currentArticle.title}</h4>
                <p>{currentArticle.content}</p>
                <img src={currentArticle.urlToImage} alt={currentArticle.title} />
                <p>Published At: {currentArticle.publishedAt}</p>
                {/* You can include more article details as needed */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

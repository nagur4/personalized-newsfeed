import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Tech.css'; // Import the loader CSS

// Default author image URL from Unsplash
const DEFAULT_AUTHOR_IMAGE = 'https://images.unsplash.com/photo-1501432377862-0156b4456512?ixlib=rb-1.2.1&auto=format&fit=crop&w=24&h=24&q=80';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState('technology'); // default filter set to 'technology'
  const apiKey = '363ba0a406994160ab8015036963541c';
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${filter}&apiKey=${apiKey}`);
        setArticles(response.data.articles.map(article => ({
          ...article,
          authorImage: article.authorImage || DEFAULT_AUTHOR_IMAGE
        })));
      } catch (error) {
        console.error('Error fetching the news', error);
      }
      setLoading(false);
    };

    fetchNews();
  }, [filter, apiKey]);

  return (
    <div className="news-container">
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="news-grid">
          {articles.map((article, index) => (
            <div key={index} className="news-card">
              {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="news-image" />}
              <div className="news-content">
                <h2>{article.title}</h2>
                <p className="news-description">{article.description}</p>
                <hr />
                <div className="news-footer">
                  <img src={article.authorImage} alt="author" className="author-image" />
                  <div className="news-meta">
                    <span className="author-name">{article.author || 'Unknown'}</span>
                    <span className="publication-date">{new Date(article.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">Read more</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;

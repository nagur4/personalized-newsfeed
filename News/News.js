import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './News.css';
import news1 from './news1.jpg';


// Default author image URL from Unsplash
const DEFAULT_AUTHOR_IMAGE = 'https://images.unsplash.com/photo-1501432377862-0156b4456512?ixlib=rb-1.2.1&auto=format&fit=crop&w=24&h=24&q=80';

const News = () => {
    const [articles, setArticles] = useState([]);
    const apiKey = '363ba0a406994160ab8015036963541c';

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(`https://newsapi.org/v2/everything?q=Andhra+Pradesh+politics&apiKey=${apiKey}`);
                setArticles(response.data.articles.map(article => ({
                    ...article,
                    authorImage: article.authorImage || DEFAULT_AUTHOR_IMAGE
                })));
            } catch (error) {
                console.error('Error fetching the news', error);
            }
        };

        fetchNews();
    }, [apiKey]);

    const handleSaveArticle = (article) => {
        // Implement your save functionality here
        console.log('Saved article:', article);
    };

    return (
        <div className="news-container">
            <div className="news-grid">
                {articles.map((article, index) => (
                    <div key={index} className="news-card">
                        {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="news-image" />}
                        <div className="news-content">
                            <h2>{article.title}</h2>
                            <p className="news-description">{article.description}</p>
                            <hr />
                            <div className="news-footer">
                                <img src={news1} alt="author" className="author-image" />
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
        </div>
    );
};

export default News;

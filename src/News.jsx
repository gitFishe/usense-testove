import React, {useEffect, useState} from 'react';

export default function News() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=')
            .then((response) => response.json())
            .then((json) => setData(json.articles))
            .catch((error) => console.error('Error fetching news:', error));
    }, []);

    return (
        <div>
            <h1>📰 Топ новини (US)</h1>

            {data.length === 0 ? (
                <p>Завантаження...</p>
            ) : (
                data.map((article, index) => (
                    <div
                        key={index}
                        style={{
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            padding: '10px',
                            marginBottom: '10px',
                        }}
                    >
                        <h2>{article.title}</h2>
                        {article.urlToImage && (
                            <img
                                src={article.urlToImage}
                                alt={article.title}
                                style={{ width: '100%', borderRadius: '8px' }}
                            />
                        )}
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            Читати більше →
                        </a>
                    </div>
                ))
            )}
        </div>
    );
}

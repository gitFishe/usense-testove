import {useState} from 'react';
import {NewsContext} from './NewsContext';
import performRequest from '../PerformRequest';

export function NewsProvider({ children }) {
    const [newsData, setNewsData] = useState([]);
    const [lastQuery, setLastQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function fetchNews(query) {
        if (query) query = query.toLowerCase().trim();

        if (lastQuery === query) return;

        setIsLoading(true);
        let params = {};
        if (query !== '') {
            params['q'] = query;
        }

        let data = await performRequest('/v2/everything', params);

        if (data.status !== 'ok') {
            console.error('error');
            return;
        }

        setNewsData(data.articles);
        setLastQuery(query);
        setIsLoading(false);
    }

    return (
        <NewsContext.Provider value={{ newsData, setNewsData, fetchNews, isLoading }}>
            {children}
        </NewsContext.Provider>
    );
}

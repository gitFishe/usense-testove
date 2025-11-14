import News from '../components/News';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {useContext, useEffect} from 'react';
import Category from '../components/Category';
import {NewsContext} from '../app/NewsContext';

export default function NewsList() {
    let searchParams = useSearchParams()[0];

    const { newsData, fetchNews, isLoading } = useContext(NewsContext);

    const navigate = useNavigate();
    const categories = ['Apple', 'Politics', 'USA', 'China'];

    const urlCategory = searchParams.get('category');

    useEffect(() => {
        fetchNews(urlCategory);
    }, [fetchNews, urlCategory]);

    const handleCategoryChange = (category) => {
        console.log('category changed to', category);
    };

    const handleNewsClick = (title) => {
        navigate(`/news/${title}`);
    };

    return (
        <div className="flex max-w-[1440px] mx-auto py-4">
            <Category categories={categories} onChange={handleCategoryChange} />
            { !isLoading &&
                <div className="flex-wrap flex w-full">
                    {newsData.map((news) => (
                        <News
                            isBig={false}
                            onClick={() => handleNewsClick(news.title)}
                            key={news.url}
                            {...news}
                        />
                    ))}
                </div>
            }

        </div>
    );
}
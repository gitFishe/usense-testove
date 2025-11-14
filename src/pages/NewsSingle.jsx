import News from '../components/News';
import {useParams} from 'react-router-dom';
import {useContext, useEffect} from 'react';
import {NewsContext} from '../app/NewsContext';

export default function NewsSingle() {
    const { title } = useParams();
    const { newsData, fetchNews, isLoading } = useContext(NewsContext);

    useEffect(() => {
        fetchNews(title);
    }, [fetchNews, title]);

    return (
        <>
            { !isLoading &&
                <div className="flex max-w-[1440px] mx-auto py-4">
                    <News isBig={true} {...newsData[0]} />
                </div>
            }
        </>
    );
}

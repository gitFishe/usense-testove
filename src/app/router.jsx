import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import NewsList from '../pages/NewsList';
import NewsSingle from '../pages/NewsSingle';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <NewsList /> },
            { path: 'news/:title', element: <NewsSingle /> },
        ],
    },
]);

export default router;

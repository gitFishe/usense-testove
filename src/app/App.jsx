import {Outlet} from 'react-router-dom';
import Header from '../components/Header';
import {NewsProvider} from './NewsProvider';

function App() {
    return (
        <NewsProvider>
            <div className="bg-bg min-h-screen">
                <Header />
                <Outlet />
            </div>
        </NewsProvider>
    );
}

export default App;

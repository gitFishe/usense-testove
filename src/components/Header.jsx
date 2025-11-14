import SearchBar from './SearchBar';

import {images} from '../assets';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-primary h-[90px]">
            <div className="flex max-w-[1440px] h-[90px] mx-auto px-4 justify-between items-center ">
                <Link to="/" className="w-20 h-10 items-center flex">
                    <img src={images.logo} alt="logo" />
                </Link>
                <SearchBar />
            </div>
        </header>
    );
}

import {images} from '../assets';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function SearchBar() {
    const navigate = useNavigate();

    const [inputData, setInputData] = useState('');
    // const [isError, setIsError] = useState(false);

    useEffect(() => {
        // setIsError(false)
        if (inputData === '') {
            return;
        }

        const timer = setTimeout(() => {
            navigate(`/?category=${inputData}`);
        }, 500);

        return () => clearTimeout(timer);
    }, [inputData]);

    return (
        <div
            className={`h-10 px-7 bg-bg rounded-[20px] justify-between flex items-center w-[372px]`}
        >
            <input
                value={inputData}
                onChange={(event) => {
                    setInputData(event.target.value);
                }}
                className="bg-transparent outline-none w-full mr-2 text-gray-300"
                type="text"
                placeholder="Enter search news"
            />
            <div className="h-6 w-6">
                <img src={images.search} alt="" />
            </div>
        </div>
    );
}

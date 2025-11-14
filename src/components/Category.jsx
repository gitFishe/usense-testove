import {useNavigate, useSearchParams} from 'react-router-dom';

function Category({ categories }) {
    return (
        <div className="bg-primary py-4 h-fit w-[190px] rounded-[14px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <h3 className="font-bold text-[22px] text-text text-center">Category</h3>

            <ul className="flex flex-col text-text font-bold text-[15px] mt-[30px] [&>li:not(:last-child)]:mb-[12px] mx-3 items-start">
                {categories.map((elem) => (
                    <NewsTypeButton name={elem} key={elem} />
                ))}
            </ul>
        </div>
    );
}
export default Category;

function NewsTypeButton({ name }) {
    const navigate = useNavigate();
    function handleClick() {
        navigate(`/?category=${name.toLowerCase()}`);
    }

    let searchParams = useSearchParams()[0];
    let urlCategory = searchParams.get('category');

    const active = urlCategory && urlCategory.toLowerCase() === name.toLowerCase();

    return (
        <button
            onClick={handleClick}
            className={`${active ? 'bg-bg' : ''} px-4 py-1 rounded-[8px]`}
        >
            <span>{name}</span>
        </button>
    );
}

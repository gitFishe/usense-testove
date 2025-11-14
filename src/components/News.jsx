export default function News({
    author,
    title,
    content,
    urlToImage,
    publishedAt,
    onClick,
    isBig,
    url,
}) {
    return (
        <div
            onClick={onClick}
            className={`bg-lightGray rounded-[22px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] mb-8 mx-[35px] h-fit w-[calc(50%-70px)] ${isBig ? '!w-full mx-0' : 'cursor-pointer'}`}
        >
            <div className="bg-primary rounded-[22px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] px-[15px] pb-[12px] pt-[15px]">
                <div
                    className={`w-full h-[144px] rounded-[16px] overflow-hidden ${isBig ? 'h-[300px]' : ''}`}
                >
                    <img className="w-full h-full object-cover" src={urlToImage} alt="" />
                </div>

                <div className="mt-5 text-white">
                    <h2 className="max-w-[600px] font-bold text-[20px] mb-3 truncate">{title}</h2>
                    <p className="mt-3">{`By ${author}`}</p>
                    <span className="block mt-[20px] text-text-dark">{publishedAt}</span>
                </div>
            </div>
            {isBig && (
                <div className="p-8 text-[#ababab] font-bold leading-[140%]">
                    <p>{content}</p>
                    <a className="text-blue-400 font-bold block mt-6" href={url}>
                        Learn more
                    </a>
                </div>
            )}
        </div>
    );
}

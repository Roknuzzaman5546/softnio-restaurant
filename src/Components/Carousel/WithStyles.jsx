const WithStyles = ({ image, heading }) => {
    return (
        <div className=" flex flex-col items-center bg-white px-4 py-7 h-full w-full">
            <div className="overflow-hidden">
                <img
                    src={image}
                    className='rounded-full transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg overflow-hidden w-[130px] xl:h-[95px] lg:h-[90px]'
                    alt=""
                />
            </div>
            <div className=" border-b-4 border-[#BD1F17] w-1/4 mt-2"></div>
            <p className=" font-semibold text-lg bebas-neue-regular mb-2 mt-4">{heading}</p>
            <p className=" font-semibold text-sm roboto-regular">Barbecue Italian cuisine pizza</p>
        </div>
    )
}

export default WithStyles;
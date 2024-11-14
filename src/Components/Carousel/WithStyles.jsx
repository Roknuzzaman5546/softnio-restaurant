
const WithStyles = ({ image, headline }) => {
    return (
        <div className=" flex flex-col items-center">
            <div className="overflow-hidden rounded-full cursor-pointer ">
                <img
                    src={image}
                    className='rounded-full transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg overflow-hidden '
                    alt=""
                />
            </div>
            <p className=" font-semibold text-lg">{headline}</p>
        </div>
    )
}

export default WithStyles
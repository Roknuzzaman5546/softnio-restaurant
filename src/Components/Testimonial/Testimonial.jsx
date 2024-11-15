import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const Testimonial = () => {
    return (
        <div>
            <div className=" flex justify-between items-center">
                <div>
                    <div className=' flex gap-2 items-center'>
                        <p className='w-2 h-2 bg-[#BD1F17]'></p>
                        <p className=' roboto-regular text-[#BD1F17]'>Crispy, Every Bite Taste</p>
                    </div>
                    <h2 className='bebas-neue-regular text-4xl'>What Some of my Customers Say</h2>
                </div>
                <div className=" flex justify-center items-center gap-3">
                    <div className=" shadow-md p-4 flex flex-col justify-center items-center rounded-full cursor-pointer">
                        <IoArrowBack className='transition-transform duration-500 ease-in-out hover:scale-110' />
                    </div>
                    <div className=" shadow-md p-4 flex flex-col justify-center items-center rounded-full cursor-pointer text-[#BD1F17]">
                        <IoArrowForward className='transition-transform duration-500 ease-in-out hover:scale-110' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
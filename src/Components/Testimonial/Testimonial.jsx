import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import videoImg from '../../assets/testimonial/Video.png'
import testimonialMan from '../../assets/testimonial/testimonialMan.png'

const Testimonial = () => {
    return (
        <div className="max-w-[1280px] mx-auto xl:px-20 lg:px-16 md:px-5 px-5 mt-24">
            <div className=" flex justify-between items-center">
                <div>
                    <div className=' flex gap-2 items-center'>
                        <p className='w-2 h-2 bg-[#BD1F17]'></p>
                        <p className=' roboto-regular text-[#BD1F17]'>Crispy, Every Bite Taste</p>
                    </div>
                    <h2 className='bebas-neue-regular text-4xl pt-2'>What Some of my Customers Say</h2>
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
            <div className=" flex justify-center mt-12">
                <div className="p-16 bg-[#FEBF00] w-[45%] flex flex-col justify-between">
                    <p className="roboto-regular p-4">{`You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.`}</p>
                    <div className=" flex justify-between items-center border-b border-[#0A1425]">
                        <div>
                            <h3 className="bebas-neue-regular text-lg">Khalid Al Dawsry</h3>
                            <p className="roboto-regular text-sm">Jeddah, Saudi</p>
                        </div>
                        <div className=" border-b-4 border-[#BD1F17] py-5">
                            <img className=" rounded-full h-[39px] w-[39px]" src={testimonialMan} alt="" />
                        </div>
                    </div>
                </div>
                <div className=" w-[55%]">
                    <img src={videoImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
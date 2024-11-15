import videoImg from '../../assets/testimonial/Video.png'
import testimonialMan from '../../assets/testimonial/testimonialMan.png'
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Testimonial = () => {
    const slides = [
        {
            text: `You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.`,
            name: "Khalid Al Dawsry",
            location: "Jeddah, Saudi",
            image: videoImg,
        },
        {
            text: `The Mandi was amazing! The flavor and tenderness of the meat were outstanding. A definite must-try for everyone.`,
            name: "Fatima Al Zahra",
            location: "Riyadh, Saudi",
            image: videoImg,
        },
        {
            text: `Excellent Mandi! The spices were perfect, and the rice was flavorful. Highly recommended.`,
            name: "Ahmed Al Bakr",
            location: "Dammam, Saudi",
            image: videoImg,
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };


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
                    <div className=" shadow-2xl p-4 flex flex-col justify-center items-center rounded-full cursor-pointer"
                        onClick={handlePrev}
                    >
                        <MdKeyboardArrowLeft className='transition-transform duration-500 ease-in-out hover:scale-110' />
                    </div>
                    <div className=" shadow-2xl p-4 flex flex-col justify-center items-center rounded-full cursor-pointer text-[#BD1F17]"
                        onClick={handleNext}
                    >
                        <MdKeyboardArrowRight className='transition-transform duration-500 ease-in-out hover:scale-110' />
                    </div>
                </div>
            </div>


            <div className="flex flex-col items-center mt-12">
                <div className="flex justify-center">
                    <div className="p-16 bg-[#FEBF00] w-[45%] flex flex-col justify-between">
                        <p className="roboto-regular p-4">{slides[currentSlide].text}</p>
                        <div className="flex justify-between items-center border-b border-[#0A1425]">
                            <div>
                                <h3 className="bebas-neue-regular text-lg">{slides[currentSlide].name}</h3>
                                <p className="roboto-regular text-sm">{slides[currentSlide].location}</p>
                            </div>
                            <div className="border-b-4 border-[#BD1F17] py-5">
                                <img
                                    className="rounded-full h-[39px] w-[39px]"
                                    src={testimonialMan}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-[55%]">
                        <img src={slides[currentSlide].image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
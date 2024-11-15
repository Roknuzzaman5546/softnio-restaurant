import { useState } from "react";
import WithStyles from "./WithStyles";
import CarouselImg1 from '../../assets/Carousel/carousel1.png'
import CarouselImg2 from "../../assets/Carousel/carousel2.png";
import CarouselImg3 from "../../assets/Carousel/carousel3.png";
import CarouselImg4 from "../../assets/Carousel/carous4el.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const CarouselSection = () => {
    const items = [
        {
            image: CarouselImg1,
            heading: "vagetable"
        },
        {
            image: CarouselImg2,
            heading: "Food"
        },
        {
            image: CarouselImg1,
            heading: "Fruits"
        },
        {
            image: CarouselImg4,
            heading: "Fruits"
        },
        {
            image: CarouselImg1,
            heading: "Sugar"
        },
        {
            image: CarouselImg2,
            heading: "Pizza"
        },
        {
            image: CarouselImg1,
            heading: "burger"
        },
        {
            image: CarouselImg2,
            heading: "Lacchi"
        },
        {
            image: CarouselImg1,
            heading: "Lemon mint"
        },
        {
            image: CarouselImg3,
            heading: "South"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;

    const handleNext = () => {
        if (currentIndex + itemsPerPage < items.length) {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };

    const handlePrev = () => {
        if (currentIndex - itemsPerPage >= 0) {
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };

    const currentItems = items.slice(currentIndex, currentIndex + itemsPerPage);



    return (
        <div>
            <div className=' bg-[#FBF7F2] md:py-20 py-8 static'>
                <div className=' md:mt-[25px] max-w-[1280px] custom-range:px-9 lg:px-[52px] md:px-3 px-5 mx-auto  text-center'>
                    <div className=" flex justify-between items-center md:px-[40px] ">
                        <div className=" flex flex-col justify-start">
                            <div className=' flex gap-2 items-center'>
                                <p className='w-2 h-2 bg-[#BD1F17]'></p>
                                <p className=' roboto-regular text-[#BD1F17]'>Crispy, Every Bite Tastes</p>
                            </div>
                            <h2 className='bebas-neue-regular md:text-4xl text-2xl pt-2'>POPULAR FOOD ITEMS</h2>
                        </div>
                        <div className=" md:flex hidden justify-center items-center gap-3">
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-4 gap-2">
                            {currentItems.map((item, index) => (
                                <WithStyles
                                    key={index}
                                    image={item.image}
                                    heading={item.heading}
                                />
                            ))}
                        </div>
                    </div>
                    <div className=" flex md:hidden justify-center items-center gap-3 mt-3">
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
            </div>
        </div>
    );
};

export default CarouselSection;
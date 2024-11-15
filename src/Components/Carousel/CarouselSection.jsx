import WithStyles from "./WithStyles";
import { IoMdArrowForward } from 'react-icons/io';
import { IoArrowBack } from 'react-icons/io5';
import CarouselImg1 from '../../assets/Carousel/carousel1.png'
import CarouselImg2 from '../../assets/Carousel/carousel2.png'
import CarouselImg3 from '../../assets/Carousel/carousel3.png'
import CarouselImg4 from '../../assets/Carousel/carous4el.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselSection = () => {
    return (
        <div>
            <div className=' bg-[#FBF7F2] py-20 static'>
                <div className=' md:mt-[25px] mt-5 max-w-[1280px] custom-range:px-9 lg:px-[52px] md:px-3 mx-auto  text-center'>
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass=""
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite={false}
                        itemClass="md:px-1 px-1"
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1350
                                },
                                items: 4,
                                partialVisibilityGutter: 40,
                                slidesToSlide: 4 // Number of slides to slide at once on desktop
                            },
                            laptop: {
                                breakpoint: { max: 1350, min: 1024 },
                                items: 4,
                                partialVisibilityGutter: 30,
                                slidesToSlide: 4 // Number of slides to slide at once on laptop
                            },
                            tablet: {
                                breakpoint: { max: 1024, min: 700 },
                                items: 4,
                                partialVisibilityGutter: 30,
                                slidesToSlide: 5 // Number of slides to slide at once on tablet
                            },
                            mobile: {
                                breakpoint: { max: 700, min: 0 },
                                items: 3.5,
                                partialVisibilityGutter: 20,
                                slidesToSlide: 3 // Number of slides to slide at once on mobile
                            }
                        }}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots={false}
                        sliderClass=""
                        swipeable
                        customLeftArrow={<CustomLeftArrow />}
                        customRightArrow={<CustomRightArrow />}
                    >
                        <div className=' flex flex-col items-center justify-center'>
                            <WithStyles
                                image={CarouselImg1} />
                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <WithStyles
                                image={CarouselImg2} />
                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <WithStyles
                                image={CarouselImg3} />
                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <WithStyles
                                image={CarouselImg4} />
                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <WithStyles
                                image={CarouselImg4} />
                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <WithStyles
                                image={CarouselImg4} />
                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <WithStyles
                                image={CarouselImg4} />
                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <WithStyles
                                image={CarouselImg4} />
                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <WithStyles
                                image={CarouselImg4} />
                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <WithStyles
                                image={CarouselImg4} />
                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <WithStyles
                                image={CarouselImg4} />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default CarouselSection;

const CustomLeftArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} style={arrowStyles.left} className='shadow-md'>
            <IoArrowBack className='transition-transform duration-500 ease-in-out hover:scale-110' />
        </button>
    );
};

const CustomRightArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} style={arrowStyles.right} className='shadow-md md:block hidden'>
            <IoMdArrowForward className='transition-transform duration-500 ease-in-out hover:scale-110' />
        </button>
    );
};


// Custom styles for the arrows
const arrowStyles = {
    left: {
        position: 'absolute',
        top: 0,
        left: 0,
        // bottom: 0,
        transform: 'translateY(-50%)',
        backgroundColor: '#fff',
        border: '1px solid #dfdfdf',
        borderRadius: '100%',
        padding: '16px',
        fontSize: '30px',
        cursor: 'pointer',
        zIndex: 3,
    },
    right: {
        position: 'absolute',
        top: '37%',
        right: 0,
        // bottom: 0,
        transform: 'translateY(-50%)',
        backgroundColor: '#fff',
        border: '1px solid #dfdfdf',
        borderRadius: '100%',
        padding: '16px',
        fontSize: '30px',
        cursor: 'pointer',
        zIndex: 3,
    },
};
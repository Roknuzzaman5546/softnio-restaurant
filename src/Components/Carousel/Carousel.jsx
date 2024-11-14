import WithStyles from "./WithStyles";
import { IoMdArrowForward } from 'react-icons/io';
import { IoArrowBack } from 'react-icons/io5';
import CarouselImg1 from '../../assets/Carousel/carousel1.png'
import CarouselImg2 from '../../assets/Carousel/carousel2.png'
import CarouselImg3 from '../../assets/Carousel/carousel3.png'
import CarouselImg4 from '../../assets/Carousel/carous4el.png'

const Carousel = () => {
    return (
        <div>
            <div className='custom-range:px-9 lg:px-[52px] md:px-3'>
            <div className=' md:mt-[25px] mt-5 max-w-[1280px] mx-auto overflow-visible text-center'>
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite={false}
                    itemClass="md:px-3 px-2"
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
                            items: 8,
                            partialVisibilityGutter: 40,
                            slidesToSlide: 8 // Number of slides to slide at once on desktop
                        },
                        laptop: {
                            breakpoint: { max: 1350, min: 1024 },
                            items: 7,
                            partialVisibilityGutter: 30,
                            slidesToSlide: 7 // Number of slides to slide at once on laptop
                        },
                        tablet: {
                            breakpoint: { max: 1024, min: 700 },
                            items: 5,
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
                        <p className=' text-[#323232] md:text-[13px] text-xs font-hurme font-semibold mt-[18px]'>sinterklass</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={CarouselImg2} />
                        <p className=' text-[#323232] md:text-[13px] text-xs font-hurme font-semibold mt-[18px]'>baby</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={CarouselImg3} />
                        <p className=' text-[#323232] md:text-[13px] text-xs font-hurme font-semibold mt-[18px]'>kind</p>
                    </div>
                    <div className=' flex flex-col items-center justify-center'>
                        <WithStyles
                            image={CarouselImg4} />
                        <p className=' text-[#323232] md:text-[13px] text-xs font-hurme font-semibold mt-[18px]'>kind</p>
                    </div>
                </Carousel>
            </div>
        </div>
        </div>
    );
};

export default Carousel;

const CustomLeftArrow = ({ onClick }) => {
    return (
        <button onClick={onClick} style={arrowStyles.left} className='shadow-md md:block hidden'>
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
        top: '37%',
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
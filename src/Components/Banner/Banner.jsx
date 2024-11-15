import bannerImg from '../../assets/banner/bannerImg.png'
import bannerStar from '../../assets/banner/bannerStar.png'
import bannerOffer from '../../assets/banner/Offer .png'
import YallowBtn from '../../Shared/YallowBtn/YallowBtn';
import './Banner.css'

const Banner = () => {
    return (
        <div className='bgimg bg-[#BD1F17]'>
            {/* banner section */}
            <div className=' flex justify-between items-center max-w-[1280px] mx-auto xl:px-20 lg:px-16 md:px-5 px-5 xl:pt-40 lg:pt-32 md:pt-10 pt-5 xl:pb-36 lg:pb-28 md:pb-24 pb-5'>
                <div className=' w-1/2'>
                    <h2 className=" text-5xl font-bold bebas-neue-regular">
                        Taste the authentic
                        Saudi cuisine
                    </h2>
                    <p className='roboto-regular text-sm text-white py-5'>Among the best Saudi chefs in the world, serving <br /> you something beyond flavor. </p>
                    <div className=' inline-block'>
                        <YallowBtn>
                            About More
                        </YallowBtn>
                    </div>
                </div>
                <div className=' w-1/2'>
                    <img className='xl:ml-[540px] lg:ml-[450px] md:ml-[366px] ml-[350px] -mb-3' src={bannerStar} alt="" />
                    <img className=' w-full' src={bannerImg} alt="" />
                    <img className='xl:ml-[475px] lg:ml-[386px] md:ml-[366px] ml-[350px -mt-[120px]' src={bannerOffer} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
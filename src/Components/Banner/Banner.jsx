import bannerImg from '../../assets/banner/bannerImg.png'
import bannerStar from '../../assets/banner/bannerStar.png'
import bannerOffer from '../../assets/banner/Offer .png'
import YallowBtn from '../../Shared/YallowBtn/YallowBtn';
import './Banner.css'

const Banner = () => {
    return (
        <div className='bgimg bg-[#BD1F17]'>
            {/* banner section */}
            <div className=' flex md:flex-row flex-col justify-between items-center max-w-[1280px] mx-auto xl:px-20 lg:px-16 md:px-5 px-5 xl:pt-40 lg:pt-32 md:pt-10 pt-28 xl:pb-36 lg:pb-28 md:pb-24 pb-5'>
                <div className=' md:w-1/2 w-full'>
                    <h2 className=" md:text-5xl text-4xl font-bold bebas-neue-regular text-white">
                        Taste the authentic
                        Saudi cuisine
                    </h2>
                    <p className='roboto-regular text-sm text-white py-5'>Among the best Saudi chefs in the world, serving you something beyond flavor. </p>
                    <div className=' inline-block'>
                        <YallowBtn>
                            Explore Menu
                        </YallowBtn>
                    </div>
                </div>
                <div className=' md:w-1/2 w-full md:pb-0 pb-3'>
                    <img className='xl:ml-[540px] lg:ml-[450px] md:ml-[366px] ml-[290px] -mb-3' src={bannerStar} alt="" />
                    <img className=' w-full' src={bannerImg} alt="" />
                    <img className='xl:ml-[475px] lg:ml-[386px] md:ml-[366px] ml-[200px] md:-mt-[120px] -mt-[128px]' src={bannerOffer} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
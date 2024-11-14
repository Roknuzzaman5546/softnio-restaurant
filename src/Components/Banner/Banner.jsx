import bannerImg from '../../assets/banner/bannerImg.png'
import Navbar from '../../Shared/Navbar/Navbar';
import './Banner.css'

const Banner = () => {
    return (
        <div className='bgimg bg-[#BD1F17]'>
            {/* Navbar import from  Navbar components*/}
            <Navbar></Navbar>
            {/* banner section */}
            <div className=' flex justify-between items-center max-w-[1280px] mx-auto xl:px-20 lg:px-12 md:px-5 px-5 xl:pt-16 lg:pt-12 md:pt-10 pt-5 xl:pb-36 lg:pb-28 md:pb-24 pb-5 relative'>
                <div className=' w-1/2'>
                    <h2 className=" text-7xl font-bold bebas-neue-regular absolute top-40 left-16 w-[52%] p-1 bg-title">
                        Taste the authentic
                        Saudi cuisine
                    </h2>
                    <p className='roboto-regular text-sm text-white'>Among the best Saudi chefs in the world, serving you something beyond flavor. </p>
                    <button className=" bg-[#FEBF00] py-2 px-3">Explore menu</button>
                </div>
                <div className=' w-1/2'>
                    <img className=' w-full' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
import { FiPhoneCall } from "react-icons/fi";
import YallowBtn from "../../Shared/YallowBtn/YallowBtn";

const ExperienceTab = () => {
    return (
        <div>
            <h2 className='text-[31px] font-bold bebas-neue-regular mt-7 leading-8'>Exceptional culinary <br /> experience and delicious food</h2>
            <p className='roboto-regular text-sm text-black pb-7 pt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
            <div className=' flex justify-start items-center gap-5'>
                <YallowBtn>
                    About More
                </YallowBtn>
                <div className='flex items-center gap-4'>
                    <FiPhoneCall className=' text-[#B52B1D] font-bold' />
                    <p className='font-roboto font-bold text-sm text-black'>+91 123 456 7890</p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceTab;
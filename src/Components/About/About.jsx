import { useEffect, useState } from 'react';
import aboutImg from '../../assets/about/aboutImg.png'
import { FiPhoneCall } from "react-icons/fi";


const About = () => {
    const initialActiveTab = JSON.parse(localStorage.getItem('activeTab')) || { about: true };
    const [activeTab, setActiveTab] = useState(initialActiveTab);

    useEffect(() => {
        localStorage.setItem('activeTab', JSON.stringify(activeTab));
    }, [activeTab]);

    return (
        <div className=' mt-20'>
            <div className='max-w-[1280px] mx-auto xl:px-20 lg:px-16 md:px-5 px-5 flex items-start justify-between gap-8'>
                <div className=' w-full'>
                    <img src={aboutImg} alt="" />
                </div>
                <div className=' w-full'>
                    <div className='flex justify-start border-b border-[#B52B1D]'>
                        <button
                            onClick={() => setActiveTab({ about: true })}
                            className=' p-4 text-sm roboto-regular bg-[#B52B1D]'>About</button>
                        <button
                            onClick={() => setActiveTab({ experience: true })}
                            className=' p-4 text-sm roboto-regular bg-[#B52B1D]'>Experience</button>
                        <button
                            onClick={() => setActiveTab({ contact: true })}
                            className=' p-4 text-sm roboto-regular bg-[#B52B1D]'>Contact</button>
                    </div>
                    <div>
                        <h2 className='text-[31px] font-bold bebas-neue-regular'>Exceptional culinary <br /> experience and delicious food</h2>
                        <p className='roboto-regular text-sm text-black py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                        <div className=' flex justify-start items-center gap-5'>
                            <button className=" bg-[#FEBF00] py-2 px-3">Explore menu</button>
                            <div className='flex items-center gap-4'>
                                <FiPhoneCall className=' text-[#B52B1D] font-bold' />
                                <p className='font-roboto font-bold text-sm text-black'>+91 123 456 7890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
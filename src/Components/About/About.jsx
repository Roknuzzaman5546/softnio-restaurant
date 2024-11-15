import { useEffect, useState } from 'react';
import aboutImg from '../../assets/about/aboutImg.png'
import aboutIcon1 from '../../assets/about/aboutIcon1.png'
import aboutIcon2 from '../../assets/about/aboutIcon2.png'
import aboutIcon3 from '../../assets/about/aboutIcon3.png'
import AboutTab from './AboutTab';
import ExperienceTab from './ExperienceTab';
import ContactTab from './ContactTab';
import './About.css'


const About = () => {
    const initialActiveTab = JSON.parse(localStorage.getItem('activeTab')) || { about: true };
    const [activeTab, setActiveTab] = useState(initialActiveTab);

    useEffect(() => {
        localStorage.setItem('activeTab', JSON.stringify(activeTab));
    }, [activeTab]);

    return (
        <div className=' mt-20 pb-12'>
            <div className='max-w-[1280px] mx-auto xl:px-20 lg:px-16 md:px-5 px-5 flex md:flex-row flex-col items-start justify-between gap-8'>
                <div className=' w-full'>
                    <img src={aboutImg} alt="" />
                </div>
                <div className=' w-full'>
                    <div className='flex justify-start border-b border-[#B52B1D]'>
                        <button
                            onClick={() => setActiveTab({ about: true })}
                            className={`px-4 py-3 text-white text-sm roboto-regular transition-colors duration-500 ${activeTab.about ? 'bg-[#B52B1D]' : ''}`}>About</button>
                        <button
                            onClick={() => setActiveTab({ experience: true })}
                            className={`px-4 py-3 text-white text-sm roboto-regular transition-colors duration-500 ${activeTab.experience ? 'bg-[#B52B1D]' : ''}`}>Experience</button>
                        <button
                            onClick={() => setActiveTab({ contact: true })}
                            className={`px-4 py-3 text-white text-sm roboto-regular transition-colors duration-500 ${activeTab.contact ? 'bg-[#B52B1D]' : ''}`}>Contact</button>
                    </div>
                    <div>
                        {
                            activeTab?.about ?
                                <AboutTab /> : null
                        }
                        {
                            activeTab?.experience ?
                                <ExperienceTab /> : null
                        }
                        {
                            activeTab?.contact ?
                                <ContactTab /> : null
                        }
                    </div>
                </div>
            </div>
            <div className='max-w-[1280px] mx-auto xl:px-20 lg:px-16 md:px-5 px-5 flex md:flex-row flex-col justify-start md:items-center items-start md:gap-24 gap-10 mt-16'>
                <div className=' flex items-center gap-3'>
                    <div className=' bg-[#FFFFFF] p-2 shadow-xl rounded-full'>
                        <img className=' w-[80%] mx-auto' src={aboutIcon2} alt="" />
                    </div>
                    <div>
                        <h3 className='bebas-neue-regular text-lg'>fast delivery</h3>
                        <p className='roboto-regular text-sm'>Within 30 minutes</p>
                    </div>
                </div>
                <div className=' flex items-center gap-3'>
                    <div className=' bg-[#FFFFFF] p-2 shadow-xl rounded-full'>
                        <img className='w-[80%] h-[80%] mx-auto' src={aboutIcon1} alt="" />
                    </div>
                    <div>
                        <h3 className='bebas-neue-regular text-lg'>fast delivery</h3>
                        <p className='roboto-regular text-sm'>Within 30 minutes</p>
                    </div>
                </div>
                <div className=' flex items-center gap-3'>
                    <div className=' bg-[#FFFFFF] p-2 shadow-xl rounded-full'>
                        <img className='w-[80%] mx-auto' src={aboutIcon3} alt="" />
                    </div>
                    <div>
                        <h3 className='bebas-neue-regular text-lg'>fast delivery</h3>
                        <p className='roboto-regular text-sm'>Within 30 minutes</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
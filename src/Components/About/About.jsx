import { useEffect, useState } from 'react';
import aboutImg from '../../assets/about/aboutImg.png'
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
        <div className=' mt-20'>
            <div className='max-w-[1280px] mx-auto xl:px-20 lg:px-16 md:px-5 px-5 flex items-start justify-between gap-8'>
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
        </div>
    );
};

export default About;
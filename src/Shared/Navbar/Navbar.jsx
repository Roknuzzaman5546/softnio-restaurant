import logo from '../../assets/nav/Logo.png'
import YallowBtn from '../YallowBtn/YallowBtn';

const Navbar = () => {
    return (
        <div className=' flex justify-between items-center max-w-[1280px] mx-auto xl:px-20 lg:px-16 md:px-5 px-5 xl:py-[32px] lg:py-[26px] md:py-[24px] py-[20px]'>
            <div className=' flex items-center gap-12'>
                <img src={logo} alt="" />
                <ul className=' flex items-center gap-10 text-white'>
                    <li className='  raleway-nav'>Home</li>
                    <li className='  raleway-nav'>About</li>
                    <li className='  raleway-nav'>Portfolio</li>
                    <li className='  raleway-nav'>clients</li>
                    <li className='  raleway-nav'>Blog</li>
                    <li className='  raleway-nav'>Contact</li>
                </ul>
            </div>
            <YallowBtn>
                About More
            </YallowBtn>
        </div>
    );
};

export default Navbar;
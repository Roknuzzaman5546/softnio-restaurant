import { IoMdTime } from "react-icons/io";
import './Footer.css'
import { FiPhoneCall } from "react-icons/fi";
import { MdMailOutline, MdOutlineFacebook } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bgFooter mt-20">
            <div className=" bg-[#000000CC] bg-blend-saturation max-w-[1280px] mx-auto xl:px-20 lg:px-16 md:px-5 px-5 text-white py-16">
                <h2 className="bebas-neue-regular text-4xl text-center">We ready to have you the best dining experiences</h2>
                <div className=" flex justify-between mt-10">
                    <div className=" flex flex-col items-center justify-center">
                        <IoMdTime className="text-[#FEBF00] text-lg" />
                        <h4 className="bebas-neue-regular py-3">Opening hours</h4>
                        <p className="roboto-regular text-xs">Monday - Sunday</p>
                        <p className="roboto-regular text-xs pt-0.5">9:00 AM to 11:30 PM</p>
                    </div>
                    <div className=" flex flex-col items-center justify-center">
                        <FiPhoneCall className='text-[#FEBF00] text-lg' />
                        <h4 className="bebas-neue-regular py-3">Opening hours</h4>
                        <p className="roboto-regular text-xs">Monday - Sunday</p>
                        <p className="roboto-regular text-xs pt-0.5">9:00 AM to 11:30 PM</p>
                    </div>
                    <div className=" flex flex-col items-center justify-center">
                        <MdMailOutline className="text-[#FEBF00] text-lg" />
                        <h4 className="bebas-neue-regular py-3">Opening hours</h4>
                        <p className="roboto-regular text-xs">Monday - Sunday</p>
                        <p className="roboto-regular text-xs pt-0.5">9:00 AM to 11:30 PM</p>
                    </div>
                    <div className=" flex flex-col items-center justify-center">
                        <CiLocationOn className="text-[#FEBF00] text-lg" />
                        <h4 className="bebas-neue-regular py-3">Opening hours</h4>
                        <p className="roboto-regular text-xs">Monday - Sunday</p>
                        <p className="roboto-regular text-xs pt-0.5">9:00 AM to 11:30 PM</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-5 mt-20">
                    <div className=" border-[1.5px] border-white rounded-full p-2 hover:bg-[#FEBF00] hover:text-black hover:border-[#FEBF00] transition-colors duration-500 cursor-pointer">
                        <MdOutlineFacebook className=" text-xl" />
                    </div>
                    <div className=" border-[1.5px] border-white rounded-full p-2 hover:bg-[#FEBF00] hover:text-black hover:border-[#FEBF00] transition-colors duration-500 cursor-pointer">
                        <FaSquareXTwitter className=" text-xl" />
                    </div>
                    <div className=" border-[1.5px] border-white rounded-full p-2 hover:bg-[#FEBF00] hover:text-black hover:border-[#FEBF00] transition-colors duration-500 cursor-pointer">
                        <FaInstagramSquare className=" text-xl" />
                    </div>
                    <div className=" border-[1.5px] border-white rounded-full p-2 hover:bg-[#FEBF00] hover:text-black hover:border-[#FEBF00] transition-colors duration-500 cursor-pointer">
                        <FaLinkedin className=" text-xl" />
                    </div>
                </div>
                <p className=" roboto-regular text-sm text-center mt-3">© 2023 All Rights Reserved </p>
            </div>
        </div>
    );
};

export default Footer;
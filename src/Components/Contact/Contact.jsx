import YallowBtn from '../../Shared/YallowBtn/YallowBtn';
import './Contact.css'

const Contact = () => {
    return (
        <div className="bgContact">
            <div className=' max-w-[1280px] mx-auto xl:px-20 lg:px-16 md:px-5 px-5 md:pt-16 pt-8 md:pb-12 pb-8'>
                <div className=' md:w-[50%] w-full text-white'>
                    <div>
                        <div className=' flex gap-2 items-center'>
                            <p className='w-2 h-2 bg-[#BD1F17]'></p>
                            <p className=' roboto-regular text-[#BD1F17]'>Book Now</p>
                        </div>
                        <h2 className='bebas-neue-regular text-4xl py-5'>Book Your Table</h2>
                        <p className='roboto-regular pb-6 text-sm w-[85%]'>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
                    </div>
                    <div className=" flex md:flex-row flex-col items-center md:gap-5 gap-3">
                        <input placeholder='Your name*' className=' text-white text-sm placeholder:text-sm placeholder:text-white roboto-regular bg-transparent px-3 py-3 border border-white w-full' type="text" name="" id="" />
                        <input placeholder='Reservation date*' className=' text-white text-sm placeholder:text-sm placeholder:text-white roboto-regular bg-transparent px-3 py-3 border border-white w-full' type="text" name="" id="" />
                    </div>
                    <div className=" flex md:flex-row flex-col md:gap-5 gap-3 md:mt-5 mt-3">
                        <input placeholder='Reservation date*' className=' text-white text-sm placeholder:text-sm placeholder:text-white roboto-regular bg-transparent px-3 py-3 border border-white w-full' type="date" name="" id="" />
                        <input placeholder='Reservation date*' className=' text-white text-sm placeholder:text-sm placeholder:text-white roboto-regular bg-transparent px-3 py-3 border border-white w-full' type="number" name="" id="" />
                    </div>
                    <div className=' mt-5 md:mb-7 mb-4'>
                        <textarea placeholder='Reservation date*' className=' text-white text-sm placeholder:text-sm placeholder:text-white roboto-regular bg-transparent px-3 py-3 border border-white w-full' rows={6} name="" id=""></textarea>
                    </div>
                    <YallowBtn>
                        Book now
                    </YallowBtn>
                </div>
            </div>
        </div>
    );
};

export default Contact;
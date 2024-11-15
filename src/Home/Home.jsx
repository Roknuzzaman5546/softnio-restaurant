import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import Carousel from "../Components/Carousel/CarouselSection";
import Contact from "../Components/Contact/Contact";
import Testimonial from "../Components/Testimonial/Testimonial";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <div className=" sticky top-0 left-0 -mt-[110px]">
                <Navbar></Navbar>
            </div>
            <Banner></Banner>
            <About></About>
            <Carousel></Carousel>
            <Contact></Contact>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;
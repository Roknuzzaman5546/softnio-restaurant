import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import Carousel from "../Components/Carousel/CarouselSection";
import Contact from "../Components/Contact/Contact";
import Testimonial from "../Components/Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Carousel></Carousel>
            <Contact></Contact>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
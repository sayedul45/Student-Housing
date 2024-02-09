import LandImg1 from "../Images/LandImg1.jpg";
import LandImg2 from "../Images/LandImg2.jpg";
import LandImg3 from "../Images/LandImg3.jpg";
import LandImg4 from "../Images/LandImg4.jpg";
import LandingData from "./LandingData";
import "./LandingStyle.css";

const Landing = () => {
    return (
        <>
            <div className="landing">
                <h1>Welcome to the Student Housing System!</h1>
                <p className="para">Find Your Ideal Home Away from Home</p>
                <LandingData className="first-des" heading="About Us"
                text="Are you a student looking for comfortable and convenient housing options? Look no further! The Student Housing System provides an all-in-one solution for students of [University Name] and new candidates seeking a place to call their own. We offer a range of residence halls tailored to meet your needs, ensuring a supportive and vibrant community throughout your academic journey.Our halls are designed to provide a comfortable and welcoming atmosphere where you can relax, study, and socialize. Enjoy well-furnished rooms, common areas, and modern amenities.All our residence halls are conveniently located within close proximity to the university campus, saving you time and ensuring easy access to academic buildings, libraries, and other essential facilities.At Student Housing System, we believe in fostering a sense of belonging and community. You'll have the opportunity to engage in various extracurricular activities, events, and initiatives that promote personal growth and lifelong friendships.Applying for a room is quick and easy. New candidates can conveniently book their desired residence hall through our user-friendly online portal. Simply browse the options, select your preferred hall, and reserve your spot with just a few clicks."
                img1={LandImg1}
                img2={LandImg2} />
                <LandingData className="first-des-reverse" heading="About Us"
                text="Are you a student looking for comfortable and convenient housing options? Look no further! The Student Housing System provides an all-in-one solution for students of [University Name] and new candidates seeking a place to call their own. We offer a range of residence halls tailored to meet your needs, ensuring a supportive and vibrant community throughout your academic journey.Our halls are designed to provide a comfortable and welcoming atmosphere where you can relax, study, and socialize. Enjoy well-furnished rooms, common areas, and modern amenities.All our residence halls are conveniently located within close proximity to the university campus, saving you time and ensuring easy access to academic buildings, libraries, and other essential facilities.At Student Housing System, we believe in fostering a sense of belonging and community. You'll have the opportunity to engage in various extracurricular activities, events, and initiatives that promote personal growth and lifelong friendships.Applying for a room is quick and easy. New candidates can conveniently book their desired residence hall through our user-friendly online portal. Simply browse the options, select your preferred hall, and reserve your spot with just a few clicks."
                img1={LandImg3}
                img2={LandImg4}
            />
            </div>
            
            {/* <div className="first-des">
                <div className="des-text">
                    <h2>About Us</h2>
                    <p>Are you a student looking for comfortable and convenient housing options? Look no further! The Student Housing System provides an all-in-one solution for students of [University Name] and new candidates seeking a place to call their own. We offer a range of residence halls tailored to meet your needs, ensuring a supportive and vibrant community throughout your academic journey.Our halls are designed to provide a comfortable and welcoming atmosphere where you can relax, study, and socialize. Enjoy well-furnished rooms, common areas, and modern amenities.All our residence halls are conveniently located within close proximity to the university campus, saving you time and ensuring easy access to academic buildings, libraries, and other essential facilities.At Student Housing System, we believe in fostering a sense of belonging and community. You'll have the opportunity to engage in various extracurricular activities, events, and initiatives that promote personal growth and lifelong friendships.Applying for a room is quick and easy. New candidates can conveniently book their desired residence hall through our user-friendly online portal. Simply browse the options, select your preferred hall, and reserve your spot with just a few clicks.</p>
                </div>
                <div className="image">
                    <img src={LandImg1} alt="img"/>
                    <img src={LandImg2} alt="img"/>
                </div>
            </div> */}
        </>
    );
}

export default Landing;
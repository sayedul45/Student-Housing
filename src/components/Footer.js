import "./FooterStyle.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Student Housing System</h1>
                    <p>Choose your favourite destination</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
            <div className="middle">
                <div>
                    <h4>About Us</h4>
                    <a href="/">Github</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                </div>
                <div>
                    <h4>Get Help</h4>
                    <a href="/">FAQ</a>
                    <a href="/">Services</a>
                    <a href="/">Support</a>
                </div>
                <div>
                    <h4>Contact Us</h4>
                    <a href="/"><i className="fa-solid fa-house"></i>Salmanpur,Cumilla</a>
                    <a href="/"><i className="fa-sharp fa-regular fa-envelope"></i>info@example.com</a>
                    <a href="/"><i className="fa-solid fa-phone"></i>+880123456789</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
            <div className="bottom">
                <hr />
                <p><i className="fa-regular fa-copyright"></i> 2023 Student Housing System | All rights reserved.</p>
            </div>
        </div>
    )
}
export default Footer
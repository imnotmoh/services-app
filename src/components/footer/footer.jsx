import react from "react"
import "./footer.css"
const currentDate = new Date();
const currentYear = currentDate.getFullYear();






function Footer() {
    return <div className="footer">
        <div className="footerItems">
            <div>
                <h3>Headquarters</h3>
                <p>12787, Shehu Shagari way, Maitama, Abuja,Nigeria</p>
                <p>Tel. (123) 456-7890  </p>
                <p>Email: hello@reallygreatsite.com</p>
            </div>
            <div>
                <h3>OFFICE HOURS</h3>
                <p>Monday to Friday</p>
                <p>9:00 am to 5:00 pm</p>
                <p>Weekends by appointment</p>
            </div>

            <div>
                <h3>Useful Links</h3>
                <ul>
                    <li>Products</li>
                    <li>Contact us</li>
                    <li>FAQ</li>
                    <li>Services</li>
                </ul>
            </div>

            <div>
                <h3>Services</h3>
                <ul>
                    <li>Oil and Gas</li>
                    <li>Construction</li>
                    <li>Trade and Investments</li>
                    <li>Information Technology</li>
                    <li>Import and Export</li>
                </ul>
            </div>
        </div>
        <div className="socials">
            <h3>Socials</h3>
            <div className="sMedia">
                <i class="fa-brands fa-facebook fa-2xl"></i>
                <i class="fa-brands fa-instagram fa-2xl"></i>
                <i class="fa-brands fa-x-twitter fa-2xl"></i>
            </div>
            <p>Copy Rights {currentYear}</p>

        </div>


    </div>
}

export default Footer
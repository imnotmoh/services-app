import React from "react";
import Nav from "../nav/Nav";
import Sticker from "../service_sticker/sticker";
import Footer from "../footer/footer";
import Content from "../content/content";
import "./about_us.css"
import Imagedec2 from "../imagedec2/imagedec2";


function About_us() {
    return (<div className="AboutDiv">
        <Nav />
        <Sticker sticker="About us" />
        <div className="aboutuscont">
            <div className="sct1">
                <Content heading={null} body={["Welcome to Orion Atlantic Ltd, a dynamic and versatile company dedicated to excellence across multiple industries. Established with a vision to redefine standards and drive innovation, we pride ourselves on being a multifaceted force in commodities, agro-allied services, livestock and products, and international trade. Our operations extend beyond borders, reaching into Nigeria, Africa, and the United Kingdom.", "In the realm of infrastructure, our commitment to road works underscores our dedication to enhancing connectivity and contributing to local economies. With a skilled team utilizing cutting-edge technology, we strive for excellence in every project, ensuring durability and safety.", "As a trading company, we serve as manufacturers' representatives, covering the entire African region with a focus on commodities and agro-allied services. Our strategic partnership with Al Rowad further amplifies our capabilities in these ventures.", "Beyond our diverse business portfolio, we actively engage in investment plans in the United Kingdom, facilitating seamless buying and selling processes. At Orion Atlantic, we are not just a company; we are a driving force for positive change, committed to building a robust and interconnected future for the communities and industries we serve. Explore the possibilities with Orion Atlantic Ltd – where innovation meets excellence."]} />
                <img alt="skyscrapper" src="https://media.istockphoto.com/id/177046177/photo/blue-highrise-glass-skyscraper-street-low-angle-shot.jpg?s=2048x2048&w=is&k=20&c=du3cZZQgucIHTepp5GC-DJl61thlVncV1aJLlWZ7aHQ=" />
            </div>
            <div className="sct2">

                <div className="sct2_1">
                    <div><h3>Our People</h3>
                        <Imagedec2 alte="shaking hands" sorc="https://media.istockphoto.com/id/635974362/photo/building-a-network-towards-success.jpg?s=2048x2048&w=is&k=20&c=ZltlRVB1kvsl3mYbvPUmuMivXyuYenQhxCWEtAK7VQ0=" />
                    </div>
                    <p>ORION ATLANTIC Ltd brings together a seasoned team of industry leaders and field experts, each with a wealth of experience acquired over many years. Collaboratively, this team provides unparalleled expertise spanning various aspects of project planning, engineering, and construction-related solutions for our clients. Guided by our skilled Project and Technical Managers, the construction and engineering team is adept at delivering straightforward solutions to complex challenges. With a focus on quality, our experts excel in monitoring construction work and meticulously documenting the materials, labor, and equipment employed, ensuring precision and excellence in every project.</p>

                </div>
                <div className="profDiv">
                    <div>
                        <img alt="profile" src="https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=2048x2048&w=is&k=20&c=WRysog7FS3uk4_b3DWMmRyOVHYDtydJnkdC_4zLdGAY=" />
                        <h4>Chairman</h4>
                        <h4>Alhaji Sadiq Sani Abacha</h4>
                    </div>
                    <div>
                        <img alt="profile" src="https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=2048x2048&w=is&k=20&c=WRysog7FS3uk4_b3DWMmRyOVHYDtydJnkdC_4zLdGAY=" />
                        <h4>Executive Vice Chairman</h4>
                        <h4>Alhaji Mohammed Bello Ilyasu</h4>
                    </div>
                </div>
                <div className="corpV">

                    <div className="corpV2_1">
                        <h3>Corporate Values</h3>
                        <p>As a company of seasoned professionals, transparency and good corporate culture remain our top agenda. Corporate behaviour is driven by the values individuals hold as well as those that are part of the organization they work for. To further develop our corporate strengths we have established a corporate mandate to maintain strong core values that truly reflect the company{"'"}s philosophy . </p>
                        <p>At ORION ATLANTIC Ltd, the principle supporting this philosophy are permanenty ingrained in our corporate values.</p>
                        <ul>
                            <li>Integrity </li>
                            <li>Quality </li>
                            <li>Experience</li>
                            <li>Commitment </li>
                            <li>Detail</li>
                            <li>Adaptability & Flexibility</li>

                        </ul>
                    </div>
                    <img src="https://media.istockphoto.com/id/2062787919/photo/businessman-explaining-his-concept-during-a-meeting.jpg?s=2048x2048&w=is&k=20&c=v-qHM9OhvzAtFCsnkAgA1wm-WdaqJwbMkXRImWNirF8=" alt="corporate" />
                </div>
                <div className="hrpolicy">
                    <div>
                        <h3>Human Resources Policy</h3>
                        <img src="https://media.istockphoto.com/id/2148703154/photo/business-persons-on-meeting-in-the-office.jpg?s=1024x1024&w=is&k=20&c=PD5WCpkAzbJKe7aRfuP4dlZTfB43GPA2f7SQWUrNlsM=" alt="human resources" />
                    </div>
                    <p>At ORION ATLANTIC Ltd, fostering strong human relationships is a fundamental objective that underpins our commitment to providing unparalleled service to our clients. Recognizing our people as our greatest asset, we shape our human resources policies and practices on principles of openness, fairness, and mutual respect. Our employment principles prioritize the recruitment of competent, enthusiastic, and well-trained personnel, empowering individuals to take on responsibilities, exercise initiative, and actively contribute to the company{("'")}s progress.Acknowledging that sustained growth and success hinge on the attitude and effort of each team member, we place great emphasis on recruitment and retention strategies. We cultivate a positive working environment that not only values our employees but also provides them with opportunities for professional advancement. At ORION ATLANTIC Ltd, we believe that a harmonious and empowered workforce is the cornerstone of our success.</p>
                </div>
                <div className="safetyDiv">
                    <div>
                        <h3>Safety and Occupational Health Policy Statement</h3>
                        <p>At ORION ATLANTIC Ltd, the prioritization of Health, Safety, and Welfare is a cornerstone of our commitment, extending to the comprehensive protection of our employees and subcontractors. Beyond our workforce, we actively strive to ensure that all individuals potentially impacted by our operations remain safeguarded from health and safety risks.</p>
                        <p>We firmly believe that sound safety and occupational health management practices are not only imperative for the well-being of our employees but also serve the best interests of the communities in which we operate. </p>
                        <p>As a testament to this belief, ORION ATLANTIC Ltd consistently integrates safety and occupational health policies into our overarching business development strategies.</p>
                        <p>To actualize these commitments, we deploy the expertise and resources necessary to maintain safe and healthy working environments, aligning our sites with international standards. Our employees undergo rigorous training in accordance with Health and Safety programs to ensure they are well-prepared for any challenges that may arise.</p>
                        <p>In enforcing our dedication to safety, we mandate that all contractors comply with applicable health and safety standards, reinforcing our commitment to eliminating workplace hazards and ensuring the protection of our people.</p>

                    </div>
                    <div className="safetyImg">
                    <div className="simgDec"></div>
                    <img src="https://media.istockphoto.com/id/521261573/photo/workplace-safety-handbook-manual-and-occupational-equipment-for-work-training.jpg?s=2048x2048&w=is&k=20&c=GQI89vs2SCWasakhlBlPz85HiKsK3n7rjcMlzhBK3ts=" alt="safety"/>
                    </div>
                    
                </div>


            </div>


        </div>
        <Footer />
    </div>)
}


export default About_us
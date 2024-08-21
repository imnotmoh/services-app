import React from "react";
import "./construction.css"
import Nav from "../nav/Nav";
import Footer from "../footer/footer";
import Sticker from "../service_sticker/sticker";
import Content from "../content/content";
import Imagedec1 from "../imagedec1/imagedec1";
import Imagedec2 from "../imagedec2/imagedec2";

function Construction() {
    return <div className="construction">
        <Nav />
        <Sticker sticker="Construction" icon_class="fa-solid fa-screwdriver-wrench fa-7x" />
        <div className="consttruction">
        <div className="constructionDiv">
            <Content heading="Real Estate Development" body={["ORION ATLANTIC LTD is committed to designing and maintaining modern properties with the latest touch of art that is echo friendly and economically viable. In the United Kingdom, we also manage both residential, commercial buildings and we can help you invest in realty."]} />
            <Imagedec1 alte="real estate" sorc="https://media.istockphoto.com/id/1864268586/photo/the-glass-facade-of-the-office-skyscraper-is-made-of-dark-blue-glass.jpg?s=2048x2048&w=is&k=20&c=XY7U123HmYx0lzJOeMnsSCkOai0nyj0JhaTxHWkQSlg=" />
            <div className="imgaltttdgn">
            <Imagedec2 alte="house" sorc="https://www.shutterstock.com/shutterstock/photos/2233808169/display_1500/stock-photo-cityscape-of-a-residential-area-with-modern-apartment-buildings-new-green-urban-landscape-in-the-2233808169.jpg" />
            </div>
            </div>
        <div className="constructionDiv">
            <Imagedec1 alte="construction works" sorc="https://media.istockphoto.com/id/1266928564/photo/dump-trucks-transporting-platinum-ore-for-processing.jpg?s=2048x2048&w=is&k=20&c=F4cpCpGZZ0IODoLTqn53ghOP4fqRNEeHc-t6tRI-4rs=" />
            <Content heading="Construction Works" body={["ORION ATLANTIC LTD also engages in Roads, Building and Civil Constructions. Our partners are vast in Mechanical and Electrical works, making us very qualified and adequately equipped to undertake all kinds of construction projects across Nigeria."]} />
            <Imagedec2 alte="construction works" sorc="https://media.istockphoto.com/id/1297780288/photo/delivering-quality-construction-for-a-quality-lifestyle.webp?b=1&s=612x612&w=0&k=20&c=TcDbyXokffwtT6fieTVivWh95zDsB7F6hh7tSw99Ev4=" />
        </div>

        <div className="constructionDiv3">
            <Content heading="Road works" body={["Orion Atlantic Ltd is dedicated to advancing infrastructure through its commitment to high-quality road works. Our skilled team employs cutting-edge technology and industry-best practices to ensure durable and safe road construction and maintenance. From initial planning to execution, we prioritize efficiency and sustainability, covering a diverse range of projects, including urban roads and highways. Our dedication to community development is evident in our contribution to enhanced connectivity and local economies through well-constructed roads. Orion Atlantic Ltd stands committed to building a robust and interconnected future for the communities and industries we serve."]} />
            <Imagedec1 alte="real estate" sorc="https://media.istockphoto.com/id/1864268586/photo/the-glass-facade-of-the-office-skyscraper-is-made-of-dark-blue-glass.jpg?s=2048x2048&w=is&k=20&c=XY7U123HmYx0lzJOeMnsSCkOai0nyj0JhaTxHWkQSlg=" />
        </div>
        </div>
        <div className="buttondiv">
            <button>contact us</button>
        </div>

        <Footer />
    </div>
}

export default Construction
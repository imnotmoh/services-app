import React from "react";
import Nav from "../nav/Nav";
import "./oil-and-gas.css"
import Sticker from "../service_sticker/sticker";
import Imagedec1 from "../imagedec1/imagedec1";
import Content from "../content/content";
import Footer from "../footer/footer";
import Imagedec2 from "../imagedec2/imagedec2";

function Oil_and_gas() {
    return <div className="oil_gas_div">
        <Nav />
        <Sticker sticker="Oil and Gas" icon_class="fa-solid fa-droplet fa-7x" />
        <div className="sect1">
            <Content heading="Upstream and Downstream" body={["Orion Atlantic Ltd is deeply entrenched in the dynamic realm of Oil & Gas, proudly holding registration as a downstream Oil & Gas, Upstream, and Exploration and Production (E&P) company. Through strategic partnerships with Oil Offshore Combination Limited (OOCL) and Havilah Energy, we have positioned ourselves strategically to actively participate in the multifaceted domains of oil and gas in Nigeria.",
                "Our expertise extends to trading petroleum products such as AGO, DPK, and PMS, backed by a robust marketing and distribution network that serves esteemed participants in the oil and gas industry nationwide. ",
                "Also specializing in upstream operations, we offer comprehensive services including maritime support, equipment supply, and onshore and offshore platforms services for both indigenous oil companies and international oil companies (IOCs).",
                "Tailoring our Marketing & Services to meet domestic and international demands, we provide premium products and services at competitive prices, ensuring satisfaction for our clients in Nigeria and beyond."]} />
            <Imagedec1 alte="refinery picture" sorc="https://media.istockphoto.com/id/508754515/photo/distillation-tank.jpg?s=2048x2048&w=is&k=20&c=__kfUWRXXW1UoSDjUFsfkcPYDyXfxJDNRb1rCddB5vs=" />
        </div>
        <div className="sect1 sect2">
            <Imagedec1 alte="jet refueling" sorc="https://media.istockphoto.com/id/157314679/photo/aircraft-fuelling.jpg?s=2048x2048&w=is&k=20&c=t4ZH-rz4bqNdvGDNI0z6dW-hlnd9ippLTHbMxTdpKOo=" />
            <div className="jet">
                <Content heading="Jet A1 Aviation Fuel Supplies" body={["Orion Atlantic Ltd, in collaboration with H2 JET Services Limited, stands proudly within an esteemed network of trusted suppliers. Offering a diverse range of fuels including Jet A-1, TS1, JP8, AvGas, and more, we are dedicated to fulfilling your fueling needs within the Nigerian market with precision and reliability."]} />
                <Imagedec2 alte="jet refueling" sorc="https://media.istockphoto.com/id/980044756/photo/sunset-at-the-airport-refueling-of-the-airplane-before-flight-aircraft-maintenance-fuel-at-the.jpg?s=2048x2048&w=is&k=20&c=jx4tw9Vo8keP1VLn-R20tO_VBhYjP_0EcaY94Ebv9x4=" />
            </div>
        </div>
        <div className="sect3">
            <div>
            <h3>Comprehensive Quality Assurance</h3>
            <p>Our Quality Management System successfully meets the stringent standards of BS EN ISO 9001:2008. Aligned with our organizational commitment, we ensure compliance with national statutory legislation and diligently consider all regulatory, legal, and industry-specific obligations to uphold the highest standards of excellence.</p>
            </div>
        </div>

        <div className="buttondiv">
        <button>contact us</button>
        </div>

        <Footer />
    </div>

}

export default Oil_and_gas
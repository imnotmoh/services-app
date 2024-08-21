import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/footer";
import Sticker from "../service_sticker/sticker";
import Content from "../content/content";
import Imagedec1 from "../imagedec1/imagedec1";
import Imagedec2 from "../imagedec2/imagedec2";
import "./trading_investment.css"

import Alrowad from "./30715774_2030722977192279_3969771871304357884_n.jpg"



function Trading_Investment() {

    return (<div className="trading_invest">
        <Nav />
        <Sticker sticker="Trading and Investment" />
        <div className="tradeDIv">
            <Content heading="A Multifaceted Force in Commodities, Agro-Allied Services, and Global Investments" body={["ORION ATLANTIC LTD is a dynamic and versatile company operating across various sectors, including commodities, agro-allied services, livestock and products, and import-export ventures in Nigeria and across Africa. Additionally, we actively participate in investment plans in the United Kingdom, facilitating the buying and selling process.", "Within the realms of commodities and agro - allied services, Orion Atlantic Ltd is engaged in livestock and product trading.As a trading company, we extend our reach as manufacturers' representatives, with the capability to cover the entire African region. Our strategic partnership with Al Rowad further strengthens our position in these ventures, underscoring our commitment to excellence and comprehensive service offerings."]} />
            <Imagedec1 sorc={Alrowad} alte="alrowad" />
        </div>
        <div className="buttondiv">
            <button>contact us</button>
        </div>
        <Footer />
    </div>)

}


export default Trading_Investment
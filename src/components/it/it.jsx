import react from "react"
import "./it.css"
import Nav from "../nav/Nav"
import Footer from "../footer/footer"
import Sticker from "../service_sticker/sticker"
import Content from "../content/content"
import Imagedec1 from "../imagedec1/imagedec1"

function It() {
    return <div className="itpage">
        <Nav />
        <Sticker sticker="IT" icon_class="fa-solid fa-computer fa-7x" />
        <div className="gridDiv">
            <Content heading="Information Technology" body={["ORION ATLANTIC LTD, in collaboration with its sister companies - CLEVLAND ORION, Xchange Box Solutions, and KAD ICT HUB, is dedicated to addressing clients' real-world ICT challenges with a commitment to quality service and cutting-edge technology. With extensive experience in partnering with state governments and large-scale commercial enterprises, we serve as your comprehensive solution provider for data processing system/process design, development, implementation, management, evaluation, and certification.", "We offer a spectrum of Information and Communication Technology services, encompassing e - governance, e - health, and Electronic Tax Tracking Payment System Solution(ETTTPS).Throughout our years of unwavering presence, ORION has effectively executed a diverse array of projects in the expansive field of Information and Communications Technologies(ICT), continually advancing our technical expertise through active participation in research."]} />
            <div className="image2"><Imagedec1 alte="it" sorc="https://media.istockphoto.com/id/1366233833/photo/business-people-team-working-at-office-with-tablet-and-document-doing-planning-analyzing-the.jpg?s=2048x2048&w=is&k=20&c=52OhNQSTkxkQbz9DAPnXQiSd2a_V-4yMgGGXIKPnaqA=" /></div>

            <div className="imagebg"><Imagedec1 alte="human resource" sorc="https://media.istockphoto.com/id/1450388655/photo/planning-project-management-and-marketing-with-business-people-in-meeting-for-research.jpg?s=2048x2048&w=is&k=20&c=jP4dFDiyuU-9pmGNDXXplZkLAtZec9Eqpib_gBkLzFw=" /></div>
            <Content heading="Payroll & Human resources management System" body={["Financial system that administers employee's payroll, by calculating withholdings or deductions, processing direct deposits, voiding payments and generating tax forms and other requirement reports. Main features:", "• Tax calculation by determining tax amounts for each employee is a basic payroll function", "• Deduction calculations as health plans, union dues, deferred compensation plans and other common requirements", "• Insights and visibility of basic operations, through report generation on key payroll operations", "• Integration with 3rd party human resources management systems"]} />
            <Content heading="Customer Relationship Management (CRM)" body={["ORION's Citizen Request Management System (CRMS) is the digital answer to the growing need of govemmental structures (central & local) for responding quickly and accurately to cifizen requests for answers/information about policies, practices, and procedures.", "ORION's CRM system can easily handle business data on a daily basis.", "Main features:", "• Simplify and optimize the work of different Departments", "• Simplified management of requests covering the same subject", "• Knowiedge base to guide what response can be provided", "• Processes integration, specific to each Department"]} />
            <div className="imagebg"><Imagedec1 alte="customer relationship" sorc="https://media.istockphoto.com/id/1329866400/photo/shot-of-a-young-man-using-a-headset-and-computer-in-a-modern-office.jpg?s=2048x2048&w=is&k=20&c=Loq1iZyvLC_T5wCyOIu4ref5K3g1t8VGYEoxUo5aAzc=" /></div>
        </div>

        <div className="buttondiv">
            <button>contact us</button>
        </div>
        <Footer />
    </div>
}


export default It
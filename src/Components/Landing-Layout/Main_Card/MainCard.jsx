import React from "react";
import Navbar from "../Navbar/Navbar";
// Bill Faching Section
import BillFaching_Section from "../Sections/Section_One/BillFaching_Section";
// Services Section
import Services_Section from "../Sections/Service_Sction/Services_Section";
// section two
import Heading_For_Sction_two from "../Sections/Section_Two/heading";
import Information_Section_Two from "../Sections/Section_Two/Information_Section_Two";
// section three
import Heading_For_Sction_Three from "../Sections/Section_Three/Heading";
import Information_Section_Three from "../Sections/Section_Three/Information_Section_Three";
// Section Four
import Information_Section_Four from "../Sections/Section_Four/Information_Section_Four";

// pages
// B_Section_One
import B_Section_One_Heading from "../Page/Business_api/B_Sction_One/B_Section_One_Heading";
import B_Section_One_Information from "../Page/Business_api/B_Sction_One/B_Section_One_Information";
// B_Section_Two
import B_Section_Two_Heading from "../Page/Business_api/B_Section_Two/B_Section_Two_Heading";
import B_Section_Two_Information from "../Page/Business_api/B_Section_Two/B_Section_Two_Information";
import B_Section_Two_blue from "../Page/Business_api/B_Section_Two/B_Section_Two_blue";
// B_Section_Three
import B_Section_Three_Heading from "../Page/Business_api/B_Section_Three/B_Section_Three_Heading";
import B_Section_Three_Information from "../Page/Business_api/B_Section_Three/B_Section_Three_Information";
// section four
import B_Section_Four_Heading from "../Page/Business_api/B_Section_Four/B_Section_Heading";
import B_Section_Four_Information from "../Page/Business_api/B_Section_Four/B_Section_Information";
import B_Section_four_img from "../Page/Business_api/B_Section_Four/B_Section_four_img";
// Contect us page
import Contect_us_Section from "../Page/Contect_us_Section/Contect_us";
// Sign in and Login page
import Log_In from "../../Auth/Log_in/Log_In";
import Sign_up from "../../Auth/Creat_Account/Sign_Up";
import Footer from "../Footer/Footer";
import { Switch, Route } from "react-router-dom";
function MainCard() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/">
                    <Navbar />
                    <BillFaching_Section />
                    <Services_Section />
                    <Heading_For_Sction_two />
                    <Information_Section_Two />
                    <Heading_For_Sction_Three />
                    <Information_Section_Three />
                    <Information_Section_Four />
                    <Footer />
                </Route>
                <Route exact path="/business_api">
                    <Navbar />
                    <B_Section_One_Heading />
                    <B_Section_One_Information />
                    <B_Section_Two_Heading />
                    <B_Section_Two_Information />
                    <B_Section_Two_blue />
                    <B_Section_Three_Heading />
                    <B_Section_Three_Information />
                    <B_Section_Four_Heading />
                    <B_Section_Four_Information />
                    <B_Section_four_img />
                    <Footer />
                </Route>

                <Route exact path="/contact_us">
                    <Navbar />
                    <Contect_us_Section />
                    <Footer />
                </Route>
                <Route exact path="/auth/login">
                    <Navbar />
                    <Log_In />
                </Route>
                <Route exact path="/auth/register">
                    <Navbar />
                    <Sign_up />
                </Route>
            </Switch>
        </React.Fragment>
    );
}

export default MainCard;

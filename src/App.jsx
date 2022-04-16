import { useState, React } from "react";
import { Switch, Route } from "react-router-dom";
// import Landing_layout from "./Components/Landing-Layout/Main_Card/MainCard";
// lanading layout
import Navbar from "./Components/Landing-Layout/Navbar/Navbar";
import BillFaching_Section from "./Components/Landing-Layout/Sections/Section_One/BillFaching_Section";
import Services_Section from "./Components/Landing-Layout/Sections/Service_Sction/Services_Section";
import Heading_For_Sction_two from "./Components/Landing-Layout/Sections/Section_Two/heading";
import Information_Section_Two from "./Components/Landing-Layout/Sections/Section_Two/Information_Section_Two";
import Heading_For_Sction_Three from "./Components/Landing-Layout/Sections/Section_Three/Heading";
import Information_Section_Three from "./Components/Landing-Layout/Sections/Section_Three/Information_Section_Three";
import Information_Section_Four from "./Components/Landing-Layout/Sections/Section_Four/Information_Section_Four";

// business_api
import B_Section_One_Heading from "./Components/Landing-Layout/Page/Business_api/B_Sction_One/B_Section_One_Heading";
import B_Section_One_Information from "./Components/Landing-Layout/Page/Business_api/B_Sction_One/B_Section_One_Information";
import B_Section_Two_Heading from "./Components/Landing-Layout/Page/Business_api/B_Section_Two/B_Section_Two_Heading";
import B_Section_Two_Information from "./Components/Landing-Layout/Page/Business_api/B_Section_Two/B_Section_Two_Information";
import B_Section_Two_blue from "./Components/Landing-Layout/Page/Business_api/B_Section_Two/B_Section_Two_blue";
import B_Section_Three_Heading from "./Components/Landing-Layout/Page/Business_api/B_Section_Three/B_Section_Three_Heading";
import B_Section_Three_Information from "./Components/Landing-Layout/Page/Business_api/B_Section_Three/B_Section_Three_Information";
import B_Section_Four_Heading from "./Components/Landing-Layout/Page/Business_api/B_Section_Four/B_Section_Heading";
import B_Section_Four_Information from "./Components/Landing-Layout/Page/Business_api/B_Section_Four/B_Section_Information";
import B_Section_four_img from "./Components/Landing-Layout/Page/Business_api/B_Section_Four/B_Section_Four_img";
//Contect_us_Section
import Contect_us_Section from "./Components/Landing-Layout/Page/Contect_us_Section/Contect_us";
// lognin page

import Login from "./Components/Auth/Log_in/Log_in";
// sign up
import SignUp from "./Components/Auth/Creat_Account/Sign_Up";
import Footer from "./Components/Landing-Layout/Footer/Footer";
// import UserMainCard from "./Components/User/MainCard/MainCard";
// user section
import HorizontalnavBar from "./Components/User/Navebar/Navbar";
import VarticalNavbar from "./Components/User/Navebar/Navbar_User";
import DasbordContennt from "./Components/User/pages/DashbordContent/DashbordContent";
import Try_Service from "./Components/User/pages/Try_services/Try_services";
import Operator_Status from "./Components/User/pages/oporetor_status/Opretor_Status";
import Plan from "./Components/User/pages/Plan/Plan";
import PlanDetils from "./Components/User/pages/Plan/PlanDetils";

//helpers
import Card from "./Components/Helper/Card";
import Container from "./Components/Helper/Container";
function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Navbar
                        utils=" text-white border-primary_bg"
                        forButton="text-primary bg-white"
                        bg="bg-primary_dark"
                    />
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
                    <Navbar
                        utils="text-black bg-white border-bottom border-slate-300"
                        forButton="bg-primary_dark text-white"
                        bg="bg-white"
                    />
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
                    <Navbar
                        utils="text-black bg-white border-bottom border-slate-300"
                        forButton="bg-primary_dark text-white"
                        bg="bg-white"
                    />
                    <Contect_us_Section />
                    <Footer />
                </Route>
                <Route exact path="/auth/register">
                    <Navbar
                        utils=" text-white border-primary_bg"
                        forButton="text-primary bg-white"
                        bg="bg-primary_dark"
                    />
                    <SignUp />
                </Route>
                <Route exact path="/auth/login">
                    <Navbar
                        utils=" text-white border-primary_bg"
                        forButton="text-primary bg-white"
                        bg="bg-primary_dark"
                    />
                    <Login />
                </Route>
                {/* user's routes start */}
                <Route exact path="/users/dashboard">
                    <HorizontalnavBar />
                    <VarticalNavbar />
                    <DasbordContennt />
                </Route>
                <Route exact path="/users/try_service">
                    <HorizontalnavBar />
                    <VarticalNavbar />
                    <Try_Service />
                </Route>
                <Route exact path="/users/op_status">
                    <HorizontalnavBar />
                    <VarticalNavbar />
                    <Container>
                        <Card>
                            <Operator_Status />
                        </Card>
                    </Container>
                </Route>
                <Route exact path="/users/plan">
                    <HorizontalnavBar />
                    <VarticalNavbar />
                    <Container>
                        <Card>
                            <Plan />
                            <PlanDetils name="Starter+" req="4,000" price="6599" />
                            <PlanDetils name="Basic+" req="7,000" price="8799" />
                            <PlanDetils name="Pro+" req="10,000" price="11999"/>
                        </Card>
                    </Container>
                </Route>
            </Switch>
        </div>
    );
}

export default App;

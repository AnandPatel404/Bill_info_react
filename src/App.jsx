import { React, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

// lanading layout
const Navbar = lazy(() => import("./Components/Landing-Layout/Navbar/Navbar"));
const BillFaching_Section = lazy(() =>
    import(
        "./Components/Landing-Layout/Sections/Section_One/BillFaching_Section"
    )
);
const Services_Section = lazy(() =>
    import(
        "./Components/Landing-Layout/Sections/Service_Sction/Services_Section"
    )
);
const Heading_For_Sction_two = lazy(() =>
    import("./Components/Landing-Layout/Sections/Section_Two/heading")
);
const Information_Section_Two = lazy(() =>
    import(
        "./Components/Landing-Layout/Sections/Section_Two/Information_Section_Two"
    )
);
const Heading_For_Sction_Three = lazy(() =>
    import("./Components/Landing-Layout/Sections/Section_Three/Heading")
);
const Information_Section_Three = lazy(() =>
    import(
        "./Components/Landing-Layout/Sections/Section_Three/Information_Section_Three"
    )
);
const Information_Section_Four = lazy(() =>
    import(
        "./Components/Landing-Layout/Sections/Section_Four/Information_Section_Four"
    )
);

// business_api
const B_Section_One_Heading = lazy(() =>
    import(
        "./Components/Landing-Layout/Page/Business_api/B_Sction_One/B_Section_One_Heading"
    )
);
const B_Section_One_Information = lazy(() =>
    import(
        "./Components/Landing-Layout/Page/Business_api/B_Sction_One/B_Section_One_Information"
    )
);
const B_Section_Two_Heading = lazy(() =>
    import(
        "./Components/Landing-Layout/Page/Business_api/B_Section_Two/B_Section_Two_Heading"
    )
);
const B_Section_Two_Information = lazy(() =>
    import(
        "./Components/Landing-Layout/Page/Business_api/B_Section_Two/B_Section_Two_Information"
    )
);
const B_Section_Two_blue = lazy(() =>
    import(
        "./Components/Landing-Layout/Page/Business_api/B_Section_Two/B_Section_Two_blue"
    )
);
const B_Section_Three_Heading = lazy(() =>
    import(
        "./Components/Landing-Layout/Page/Business_api/B_Section_Three/B_Section_Three_Heading"
    )
);
const B_Section_Three_Information = lazy(() =>
    import(
        "./Components/Landing-Layout/Page/Business_api/B_Section_Three/B_Section_Three_Information"
    )
);
const B_Section_Four_Heading = lazy(() =>
    import(
        "./Components/Landing-Layout/Page/Business_api/B_Section_Four/B_Section_Heading"
    )
);
const B_Section_Four_Information = lazy(() =>
    import(
        "./Components/Landing-Layout/Page/Business_api/B_Section_Four/B_Section_Information"
    )
);
const B_Section_four_img = lazy(() =>
    import(
        "./Components/Landing-Layout/Page/Business_api/B_Section_Four/B_Section_Four_img"
    )
);
//Contect_us_Section
const Contect_us_Section = lazy(() =>
    import("./Components/Landing-Layout/Page/Contect_us_Section/Contect_us")
);
// lognin page
const Login = lazy(() => import("./Components/Auth/Log_in/Log_in"));
// sign up
const SignUp = lazy(() => import("./Components/Auth/Creat_Account/Sign_Up"));
// forget password
const Forget_Password = lazy(() =>
    import("./Components/Auth/Forget_Password/Forget_password")
);
const Footer = lazy(() => import("./Components/Landing-Layout/Footer/Footer"));

// user section
const VarticalNavbar = lazy(() =>
    import("./Components/User/Navebar/Navbar_User")
);
const DasbordContennt = lazy(() =>
    import("./Components/User/pages/DashbordContent/DashbordContent")
);
const Try_Service = lazy(() =>
    import("./Components/User/pages/Try_services/Try_services")
);
const Operator_Status = lazy(() =>
    import("./Components/User/pages/oporetor_status/Opretor_Status")
);
const Plan = lazy(() => import("./Components/User/pages/Plan/Plan"));
const PlanDetils = lazy(() =>
    import("./Components/User/pages/Plan/PlanDetils")
);
const Purchase_Report = lazy(() =>
    import("./Components/User/pages/purchase_report/Purchase_Report")
);

const Api_docs = lazy(() =>
    import("./Components/User/pages/Api_Docs/Api_docs")
);
const Api_docs_info = lazy(() =>
    import("./Components/User/pages/Api_Docs/Api_docs_info")
);

const Api_cred = lazy(() =>
    import("./Components/User/pages/api_cred/Api_cred")
);
const Api_cred_info = lazy(() =>
    import("./Components/User/pages/api_cred/Api_cred_info")
);
// profile

const Profile = lazy(() => import("./Components/User/pages/Profile/Profile"));
const Change_password = lazy(() =>
    import("./Components/User/pages/Change_Password/Chang_Password")
);
const User_Footer = lazy(() => import("./Components/User/Footer/User_Footer"));
//helpers
const Card = lazy(() => import("./Components/Helper/Card"));
const Container = lazy(() => import("./Components/Helper/Container"));
import Loader from "./Components/Helper/Loader";

function App() {
    return (
        <div>
            <Switch>
                <Suspense fallback={<Loader />}>
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
                    <Route exact path="/auth/forgot">
                        <Navbar
                            utils=" text-white border-primary_bg"
                            forButton="text-primary bg-white"
                            bg="bg-primary_dark"
                        />
                        <Forget_Password />
                    </Route>
                    {/* user's routes start */}
                    <Route exact path="/users/dashboard">
                        <VarticalNavbar>
                            <DasbordContennt />
                            <User_Footer />
                        </VarticalNavbar>
                    </Route>
                    <Route exact path="/users/try_service">
                        <VarticalNavbar>
                            <Try_Service />
                            <User_Footer />
                        </VarticalNavbar>
                    </Route>
                    <Route exact path="/users/op_status">
                        <VarticalNavbar>
                            <Container>
                                <Card>
                                    <Operator_Status />
                                </Card>
                            </Container>
                        </VarticalNavbar>
                        <User_Footer />
                    </Route>
                    <Route exact path="/users/plan">
                        <VarticalNavbar>
                            <Container>
                                <Card>
                                    <Plan />
                                    <PlanDetils
                                        name="Starter+"
                                        req="4,000"
                                        price="6599"
                                    />
                                    <PlanDetils
                                        name="Basic+"
                                        req="7,000"
                                        price="8799"
                                    />
                                    <PlanDetils
                                        name="Pro+"
                                        req="10,000"
                                        price="11999"
                                    />
                                </Card>
                            </Container>
                        </VarticalNavbar>
                        <User_Footer />
                    </Route>
                    <Route exact path="/users/purchase_report">
                        <VarticalNavbar>
                            <Container>
                                <Card>
                                    <Purchase_Report />
                                </Card>
                            </Container>
                        </VarticalNavbar>
                        <User_Footer />
                    </Route>
                    <Route exact path="/users/api_docs">
                        <VarticalNavbar>
                            <Container>
                                <Api_docs />
                                <Card>
                                    <Api_docs_info />
                                </Card>
                                <Api_docs />
                                <Card>
                                    np
                                    <Api_docs_info />
                                </Card>
                            </Container>
                        </VarticalNavbar>
                        <User_Footer />
                    </Route>
                    <Route exact path="/users/api_cred">
                        <VarticalNavbar>
                            <Container>
                                <Api_cred />
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                    <Card>
                                        <Api_cred_info
                                            name="APi Token"
                                            des="You can use below form to add new coupons and access via secured Rest API"
                                            inputName="APi Token"
                                            buttonName="Re-Generate"
                                        />
                                    </Card>
                                    <Card>
                                        <Api_cred_info
                                            name="IP Address"
                                            des="You can use below form to add new coupons and access via secured Rest API"
                                            inputName="IP Address"
                                            buttonName="Update"
                                        />
                                    </Card>
                                </div>
                            </Container>
                        </VarticalNavbar>
                        <User_Footer />
                    </Route>
                    <Route exact path="/users/profile">
                        <VarticalNavbar>
                            <Container>
                                <Card>
                                    <Profile />
                                </Card>
                            </Container>
                        </VarticalNavbar>
                        <User_Footer />
                    </Route>
                    <Route exact path="/users/change_password">
                        <VarticalNavbar>
                            <Container>
                                <Card>
                                    <Change_password />
                                </Card>
                            </Container>
                        </VarticalNavbar>
                        <User_Footer />
                    </Route>
                </Suspense>
            </Switch>
        </div>
    );
}

export default App;

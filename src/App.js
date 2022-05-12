import {Fragment} from "react";
import Hero from "./components/Hero/hero";
import Portfolio from "./components/Portfolio/portfolio";
import Testimonial from "./components/Testimonial/testimonial";
import Awards from "./components/Awards/Awards";
import Consultant from "./components/Consultant/Consultant";
import {Route} from "react-router-dom";
import PortfolioPage from "./pages/Portfolio/portfolio";
import PageTitle from "./components/PageTitle/PageTitle";

const App = () => {


    return (
        <PageTitle title="Faramouj">
            <Route path="/" exact>
                <Hero/>
                <Portfolio/>
                <Testimonial/>
                <Awards/>
                <Consultant/>
            </Route>
            <Route path="/portfolios">
                <PortfolioPage />
            </Route>
        </PageTitle>
    );
};

export default App;
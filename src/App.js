import {Fragment} from "react";
import Hero from "./components/Hero/hero";
import Portfolio from "./components/Portfolio/portfolio";
import Testimonial from "./components/Testimonial/testimonial";
import Awards from "./components/Awards/Awards";
import Consultant from "./components/Consultant/Consultant";

const App = () => {


    return (
        <Fragment>
            <Hero/>
            <Portfolio/>
            <Testimonial/>
            <Awards/>
            <Consultant/>
        </Fragment>
    );
};

export default App;
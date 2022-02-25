import {Fragment} from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
    return (
      <Fragment>
          <header>
              <Header/>
          </header>
          <main>
              {props.children}
          </main>
          <footer>
              <Footer/>
          </footer>
      </Fragment>
    );
};

export default Layout;
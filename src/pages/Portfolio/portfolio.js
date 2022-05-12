import {Link} from "react-router-dom";
import Portfolios from "../../components/Portfolios/portfolios";
import PageTitle from "../../components/PageTitle/PageTitle";
import Button from "../../components/UI/button";

const PortfolioPage = () => {

    return (
      <PageTitle title="Portfolio">
          <h2 className="portfolio-title">
              فراموج 10 ساله که تونسته به رشد کسب و کار ها تو فضای آنلاین کمک کنه و از نمونه کار های موفق ما میشه به موارد زیر اشاره کرد
          </h2>
          <Portfolios />
          <div className="btn-home">
              <Link to="/">
                  <Button>
                      بازگشت به صفحه اصلی
                  </Button>
              </Link>
          </div>
      </PageTitle>
    );
};

export default PortfolioPage;
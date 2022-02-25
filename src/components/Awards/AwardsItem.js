import award1 from '../../assets/images/awards/award-1.png';
import award2 from '../../assets/images/awards/award-2.png';
import award3 from '../../assets/images/awards/award-3.png';
import award4 from '../../assets/images/awards/award-4.png';
import award5 from '../../assets/images/awards/award-5.png';
import {Fragment} from "react";

const AwardsItem = () => {

    return (
        <Fragment>
            <li>
                <img src={award1} alt="award1" />
            </li>
            <li>
                <img src={award2} alt="awards1" />
            </li>
            <li>
                <img src={award3} alt="awards1" />
            </li>
            <li>
                <img src={award4} alt="awards1" />
            </li>
            <li>
                <img src={award5} alt="awards1" />
            </li>
        </Fragment>
    );
};

export default AwardsItem;
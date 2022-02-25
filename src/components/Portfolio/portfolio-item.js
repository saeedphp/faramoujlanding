import styles from './portfolio-item.module.css';
import tajKalaaImg from '../../assets/images/portfolio/portfolio-tajkalaa.jpg';
import yasminImg from '../../assets/images/portfolio/portfolio-yasmin.jpg';
import mahanImg from '../../assets/images/portfolio/portfolio-mahan.jpg';
import mammutImg from '../../assets/images/portfolio/portfolio-mammut.jpg';
import Button from "../UI/button";
import {Fragment} from "react";

const PortfolioItem = () => {

    const tajStyle = {
        backgroundImage: `url(${tajKalaaImg})`,
    };

    const yasminStyle = {
        backgroundImage: `url(${yasminImg})`,
    };

    const mahanStyle = {
        backgroundImage: `url(${mahanImg})`,
    };

    const mammutStyle = {
        backgroundImage: `url(${mammutImg})`,
    };

    return (
        <Fragment>
            <li className={styles.item}>
                <div className={`${styles['item-card']}`}>
                    <div className={`${styles['item-card__info']}`}>
                        <h3>
                            تاج کالا
                        </h3>
                        <p>
                            فروشگاه تاج كالا ابتدا سال ٩١ در حوزه فروش لوازم خانگی در شهر بانه با نام بازرگانی تاج آغاز به
                            كار كرده است. فعالیت فروشگاه در ابتدای كار صرفا واردات كولرگازی بوده و به مرور زمان اقلامی از
                            قبیل یخچال، لباسشويی و ظرفشويی به فروشگاه اضافه شدند و واردات كولر گازی كمرنگ تر شد. سال ٩٩
                            فعالیت تاج کالا به دليل پاندمی كرونا به سمت فروش آنلاین كشیده شد و همزمان به شهر تهران انتقال
                            یافت. هدف اصلی فروشگاه تاج کالا واردات لوازم خانگی درجه یک از برندهای خارجی در يك شرايط امن با
                            خيال آسوده می باشد.
                        </p>
                        <Button>
                            <a href="https://tajkalaa.ir">
                                مشاهده وب سایت
                            </a>
                        </Button>
                    </div>
                    <div className={`${styles['item-card__img']}`}>
                        <div className={styles.img} style={tajStyle}>

                        </div>
                    </div>
                </div>
            </li>
            <li className={styles.item}>
                <div className={`${styles['item-card']} ${styles['item-card__even']}`}>
                    <div className={`${styles['item-card__img']}`}>
                        <div className={styles.img} style={yasminStyle}>

                        </div>
                    </div>
                    <div className={`${styles['item-card__info']}`}>
                        <h3>
                            یاسمین گلد
                        </h3>
                        <p>
                            برند‌ یاسمین گلد در سال ۲۰۱۴، توسط یاسمین رستمیان تأسیس و با هدف طراحی منحصر به فرد طلا به صورت سفارشی فعالیت خود را آغاز نمود. مجموعه یاسمین‌گلد که لاین هنری یاسان طلا می‌باشد همیشه در نوآوری در حوزه‌ی طراحی طلا و جواهر در تلاش بوده و توانسته محصولات دیگری در حوزه‌ی مُد مانند کیف، لباس، عطر ارائه دهد. از مهمترین رکن‌های برند یاسمین‌گلد طراحی خاص و ارائه‌ی باکیفیت، مطابق با استانداردهای جهانی می‌باشد. مشتری مداری از نکات مورد توجه خانم یاسمین رستمیان می‌باشد که هم در فروش آنلاین و هم حضوری مشتریان بتوانند در کمال راحتی و اعتماد کامل در فضایی دلچسب، خرید خود را انجام‌ دهند.
                        </p>
                        <Button>
                            <a href="https://yasminegold.ir/">
                                مشاهده وب سایت
                            </a>
                        </Button>
                    </div>
                </div>
            </li>
            <li className={styles.item}>
                <div className={`${styles['item-card']}`}>
                    <div className={`${styles['item-card__info']}`}>
                        <h3>
                            ماهان
                        </h3>
                        <p>
                            مدرسه عالی کسب‌وکار ماهان (Mahan Business School) به‌عنوان اولین مدرسه کسب‌وکار در ایران از سال 1384 فعالیت‌های خود را آغاز کرده است. مجموعه ماهان از روز آغاز فعالیت خود توانسته 280 دوره آنلاین و حضوری برگزار کرده است. مدرسه عالی کسب‌وکار ماهان همچنین اولین و تنها بیزینس اسکول کشور است که دارای استاندارهای AMBA (سازمانی بین‌المللی که در سال 1967 تأسیس شده و در حوزه اعتباربخشی و اعتبارسنجی بیزینس اسکول‌های دنیا فعالیت دارد) بوده و به عضویت این سازمان درآمده است.
                        </p>
                        <Button>
                            <a href="https://mahanmcc.com">
                                مشاهده وب سایت
                            </a>
                        </Button>
                    </div>
                    <div className={`${styles['item-card__img']}`}>
                        <div className={styles.img} style={mahanStyle}>

                        </div>
                    </div>
                </div>
            </li>
            <li className={styles.item}>
                <div className={`${styles['item-card']} ${styles['item-card__even']}`}>
                    <div className={`${styles['item-card__img']}`}>
                        <div className={styles.img} style={mammutStyle}>

                        </div>
                    </div>
                    <div className={`${styles['item-card__info']}`}>
                        <h3>
                            ماموت
                        </h3>
                        <p>
                            ماموت با استفاده از مدرن‌ترين تجهيزات و خطوط توليد توانسته است به عنوان يكی از شناخته‌شده‌ترين توليد كنندگان ساندويچ پانل در خاورميانه شناخته شود. توليد با كيفيت ساندويچ پانل های دنيای ماموت نتيجه استفاده از مواد با كيفيت، طراحی محصول با رعايت نكات و محاسبات مهندسی و فرآيند توليد استاندارد و به روز می‌باشد. اهميت زمان تحويل محصول در پروژه‌های بزرگ از پارامترهای تعيين كننده می‌باشد كه دنيای ماموت توانسته است با رعايت جدول‌های زماني تحويل محصولات در كنار خريداران به هرچه سريع‌تراجرا شدن پروژه‌ها كمک شايانی نمايد.
                        </p>
                        <Button>
                            <a href="http://mammut.faramouj.ir/">
                                مشاهده وب سایت
                            </a>
                        </Button>
                    </div>
                </div>
            </li>
        </Fragment>
    )
};

export default PortfolioItem;
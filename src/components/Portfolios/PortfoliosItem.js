import styles from "./PortfoliosItem.module.css";
import React from "react";
import tajkalaa from '../../assets/images/portfolio/portfolio-tajkalaa.jpg';
import tajkalaaLogo from '../../assets/images/logo/tajkalaa.webp';
import mahan from '../../assets/images/portfolio/portfolio-mahan.jpg';
import mammut from '../../assets/images/portfolio/portfolio-mammut.jpg';
import yasmine from '../../assets/images/portfolio/portfolio-yasmin.jpg';
import moringa from '../../assets/images/portfolio/portfoli-moringa.webp';
import acasa from '../../assets/images/portfolio/portfolio-acasa.webp';
import behkarchoob from '../../assets/images/portfolio/portfolio-behkarchoob.webp';
import hkj from '../../assets/images/portfolio/portfolio-hassanzade.webp';
import iranian001 from '../../assets/images/portfolio/portfolio-001.webp';

const DUMMY_EVENTS = [
    {
        id: 1,
        title: 'تاج کالا',
        description: 'فروشگاه تاج كالا ابتدا سال ٩١ در حوزه فروش لوازم خانگی در شهر بانه با نام بازرگانی تاج آغاز به كار كرده است. فعالیت فروشگاه در ابتدای كار صرفا واردات كولرگازی بوده و به مرور زمان اقلامی از قبیل یخچال، لباسشويی و ظرفشويی به فروشگاه اضافه شدند و واردات كولر گازی كمرنگ تر شد. سال ٩٩ فعالیت تاج کالا به دليل پاندمی كرونا به سمت فروش آنلاین كشیده شد و همزمان به شهر تهران انتقال یافت. هدف اصلی فروشگاه تاج کالا واردات لوازم خانگی درجه یک از برندهای خارجی در يك شرايط امن با خيال آسوده می باشد.\n' +
            '\n',
        image: `${tajkalaa}`,
        link: 'https://tajkalaa.ir',
        enTitle: `tajkalaa.ir`,
        category: 'WordPress',
        isFeatured: true,
    },
    {
        id: 2,
        title: 'یاسمین گلد',
        description: 'برند‌ یاسمین گلد در سال ۲۰۱۴، توسط یاسمین رستمیان تأسیس و با هدف طراحی منحصر به فرد طلا به صورت سفارشی فعالیت خود را آغاز نمود. مجموعه یاسمین‌گلد که لاین هنری یاسان طلا می‌باشد همیشه در نوآوری در حوزه‌ی طراحی طلا و جواهر در تلاش بوده و توانسته محصولات دیگری در حوزه‌ی مُد مانند کیف، لباس، عطر ارائه دهد. از مهمترین رکن‌های برند یاسمین‌گلد طراحی خاص و ارائه‌ی باکیفیت، مطابق با استانداردهای جهانی می‌باشد. مشتری مداری از نکات مورد توجه خانم یاسمین رستمیان می‌باشد که هم در فروش آنلاین و هم حضوری مشتریان بتوانند در کمال راحتی و اعتماد کامل در فضایی دلچسب، خرید خود را انجام‌ دهند.\n' +
            '\n',
        image: `${yasmine}`,
        link: 'https://yasminegold.ir',
        enTitle: `yasminegold.ir`,
        category: '.Net',
        isFeatured: true,
    },
    {
        id: 3,
        title: 'ماهان',
        description: 'مدرسه عالی کسب‌وکار ماهان (Mahan Business School) به‌عنوان اولین مدرسه کسب‌وکار در ایران از سال 1384 فعالیت‌های خود را آغاز کرده است. مجموعه ماهان از روز آغاز فعالیت خود توانسته 280 دوره آنلاین و حضوری برگزار کرده است. مدرسه عالی کسب‌وکار ماهان همچنین اولین و تنها بیزینس اسکول کشور است که دارای استاندارهای AMBA (سازمانی بین‌المللی که در سال 1967 تأسیس شده و در حوزه اعتباربخشی و اعتبارسنجی بیزینس اسکول‌های دنیا فعالیت دارد) بوده و به عضویت این سازمان درآمده است.\n' +
            '\n',
        image: `${mahan}`,
        link: 'https://mahanmcc.com',
        enTitle: `mahanmcc.com`,
        category: 'WordPress',
        isFeatured: true,
    },
    {
        id: 4,
        title: 'ماموت',
        description: 'ماموت با استفاده از مدرن‌ترين تجهيزات و خطوط توليد توانسته است به عنوان يكی از شناخته‌شده‌ترين توليد كنندگان ساندويچ پانل در خاورميانه شناخته شود. توليد با كيفيت ساندويچ پانل های دنيای ماموت نتيجه استفاده از مواد با كيفيت، طراحی محصول با رعايت نكات و محاسبات مهندسی و فرآيند توليد استاندارد و به روز می‌باشد. اهميت زمان تحويل محصول در پروژه‌های بزرگ از پارامترهای تعيين كننده می‌باشد كه دنيای ماموت توانسته است با رعايت جدول‌های زماني تحويل محصولات در كنار خريداران به هرچه سريع‌تراجرا شدن پروژه‌ها كمک شايانی نمايد.\n' +
            '\n',
        image: `${mammut}`,
        link: 'http://mammut.faramouj.ir/',
        enTitle: `mammut`,
        category: 'React',
        isFeatured: true,
    },
    {
        id: 5,
        title: 'مورینگا',
        description: '',
        image: `${moringa}`,
        link: 'http://moringaemo.com/',
        enTitle: `moringa.com`,
        category: 'WordPress',
        isFeatured: false,
    },
    {
        id: 6,
        title: 'حسن زاده',
        description: '',
        image: `${hkj}`,
        link: 'https://hk-j.com/',
        enTitle: `hk-j.com`,
        category: '.Net',
        isFeatured: false,
    },
    {
        id: 7,
        title: 'آکاسا',
        description: '',
        image: `${acasa}`,
        link: 'https://acasa.ir/',
        enTitle: `acasa.ir`,
        category: 'WordPress',
        isFeatured: false,
    },
    {
        id: 8,
        title: 'بهکار چوب',
        description: '',
        image: `${behkarchoob}`,
        link: 'https://behkarchoob.com/',
        enTitle: `behkarchoob.com`,
        category: '.Net',
        isFeatured: false,
    },
    {
        id: 9,
        title: '001 ایرانیان',
        description: '',
        image: `${iranian001}`,
        link: 'https://001iranian.com/',
        enTitle: `001iranian.com`,
        category: '.Net',
        isFeatured: false,
    },
];

export function getFeaturedPortfolios() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllPortfolios() {
    return DUMMY_EVENTS;
}

const PortfoliosItem = (props) => {

    const {id, title, image, enTitle, category, link} = props;

    return (
        <div className={styles.items}>
            <a href={link} className={styles.imgWrapper} style={{backgroundImage: `url(${image})`}}>
            </a>
            <div className={styles.info}>
                <h2>
                    {title}
                </h2>
                <a href={link}>
                    {enTitle}
                </a>
                <span>
                                {category}
                            </span>
            </div>
        </div>
    );
};

export default PortfoliosItem;
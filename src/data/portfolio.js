const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'تاج کالا',
        description: 'فروشگاه تاج كالا ابتدا سال ٩١ در حوزه فروش لوازم خانگی در شهر بانه با نام بازرگانی تاج آغاز به كار كرده است. فعالیت فروشگاه در ابتدای كار صرفا واردات كولرگازی بوده و به مرور زمان اقلامی از قبیل یخچال، لباسشويی و ظرفشويی به فروشگاه اضافه شدند و واردات كولر گازی كمرنگ تر شد. سال ٩٩ فعالیت تاج کالا به دليل پاندمی كرونا به سمت فروش آنلاین كشیده شد و همزمان به شهر تهران انتقال یافت. هدف اصلی فروشگاه تاج کالا واردات لوازم خانگی درجه یک از برندهای خارجی در يك شرايط امن با خيال آسوده می باشد.\n' +
            '\n',
        image: 'http://localhost:3000/src/assets/images/portfolio/portfolio-mammut.jpg',
        link: 'https://electrokavir.com/fa',
    },
    {
        id: 'e2',
        title: 'یاسمین گلد',
        description: 'برند‌ یاسمین گلد در سال ۲۰۱۴، توسط یاسمین رستمیان تأسیس و با هدف طراحی منحصر به فرد طلا به صورت سفارشی فعالیت خود را آغاز نمود. مجموعه یاسمین‌گلد که لاین هنری یاسان طلا می‌باشد همیشه در نوآوری در حوزه‌ی طراحی طلا و جواهر در تلاش بوده و توانسته محصولات دیگری در حوزه‌ی مُد مانند کیف، لباس، عطر ارائه دهد. از مهمترین رکن‌های برند یاسمین‌گلد طراحی خاص و ارائه‌ی باکیفیت، مطابق با استانداردهای جهانی می‌باشد. مشتری مداری از نکات مورد توجه خانم یاسمین رستمیان می‌باشد که هم در فروش آنلاین و هم حضوری مشتریان بتوانند در کمال راحتی و اعتماد کامل در فضایی دلچسب، خرید خود را انجام‌ دهند.\n' +
            '\n',
        image: '../assets/images/portfolio/portfolio-tajkalaa.jpg',
        link: 'https://yasminegold.ir',
    },
    {
        id: 'e3',
        title: 'ماهان',
        description: 'مدرسه عالی کسب‌وکار ماهان (Mahan Business School) به‌عنوان اولین مدرسه کسب‌وکار در ایران از سال 1384 فعالیت‌های خود را آغاز کرده است. مجموعه ماهان از روز آغاز فعالیت خود توانسته 280 دوره آنلاین و حضوری برگزار کرده است. مدرسه عالی کسب‌وکار ماهان همچنین اولین و تنها بیزینس اسکول کشور است که دارای استاندارهای AMBA (سازمانی بین‌المللی که در سال 1967 تأسیس شده و در حوزه اعتباربخشی و اعتبارسنجی بیزینس اسکول‌های دنیا فعالیت دارد) بوده و به عضویت این سازمان درآمده است.\n' +
            '\n',
        image: '/assets/images/portfolio/portfolio-mammut.jpg',
        link: 'https://mahanmcc.com',
    },
    {
        id: 'e4',
        title: 'ماموت',
        description: 'ماموت با استفاده از مدرن‌ترين تجهيزات و خطوط توليد توانسته است به عنوان يكی از شناخته‌شده‌ترين توليد كنندگان ساندويچ پانل در خاورميانه شناخته شود. توليد با كيفيت ساندويچ پانل های دنيای ماموت نتيجه استفاده از مواد با كيفيت، طراحی محصول با رعايت نكات و محاسبات مهندسی و فرآيند توليد استاندارد و به روز می‌باشد. اهميت زمان تحويل محصول در پروژه‌های بزرگ از پارامترهای تعيين كننده می‌باشد كه دنيای ماموت توانسته است با رعايت جدول‌های زماني تحويل محصولات در كنار خريداران به هرچه سريع‌تراجرا شدن پروژه‌ها كمک شايانی نمايد.\n' +
            '\n',
        image: '/src/assets/images/portfolio/portfolio-mammut.jpg',
        link: 'http://mammut.faramouj.ir/',
    },
];



export function getAllPortfolios() {
    return DUMMY_EVENTS;
}
const translations = {
    en: {
        home: "Home",
        about: "About",
        groups: "Groups",
        events: "Events",
        location: "Location",
        hotels: "Hotels",
        targets: "Targets",
        get_in_touch: "Get in Touch",
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send",
        first_branch: "Our first branch",
        first_branch_address: "Baghdad - Al-Karada Inside - Opposite the gas station, next to Rashid Bank",
        phone: "Our Phone",
        whatsapp: "WhatsApp",
        second_branch: "Our second branch",
        second_branch_address: "Baghdad - Al Mansour - Al Amirat Street - Next to Al Iqtisad Bank - Opposite Roselyn",
        opening_hours: "Our Opening Hours",
        working_hours: "Mon-Fri: 10am-5pm",
        footer_about: "Snowbird Travel and Tourism was founded to meet Iraqi citizens' travel needs, offering flight bookings, premium accommodations, and visa services, all with a commitment to exceptional quality and unique experiences.",
        footer_about_us: "About Us",
        footer_how_it_works: "How It Works",
        footer_meet_our_team: "Meet Our Team",
        footer_help_desk: "Help Desk",
        footer_plans_pricing: "Plans & Pricing",
        footer_location: "Location",
        footer_social_media: "Social Media",
        copywrite: "All rights reserved by project.Iq",
        visa:"visa",
        partner:"Our partners",
        see_more:"see More"
    },
    ar: {
        home: "الرئيسية",
        about: "حول",
        groups: "مجموعات",
        events: "فعاليات",
        location: "موقع",
        hotels: "فنادق",
        targets: "أهداف",
        get_in_touch: "تواصل معنا",
        name: "الاسم",
        email: "البريد الإلكتروني",
        subject: "الموضوع",
        message: "الرسالة",
        send: "إرسال",
        first_branch: "فرعنا الأول",
        first_branch_address: "بغداد - الكرادة داخل - مقابل محطة الوقود، بجانب مصرف الرشيد",
        phone: "هاتفنا",
        whatsapp: "واتساب",
        second_branch: "فرعنا الثاني",
        second_branch_address: "بغداد - المنصور - شارع الأميرات - بجانب مصرف الاقتصاد - مقابل روزلين",
        opening_hours: "ساعات العمل",
        working_hours: "من الإثنين إلى الجمعة: 10 صباحاً - 5 مساءً",
        footer_about: "تأسست شركة طائر الثلج للسفر والسياحة لتلبية احتياجات المواطنين العراقيين في السفر، حيث تقدم خدمات حجز تذاكر الطيران، وإقامة فاخرة، وخدمات تأشيرات، مع التزام بالجودة الاستثنائية وتجارب فريدة.",
        footer_about_us: "معلومات عنا",
        footer_how_it_works: "كيف يعمل",
        footer_meet_our_team: "تعرف على فريقنا",
        footer_help_desk: "مكتب المساعدة",
        footer_plans_pricing: "خطط وأسعار",
        footer_location: "موقع",
        footer_social_media: "وسائل التواصل الاجتماعي",
        copywrite: "جميع الحقوق محفوظة بواسطة project.Iq",
        visa:"تأشيرة",
        partner:"شركائنا",
        see_more:"المزيد"
        
    }
};

document.getElementById('language-toggle').addEventListener('click', () => {
    const currentLang = document.documentElement.lang || 'en';
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    document.documentElement.lang = newLang;
    document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');

    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        el.textContent = translations[newLang][key];
    });
});
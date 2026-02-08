const products = [
    // القرآن الكريم
    { id: 1, title_ar: "مصحف التجويد الملون", author_ar: "دار المعرفة", price_dzd: 1500, category: "القرآن الكريم", in_stock: true, image: "https://placehold.co/400x600/2E7D32/white?text=القرآن+الكريم", is_best_seller: true, is_new: false },
    { id: 2, title_ar: "مصحف القيام", author_ar: "دار ابن كثير", price_dzd: 2200, category: "القرآن الكريم", in_stock: true, image: "https://placehold.co/400x600/2E7D32/white?text=مصحف+القيام", is_best_seller: false, is_new: true },
    { id: 3, title_ar: "مصحف التبيان في متشابهات القرآن", author_ar: "ياسر محمد مرسي", price_dzd: 1800, category: "القرآن الكريم", in_stock: true, image: "https://placehold.co/400x600/2E7D32/white?text=المتشابهات", is_best_seller: false, is_new: false },
    { id: 4, title_ar: "مصحف الحفظ الميسر", author_ar: "دار التقوى", price_dzd: 1400, category: "القرآن الكريم", in_stock: true, image: "https://placehold.co/400x600/2E7D32/white?text=الحفظ+الميسر", is_best_seller: true, is_new: false },

    // التفسير
    { id: 5, title_ar: "تفسير السعدي (تيسير الكريم الرحمن)", author_ar: "عبد الرحمن السعدي", price_dzd: 3500, category: "التفسير", in_stock: true, image: "https://placehold.co/400x600/eee/333?text=تفسير+السعدي", is_best_seller: true, is_new: false },
    { id: 6, title_ar: "تفسير ابن كثير (مجلد واحد)", author_ar: "ابن كثير", price_dzd: 2800, category: "التفسير", in_stock: true, image: "https://placehold.co/400x600/eee/333?text=ابن+كثير", is_best_seller: false, is_new: false },
    { id: 7, title_ar: "المختصر في تفسير القرآن", author_ar: "مركز تفسير", price_dzd: 1900, category: "التفسير", in_stock: true, image: "https://placehold.co/400x600/eee/333?text=المختصر", is_best_seller: true, is_new: true },
    { id: 8, title_ar: "ظلال القرآن", author_ar: "سيد قطب", price_dzd: 12000, category: "التفسير", in_stock: true, image: "https://placehold.co/400x600/eee/333?text=ظلال+القرآن", is_best_seller: false, is_new: false },

    // الحديث
    { id: 9, title_ar: "صحيح البخاري", author_ar: "الإمام البخاري", price_dzd: 4500, category: "الحديث", in_stock: true, image: "https://placehold.co/400x600/eee/333?text=البخاري", is_best_seller: false, is_new: false },
    { id: 10, title_ar: "صحيح مسلم", author_ar: "الإمام مسلم", price_dzd: 4200, category: "الحديث", in_stock: true, image: "https://placehold.co/400x600/eee/333?text=مسلم", is_best_seller: false, is_new: false },
    { id: 11, title_ar: "الأربعون النووية", author_ar: "الإمام النووي", price_dzd: 400, category: "الحديث", in_stock: true, image: "https://placehold.co/400x600/eee/333?text=الأربعون", is_best_seller: true, is_new: false },
    { id: 12, title_ar: "رياض الصالحين", author_ar: "الإمام النووي", price_dzd: 1600, category: "الحديث", in_stock: true, image: "https://placehold.co/400x600/eee/333?text=رياض+الصالحين", is_best_seller: true, is_new: false },

    // الفقه
    { id: 13, title_ar: "الفقه الميسر في ضوء الكتاب والسنة", author_ar: "نخبة من العلماء", price_dzd: 1300, category: "الفقه", in_stock: true, image: "https://placehold.co/400x600/eee/333?text=الفقه+الميسر", is_best_seller: true, is_new: true },
    { id: 14, title_ar: "منهاج المسلم", author_ar: "أبو بكر الجزائري", price_dzd: 1800, category: "الفقه", in_stock: true, image: "https://placehold.co/400x600/eee/333?text=منهاج+المسلم", is_best_seller: true, is_new: false },
    { id: 15, title_ar: "بداية المجتهد ونهاية المقتصد", author_ar: "ابن رشد", price_dzd: 2500, category: "الفقه", in_stock: true, image: "https://placehold.co/400x600/eee/333?text=بداية+المجتهد", is_best_seller: false, is_new: true },
    { id: 16, title_ar: "الدرر البهية في المسائل الفقهية", author_ar: "الشوكاني", price_dzd: 900, category: "الفقه", in_stock: true, image: "https://placehold.co/400x600/eee/333?text=الدرر+البهية", is_best_seller: false, is_new: false },

    // السيرة
    { id: 17, title_ar: "الرحيق المختوم", author_ar: "صفي الرحمن المباركفوري", price_dzd: 1200, category: "السيرة", in_stock: true, image: "https://placehold.co/400x600/eee/333?text=الرحيق+المختوم", is_best_seller: true, is_new: false },
    { id: 18, title_ar: "السيرة النبوية لابن هشام", author_ar: "ابن هشام", price_dzd: 3800, category: "السيرة", in_stock: true, image: "https://placehold.co/400x600/eee/333?text=ابن+هشام", is_best_seller: false, is_new: false },
    { id: 19, title_ar: "زاد المعاد", author_ar: "ابن القيم", price_dzd: 5500, category: "السيرة", in_stock: true, image: "https://placehold.co/400x600/eee/333?text=زاد+المعاد", is_best_seller: false, is_new: true },
    { id: 20, title_ar: "صور من حياة الصحابة", author_ar: "عبد الرحمن رأفت الباشا", price_dzd: 1100, category: "السيرة", in_stock: true, image: "https://placehold.co/400x600/eee/333?text=حياة+الصحابة", is_best_seller: false, is_new: true },

    // تعليم العربية
    { id: 21, title_ar: "العربية بين يديك - المستوى 1", author_ar: "مجموعة مؤلفين", price_dzd: 2500, category: "تعليم العربية", in_stock: true, image: "https://placehold.co/400x600/eee/333?text=العربية+1", is_best_seller: false, is_new: true },
    { id: 22, title_ar: "متن الآجرومية", author_ar: "ابن آجروم", price_dzd: 300, category: "تعليم العربية", in_stock: true, image: "https://placehold.co/400x600/eee/333?text=الآجرومية", is_best_seller: false, is_new: false },
    { id: 23, title_ar: "النحو الواضح", author_ar: "علي الجارم", price_dzd: 1400, category: "تعليم العربية", in_stock: true, image: "https://placehold.co/400x600/eee/333?text=النحو+الواضح", is_best_seller: true, is_new: true },
    { id: 24, title_ar: "جامع الدروس العربية", author_ar: "مصطفى الغلاييني", price_dzd: 2900, category: "تعليم العربية", in_stock: true, image: "https://placehold.co/400x600/eee/333?text=جامع+الدروس", is_best_seller: false, is_new: false }
];
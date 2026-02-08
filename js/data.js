const products = [
    // القرآن الكريم - صور مصاحف فاخرة
    { id: 1, title_ar: "مصحف التجويد الملون", author_ar: "دار المعرفة", price_dzd: 1500, category: "القرآن الكريم", in_stock: true, image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=400", is_best_seller: true, is_new: false },
    { id: 2, title_ar: "مصحف القيام", author_ar: "دار ابن كثير", price_dzd: 2200, category: "القرآن الكريم", in_stock: true, image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=400", is_best_seller: false, is_new: true },
    { id: 4, title_ar: "مصحف الحفظ الميسر", author_ar: "دار التقوى", price_dzd: 1400, category: "القرآن الكريم", in_stock: true, image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400", is_best_seller: true, is_new: false },

    // التفسير والحديث - صور مجلدات تراثية
    { id: 5, title_ar: "تفسير السعدي", author_ar: "عبد الرحمن السعدي", price_dzd: 3500, category: "التفسير", in_stock: true, image: "https://images.unsplash.com/photo-1589519160732-57fc498494f8?auto=format&fit=crop&q=80&w=400", is_best_seller: true, is_new: false },
    { id: 12, title_ar: "رياض الصالحين", author_ar: "الإمام النووي", price_dzd: 1600, category: "الحديث", in_stock: true, image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&q=80&w=400", is_best_seller: true, is_new: false },
    { id: 14, title_ar: "منهاج المسلم", author_ar: "أبو بكر الجزائري", price_dzd: 1800, category: "الفقه", in_stock: true, image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=400", is_best_seller: true, is_new: false },

    // السيرة النبوية - صور تعبيرية راقية
    { id: 17, title_ar: "الرحيق المختوم", author_ar: "صفي الرحمن المباركفوري", price_dzd: 1200, category: "السيرة", in_stock: true, image: "https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?auto=format&fit=crop&q=80&w=400", is_best_seller: true, is_new: false },
    { id: 20, title_ar: "صور من حياة الصحابة", author_ar: "عبد الرحمن رأفت الباشا", price_dzd: 1100, category: "السيرة", in_stock: true, image: "https://images.unsplash.com/photo-1474932430478-3a7fb9065ba0?auto=format&fit=crop&q=80&w=400", is_best_seller: false, is_new: true },

    // تعليم العربية - صور أدوات كتابة وكتب تعليمية
    { id: 21, title_ar: "العربية بين يديك", author_ar: "مجموعة مؤلفين", price_dzd: 2500, category: "تعليم العربية", in_stock: true, image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400", is_best_seller: false, is_new: true },
    { id: 23, title_ar: "النحو الواضح", author_ar: "علي الجارم", price_dzd: 1400, category: "تعليم العربية", in_stock: true, image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400", is_best_seller: true, is_new: true }
    
    // ملاحظة: يمكنك تكرار هذه الصور لبقية الـ 24 منتجاً حسب التصنيف
];

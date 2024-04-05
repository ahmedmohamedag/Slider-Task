// تصدير الدالة
export const sectionOne = () => {
    // تحديد العناصر
    let btnControl = document.querySelectorAll('.control button');
    let imageList = document.querySelector('.slider');
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
    const clientWidth = imageList.clientWidth;
    
    // تنفيذ العناصر
    btnControl.forEach((arrow) => {
        arrow.addEventListener('click', (e) => {
            handelArrow(e.target.id);
            clearInterval(slidMov)
        });
    });

    // دالة التحكم بالأسهم
    const handelArrow = (arrowId) => {
        // اتجاه السهم
        let dir = arrowId == 'circle-left' ? -1 : 1;
        // حساب المسافة المناسبة للتمرير
        let scrollAmount = clientWidth * dir;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        // عشان اتحكم في دوران السليدر
        if (imageList.scrollLeft >= maxScrollLeft - scrollAmount) {
            imageList.scrollLeft = 1
        }
    };
    let slidMov  = setInterval(handelArrow,2000)


    // تحديث ألوان الأزرار
    const handleSlideButtons = () => {
        const isAtStart = imageList.scrollLeft <= 0;
        const isAtEnd = imageList.scrollLeft >= maxScrollLeft;
        btnControl[0].style.color = isAtStart ? "red" : "";
        btnControl[1].style.color = isAtEnd ? "red" : "";
    };

    // استماع لحدث التمرير
    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
    });

    // استماع لحدث الضغط على الأسهم
    document.addEventListener('keydown', (e) => {
        // الضغط على السهم الأيمن
        if (e.key == "ArrowRight") {
            handelArrow(btnControl[1].id);
        }
        // الضغط على السهم الأيسر
        else if (e.key == "ArrowLeft") {
            handelArrow(btnControl[0].id);
        }
    });
}
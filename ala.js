function togglemenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".ham-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");

    // إضافة تأثير انسيابي على القائمة
    if (menu.classList.contains("open")) {
        menu.style.transition = "max-height 0.5s ease-in-out";
        menu.style.maxHeight = "300px";  // يمكن تعديل القيمة حسب الحاجة
    } else {
        menu.style.transition = "max-height 0.5s ease-in-out";
        menu.style.maxHeight = "0";
    }

    // تغيير لون الأيقونة عند الفتح
    if (icon.classList.contains("open")) {
        icon.style.color = "#8d6e63";  // لون متناسق مع درجات البني
    } else {
        icon.style.color = "#333333";  // اللون الداكن عند الإغلاق
    }
}

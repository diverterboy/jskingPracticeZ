import SabtAgahiModule from "./sabtAgahiModule.js";

const categorySelect = document.getElementById('category');
const subCategoryContainer = document.getElementById('subCategoryContainer');
const subCategorySelect = document.getElementById('subCategory');

const subjectInput = document.getElementById('title')
const descripInput = document.getElementById('description')
const priceInput = document.getElementById('price')
const submit = document.getElementById('sub')


const CategoryContainerTehran = document.getElementById('CategoryContainerTehran');
const subCategoryTehran = document.getElementById('subCategoryTehran');
const placeSelect = document.getElementById('place');


//adding new category with click on service//
const servicesSubCategories = [
    "تعمیرات و نگهداری",
    "آموزش",
    "مشاوره",
    "حمل و نقل",
    "مراسم و رویدادها",
    "زیبایی و آرایش",
    "سایر خدمات"
];
categorySelect.addEventListener('change', function() {
    if (this.value === 'services') {
        subCategoryContainer.style.display = 'block';

        subCategorySelect.innerHTML = '<option value="">انتخاب کنید</option>';

        servicesSubCategories.forEach(subCategory => {
            const option = document.createElement('option');
            option.value = subCategory;
            option.textContent = subCategory;
            subCategorySelect.appendChild(option);
        });
    } else {
        subCategoryContainer.style.display = 'none';
        subCategorySelect.innerHTML = '<option value="">انتخاب کنید</option>';
    }
});


//alert to user when a field is empty//

submit.addEventListener("click", function () {

    if (subjectInput.value=== "" || descripInput.value === "" || priceInput.value === "" || categorySelect.value === "" || placeSelect.value === ""){

        window.alert("یک فیلد خالی است")


    } else {
        let user = new SabtAgahiModule()
        user.subject= subjectInput.value
        user.price= priceInput.value
        user.description= descripInput.value

        localStorage.setItem("userSubject" , user.subject  )
        localStorage.setItem("userDescriPtion" , user.description )
        localStorage.setItem("userPrice" ,  user.price )



        window.alert("آگهی شما با موفقیت تبت شد")
        window.open("http://localhost:63342/agahi/agahi.html")
    }

})

//user select category and it set in local storage --- services category remained
categorySelect.addEventListener("change", function () {

    let userSelect = categorySelect.value
    localStorage.setItem("userCategory" , userSelect)

})



placeSelect.addEventListener("change", function () {

    let userPlaceSelect =  placeSelect.value
    localStorage.setItem("userPlaceCategory" , userPlaceSelect)

})






























//adding new category with click on service//
const Tehrancities = [
    "تهران",
    "باغستان",
    "انثلاب",
    "آزادی",
    "تحریش",
    "شهر ری",
    "پیروزی"
];
placeSelect.addEventListener('change', function() {
    if (this.value === 'tehran') {
        CategoryContainerTehran.style.display = 'block';

        subCategoryTehran.innerHTML = '<option value="">انتخاب کنید</option>';

        Tehrancities.forEach(subCategory => {
            const option = document.createElement('option');
            option.value = subCategory;
            option.textContent = subCategory;
            subCategoryTehran.appendChild(option);
        });
    } else {
        CategoryContainerTehran.style.display = 'none';
        subCategoryTehran.innerHTML = '<option value="">انتخاب کنید</option>';
    }
});



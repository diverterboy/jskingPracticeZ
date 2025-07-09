import signupModule from "./signUpModule.js"
const userNameInput = document.getElementById('user')
const passWordInput = document.getElementById('pass')
const submit = document.getElementById('signUp')

let module = new signupModule()

submit.addEventListener("click", function () {

    if (userNameInput.value=== "" || passWordInput.value === "" ){

        window.alert("یک فیلد خالی است")

    }else {

        module.username = userNameInput.value
        module.password = passWordInput.value

        localStorage.setItem("userName" , module.username )
        localStorage.setItem("password" , module.password )



       // window.alert("آفرین . تبت نام کردی")
       // window.open("http://localhost:63342/agahi/sabtAgahi.html")

    }

})


let passwordNum = passWordInput.value

const passwordArray = JSON.parse(passwordNum)

console.log(passwordNum)
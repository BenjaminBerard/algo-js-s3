document.addEventListener('DOMContentLoaded', function (){
    const swiper = new Swiper(".mon-slider",{
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination",
        },
        autoplay: {
            delay: 3000
        }
    })
})

let form = document.querySelector('form')


form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log ('Envoi du form detecté !')

    
    let errorContainer = document.querySelector ('.message-error');
    let errorList = document.querySelector ('.message-error ul')
    errorList.innerHTML = ""
    errorContainer.classList.remove ('visible')
    let email = document.querySelector ('#email')
    let password = document.querySelector ('#password')
    let pseudo = document.querySelector ('#pseudo')
    let password2 = document.querySelector ('#password2')
    let passCheck = new RegExp ("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$")
    let successContainer = document.querySelector ('.message-success')
    successContainer.classList.remove ('visible')

    if (email.value == ''){
        email.classList.remove ('success')
        email.classList.add ('invalide')
        errorContainer.classList.add ('visible')
        errorList.classList.add ('visible')
        let err = document.createElement ('li')
        err.innerText = "Le champ email ne peut pas être vide"
        errorList.appendChild(err)

    } else {
        email.classList.remove ('invalide')
        email.classList.add ('success')
    }

    if (pseudo.value.length < 6) {
        pseudo.classList.remove ('success')
        pseudo.classList.add ('invalide')
        errorContainer.classList.add ('visible')
        errorList.classList.add ('visible')
        let err = document.createElement ('li')
        err.innerText = "Le champ pseudo ne peut pas être inférieur à 6 charactères"
        errorList.appendChild(err)

    } else {
        pseudo.classList.remove ('invalide')
        pseudo.classList.add ('success')
    }

    if (password.value.length < 10 || passCheck.test (password.value) == false){
        password.classList.remove ('success')
        password.classList.add ('invalide')
        errorContainer.classList.add ('visible')
        errorList.classList.add ('visible')
        let err = document.createElement ('li')
        err.innerText = "Le champ password doit contenir 10 charactères minimum, une minuscule, une majuscule, un chiffre et un charactère spécial"
        errorList.appendChild(err)

    } else {
        password.classList.remove ('invalide')
        password.classList.add ('success')
    }

    if (password2.value != password.value){
        password2.classList.remove ('success')
        password2.classList.add ('invalide')
        errorContainer.classList.add ('visible')
        errorList.classList.add ('visible')
        let err = document.createElement ('li')
        err.innerText = "Le mot de passe n°2 n'est pas le même que celui n°1"
        errorList.appendChild(err)

    } else {
        password2.classList.remove ('invalide')
        password2.classList.add ('success')
    }

    if (
        pseudo.classList.contains('success') &&
        email.classList.contains('success') &&
        password.classList.contains('success') &&
        password2.classList.contains('success')
    ) {
        successContainer.classList.add('visible')
    }
})

'use strict';

/** add news block */

const showButton = document.querySelector('.news__link');
const newsContent = document.querySelector('.newsWrap_second');

showButton.addEventListener('click', function () {
    newsContent.classList.remove('hidden');
});


/** menu dropdown */

const showMenu = document.querySelectorAll('.menu__link');
const dropDown = document.querySelectorAll('.dropdown');


showMenu.forEach(function(link) {
    link.classList.remove('hidden');
});

// showMenu.addEventListener('click', function() {
//     dropDown.classList.remove('hidden');
// });


/** validation */


// const perName = document.getElementById("name");
// const clickBtn = document.getElementById("submit");

// clickBtn.addEventListener('click', function () {

//     if (perName.value === null || perName.value === "") {
//         alert("Введите данные");
//     } else {
//         alert("all good");
//     }

// });


// $(document).ready(function(){

//     var jVal = {
//         'name' : function() {
        
//             $('#nameInput').append('<div id="nameInfo" class="info"></div>');
            
//             var nameInfo = $('#nameInfo');
//             var ele = $('#name');
//             var message = $('#nameMessage');
    
//             var patt = /[a-zA-Zа-яА-ЯёЁ ]+/i; 
    
//             if(!patt.test(ele.val())) {
    
//                 jVal.errors = true;
//                     nameInfo.removeClass('correct').addClass('error').show();
//                     message.show();
    
//             } else {
//                     nameInfo.removeClass('error').addClass('correct').show();
//                     message.hide();	
//                 }
//         },
    
//         // 'phone' : function() {
        
//         //     $('#phoneInput').append('<div id="phoneInfo" class="info"></div>');
            
//         //     var phoneInfo = $('#phoneInfo');
//         //     var ele = $('#phone');
//         //     var message = $('#phoneMessage');
            
//         //     var patt = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10,11}$/i; 
            
//         //     if(!patt.test(ele.val())) {
//         //         jVal.errors = true;
//         //             phoneInfo.removeClass('correct').addClass('error').show();
//         //             message.show();						
//         //     } else {
//         //             phoneInfo.removeClass('error').addClass('correct').show();
//         //             message.hide();				
//         //     }
//         // },
    
//         'email' : function() {
        
//             $('#emailInput').append('<div id="emailInfo" class="info"></div>');
        
//             var emailInfo = $('#emailInfo');
//             var ele = $('#email');
//             var message = $('#emailMessage');
            
//             var patt = /^.+@.+[.].{2,}$/i;
            
//             if(!patt.test(ele.val())) {
//                 jVal.errors = true;
//                     emailInfo.removeClass('correct').addClass('error').show();
//                     message.show();											
//             } else {
//                     emailInfo.removeClass('error').addClass('correct').show();
//                     message.hide();				
//             }
//         }
            
//     };
    
//     $('#name').change(jVal.name);
//     // $('#phone').change(jVal.phone);
//     $('#email').change(jVal.email);
    
//     });
    



// window.onload = () => {
//     document.querySelector('#mailingForm').addEventListener('submit', e => {
//         let valid = new Validator('mailingForm');
//         console.log (valid)
//         if(!valid.valid){
//             e.preventDefault();
//         }
//     })
// }

// class Validator {
// constructor (form) {
//     this.patterns = {
//         name: /^[a-zа-яё]+$/i,
//         // secondname: /^[a-zа-яё]+$/i,
//         // phone: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
//         email: /^[\w._-]+@\w+\.[a-z]{2,4}$/
//     }

//     this.errors = {
//         name: 'Имя содержит только буквы',
//         // secondname: 'Фамилия содержит только буквы',
//         // phone: 'Шаблон телефона +7(000)000-0000',
//         email: 'Шаблон e-mail mymail@mail.ru, my.mail@mail.ru, my-mail@mail.ru'
//     }

//     this.errorClass = 'error-msg'
//     this.form = form
//     this.valid = false
//     this._validateForm ()
// }

// _validateForm () {
//     let errors = [... document.getElementById(this.form).querySelectorAll (`.${this.errorClass}`)]
//     for (let error of errors) {
//         error.remove ()
//     }

//     let formFields = [... document.getElementById(this.form).querySelectorAll ('input')]
//     formFields.forEach (el => {this._validateField (el)})

//     if (![... document.getElementById(this.form).querySelectorAll ('.invalid')].length) {
//         this.valid = true
//     }
// }

// _validateField (field) {
//     if (this.patterns [field.name]) {
//         if (!this.patterns [field.name].test (field.value)) { // regExp.test (string) // true - если совпадение / false - если "не думаю"
//             field.classList.add ('invalid')
//             this._addErrorMsg (field)
//             this._watchField (field)
//         }
//     }
// }

// _addErrorMsg (field) {
//     let err = `<div class="${this.errorClass}">${this.errors [field.name]}</div>`
//     field.parentNode.insertAdjacentHTML ('beforeend', err)
// }

// _watchField (field) {
//     field.addEventListener ('input', () => {
//         let error = field.parentNode.querySelector (`.${this.errorClass}`)
//         if (this.patterns [field.name]) {
//             if (this.patterns [field.name].test (field.value)) {
//                 field.classList.remove ('invalid')
//                 field.classList.add ('valid')
//                 if (error) error.remove ()
//             } else {
//                 field.classList.remove ('valid')
//                 field.classList.add ('invalid')
//                 if (!error) this._addErrorMsg (field)
//             }
//         }
//     })
// }
// }









// click.onclick=function()
//    {
//     // if(!name.value){alert("Значение  не должно быть нулевым!!");}

//     // else {alert("all good");}

//     if (!name.value.length) alert ('поле не заполнено');



// // if (name.value === null || name.value === "") {
// //   alert("Введите данные");
// // }

//    }; 


// function validate_form() {
//     valid = true;
//     if (document.form.name.value == "") {
//         alert("Вы не ввели своё имя");
//         valid = false;
//     }
//     // if (document.form.DATA[PHONE_WORK].value == "") {
//     //     alert("Вы не ввели свой телефон");
//     //     valid = false;
//     // }
//     // if (document.form.DATA[EMAIL_WORK].value == "") {
//     //     alert("Вы не ввели свой email");
//     //     valid = false;
//     // }
//     return valid;

// }
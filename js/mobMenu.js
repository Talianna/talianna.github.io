'use strict';

// const modal = document.querySelector('.mobileMenu');
// const showModal = document.querySelector('button');
// // const hideModal = document.querySelector('span');

// showModal.addEventListener('click', function () {
//     modal.classList.toggle('hidden');
//     // showModal.classList.toggle('rotate');
// });

// // hideModal.addEventListener('click', function () {
// //     modal.classList.add('hidden');
// // });



const modal = document.querySelector('.mobileMenu');
const showModal = document.querySelector('.menuButton');
const hideModal = document.querySelector('span');

showModal.addEventListener('click', function () {
    modal.classList.remove('hidden');
});

hideModal.addEventListener('click', function () {
    modal.classList.add('hidden');
});

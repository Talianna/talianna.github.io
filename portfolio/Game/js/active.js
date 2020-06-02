'use strict';

const serviceUnits = document.querySelectorAll('.serviceUnit');

serviceUnits.forEach(function(serviceUnit) {
    serviceUnit.addEventListener('click', function () {
        clearActiveClasses();
        this.classList.toggle('active');
    })
});


/**
 * Функция удаляет класс active у всех блоков
 * с классом serviceUnit
 */
function clearActiveClasses () {
    const allUnits = document.querySelectorAll('.serviceUnit');
    allUnits.forEach(function(serviceUnit) {
        serviceUnit.classList.remove('active');
    });
}
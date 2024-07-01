'use strict';

const clicking = document.querySelector('.clicks');
const cons = document.querySelector('.content');



clicking.addEventListener('click', function () {
    let r = Math.trunc(Math.random() * 255) + 1;
    let g = Math.trunc(Math.random() * 255) + 1;
    let b = Math.trunc(Math.random() * 255) + 1;
    let a = Math.random().toFixed(1);
    console.log(a);
    let c = `rgb(${r},${g},${b},${a})`;
    if (a >= 0.0 && a <= 0.4) {
        cons.style.color = "black";
        clicking.style.color = "black";
    }
    else {
        clicking.style.color = "white";
        cons.style.color = "white";
    }

    clicking.style.backgroundColor = `rgb(${r},${g},${b},${a})`;

    document.body.style.backgroundColor = `rgb(${r},${g},${b},${a})`;

    cons.textContent = c;
    cons.classList.remove('hidden');


    // console.log(a);


})

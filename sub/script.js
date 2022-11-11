'use strict';

let positionx = 0;
let positiony = 0;
let count = 0;
const wrapper = document.querySelector('.wrapper');
const btn = document.querySelector('.btn');
wrapper.addEventListener('mousemove', (e) =>{
    if (btn.getBoundingClientRect().x + 50 < e.pageX){
        if (wrapper.getBoundingClientRect().x > 100){
            wrapper.style.transform = `translate(${positionx-=100}px, ${positiony}px)`;    
        } else{
            wrapper.style.transform = `translate(${positionx+=100}px, ${positiony}px)`;
        }
    }
    if (btn.getBoundingClientRect().x + 50 > e.pageX){
        if (wrapper.getBoundingClientRect().x + 110 < 1200){
            wrapper.style.transform = `translate(${positionx+=100}px, ${positiony}px)`;    
        } else{
            wrapper.style.transform = `translate(${positionx-=100}px, ${positiony}px)`;
        }
    }
    if (btn.getBoundingClientRect().y > e.pageY){
        if (wrapper.getBoundingClientRect().y + 110 < 490){
            wrapper.style.transform = `translate(${positionx}px, ${positiony+=50}px)`;    
        } else{
            wrapper.style.transform = `translate(${positionx}px, ${positiony-=100}px)`;
        }
    }
    if (btn.getBoundingClientRect().y < e.pageY){
        if (wrapper.getBoundingClientRect().y > 60){
            wrapper.style.transform = `translate(${positionx}px, ${positiony-=50}px)`;    
        } else{
            wrapper.style.transform = `translate(${positionx}px, ${positiony+=100}px)`;
        }
    }
    if (wrapper.getBoundingClientRect().x + 110 > 1200){
        wrapper.style.transform = `translate(${positionx-=200}px, ${positiony}px)`;
    }
});
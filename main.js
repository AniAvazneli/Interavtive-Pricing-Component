'use strict';
const pageviews = document.getElementById('pageviews');
const costAmount = document.getElementById('costAmount');
const monthYear = document.getElementById('monthYear');
const rangeAmount = document.getElementById('rangeValue');
const sliderEffect = document.getElementById('slideEffect');

let viewers = 100 ;
let width = 50;


rangeAmount.addEventListener('input', slideFunc);
monthYear.addEventListener('input', inputFunc);

function slideFunc(e){
    width = Math.round(e.target.value/32*100);
    sliderEffect.style.width = width+"%";
    costAmount.innerHTML = "$" + e.target.value + ".00";
    viewers = Math.round(1000/32*e.target.value);
    pageviews.innerHTML = viewers + "K PAGEVIEWS"
}

function inputFunc(e){
    console.log(e.target.checked);
    if (e.target.checked){
        pageviews.innerHTML = viewers*12 + "K PAGEVIEWS"
        costAmount.innerHTML = "$" + Math.round(rangeAmount.value*12/5*4) +".00";
    }else{
        pageviews.innerHTML = viewers*12/12 + "K PAGEVIEWS"
        costAmount.innerHTML = "$" + Math.round(rangeAmount.value) +".00";
    }
}
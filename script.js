"use strict"

const navLinks = document.querySelectorAll('.country a')
const imgs = document.getElementById('imgs')
const img = document.querySelectorAll('#imgs img')
const leftBtn = document.querySelector('.leftArrow')
const rightBtn = document.querySelector('.rightArrow')

let idx = 0
let interval = setInterval(run, 2000)

navLinks.forEach(link => {
    link.addEventListener('click', ()=>{
        removeAllactive()
        link.classList.add('active')
    })
})

function removeAllactive(){
    navLinks.forEach(link =>{
        link.classList.remove('active')
    })
}


function run(){

    idx++
    changeImage()
}


function changeImage(){
    if(idx > img.length -1){
        idx = 0
    }else if(idx < 0){
        idx = img.length -1
    }

    imgs.style.transform = `translateX(${-idx * 30}rem)`
}

function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', ()=>{
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', ()=>{
    idx--
    changeImage()
    resetInterval()
})
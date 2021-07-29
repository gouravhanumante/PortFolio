'use strict';

const hireBtn=document.querySelector('.main-btn')
const formContainer=document.querySelector('.form-container')
const closeBtn=document.querySelector('.close-btn')
const navSpace=document.querySelector('.nav')

const navListText=document.querySelectorAll('.list-a-text')

hireBtn.addEventListener('click',()=>{
if(formContainer.classList.contains('hidden')){
    formContainer.classList.remove('hidden')
}else{
    formContainer.classList.add('hidden')
}

})

closeBtn.addEventListener('click',()=>{
    formContainer.classList.add('hidden')
})



navSpace.addEventListener('mouseover',(e)=>{
    
console.log(navSpace    );

    if(e.target!==navSpace){

        navListText.forEach((el)=>{
            if(e.target===el){
                el.classList.remove('opacity-decrease')
                
            }
            else{
                
                el.classList.add('opacity-decrease')
            } 
        })
        
    }






    console.log(e.target);
})

navSpace.addEventListener('mouseout',(e)=>{
navListText.forEach((el)=>{
    el.classList.remove('opacity-decrease')
})
})







//Slider


const slide=document.querySelectorAll('.slide')

console.log(slide);

slide.forEach((s,i)=>s.style.transform=`translateX(${i*100}%)`)

const btnLeft=document.querySelector('.slider__btn--left')
const btnRight=document.querySelector('.slider__btn--right')

let curSlide=0
let maxSlide=slide.length
// console.log(maxSlide);

slide[curSlide].classList.add('active__slide')
btnLeft.addEventListener('click',(e)=>{
if (curSlide===0) {
    curSlide=maxSlide
}
curSlide--
slide.forEach((s,i)=>s.style.transform=`translateX(${(i- curSlide)*100}%)`)// curSlide++

slide.forEach(s=>s.classList.remove('active__slide'))
slide[curSlide].classList.add('active__slide')

})



btnRight.addEventListener('click',(e)=>{
    if (curSlide===maxSlide-1) {
    curSlide=0
    }else{

        curSlide++
    }
    slide.forEach((s,i)=>s.style.transform=`translateX(${(i- curSlide)*100}%)`)
    slide.forEach(s=>s.classList.remove('active__slide'))
    slide[curSlide].classList.add('active__slide')
    

})




// LAZY LOADING BACKGROUND START HERE
//common name= lzy-load-bg_
const lzyLoadBg_bg=document.querySelector('.body2')

let lzyLoadBg_count=0
const lzyLoadBg_func=()=>{
  if (lzyLoadBg_count===100) {
      clearInterval(lzyLoadBg_int)
  }
lzyLoadBg_bg.style.filter=`blur(${scale(lzyLoadBg_count,0,100,30,0)}px)`   

lzyLoadBg_count++
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


const lzyLoadBg_int=setInterval(lzyLoadBg_func,15)





// LAZY LOADING BACKGROUND ENDS HERE



// EXPANDING CARDS START HERE
const panelNode=document.querySelectorAll('.ec-panel')
console.log(panelNode);



//funtion to add active class


const addActiveClass=function (num) {
    
    panelNode[num].addEventListener('click',(e)=>{
        panelNode.forEach((el)=>{
            el.classList.remove('active')
        })
        panelNode[num].classList.add('active')
    })
}


addActiveClass(0)
addActiveClass(1)
addActiveClass(2)
addActiveClass(3)
addActiveClass(4)



// EXOANDING CARDS ENDS HERE



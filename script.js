// grab out elements using querySelector
const slidesEl = document.querySelectorAll('.slide');
const prevBtnEl = document.querySelector('.prev-Btn');
const nextBtnEl = document.querySelector('.next-Btn');

// iterate through our nodelist using forEach, target the index and shift slide to left by 100%
slidesEl.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`
});

// set up our counter 
let counter = 0;

//add eventlistener for next button decrementing counter as we iterate 
nextBtnEl.addEventListener('click', function(){
    counter--;

    carousel();
});

////add eventlistener for next button incrementing counter as we iterate 
prevBtnEl.addEventListener('click', function(){
    counter++;

    carousel();
});
//main function, iterating through slides this time target style and use tranform property to shift slide along X-axis

function carousel() {

    if(counter ===slidesEl.length) {
        counter = 0;
    }
    if(counter < 0) {
        counter = slidesEl.length-1;
    }

    slidesEl.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`
    });
}
const imgs = document.querySelectorAll('.header-slider ul img')    //img will select all the images insdie the ul
                                                                   // imgs contain 1 array that stores all the image elements
const prev_btn = document.querySelector('.class_prev');
const next_btn = document.querySelector('.class_next');

let n=2; //show the 1st image

function changeslide(){    //funct to hide all the images
    for (let i= 0; i< imgs.length; i++) {
        imgs[i].style.display ='none';        
    }
    imgs[n].style.display= 'block';

}
changeslide();  
prev_btn.addEventListener('click', (e)=>{  //left bottom changing slides
    if (n>0) {
        n--; 
        }else{
            n=imgs.length-1;
        }
        changeslide(); 
})
next_btn.addEventListener('click', (e)=>{  //right bottom changing slides
    if (n<imgs.length-1) {
        n++; 
        }else{
            n=0;
        }
        changeslide(); 
})

const scrollContainer = document.querySelectorAll('.products');
for (const item of scrollContainer) {
    item.addEventListener('wheel', (evt)=>{
        evt.preventDefault();
        item.scrollLeft +=evt.deltaY;
         
    });
    
}

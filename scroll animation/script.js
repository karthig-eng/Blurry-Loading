const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll',checkBoxes)
checkBoxes()
function checkBoxes(){
const triggerBottom = window.innerHeight/5*4;
boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top
console.log(boxTop,triggerBottom)
    if(boxTop < triggerBottom) {
        box.classList.add('show')
    } else {
        box.classList.remove('show')
    }
})
}
// get the window height and do window.innerHeight/5*4 and save in one 
// variable and get top lenght of box using getBoundingClientRect() md compare both 
// and while scrolling down show class is trigerred and scrolling up remove show is triggered
// this fn will execute for each box and decide the place of the box.
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click' , ()=>{
    currentActive++
    if(currentActive >  circles.length){
        currentActive = circles.length;
        
    }

    update()
})
prev.addEventListener('click' , ()=>{
    currentActive--
    if(currentActive <  1){
        currentActive = 1;
        
    }
    
    update()
})
function update() {
    circles.forEach((circle, idx) => {
        // cliclk inspect and see consle for program flow
console.log(circle,idx,currentActive)
       if(idx < currentActive) {
        //    add active class to div
            circle.classList.add('active')
            
        } 
        else {
            // remove active class to div
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
console.log(progress.style.width)
    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}


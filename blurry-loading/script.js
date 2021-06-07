const loadtext = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
let load=0
let int = setInterval(blurry,30)
function blurry()
{
    load++;
    if(load>=100)
    {
        clearInterval(int)
    }
    loadtext.innerText = `${load}%`
    // =1 to 0 (1 means text is visible and 0 means text is invisble)
    loadtext.style.opacity = scale(load, 0, 100, 1, 0)
    
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}


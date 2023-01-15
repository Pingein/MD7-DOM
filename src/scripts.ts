const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const btn6 = document.getElementById('btn6')
const btn7 = document.getElementById('btn7')


const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')
const box4 = document.getElementById('box4')
const box5 = document.getElementById('box5')
const box6 = document.getElementById('box6')


const input = document.getElementById('input') as HTMLInputElement
const text = document.getElementById('text')
 

btn1.addEventListener('click', () => {
    let color = getComputedStyle(box1).backgroundColor 
    if (color == 'rgb(31, 194, 174)' || color == 'rgb(24, 213, 225)') {
        box1.style.backgroundColor = 'yellow'
    } else {
        box1.style.backgroundColor = getComputedStyle(box2).backgroundColor 
    }
})
btn2.addEventListener('click', () => {
    box2.innerHTML = 'SUCCESS'
})
btn3.addEventListener('click', () => {
    box3.style.visibility = 'hidden'
})
btn4.addEventListener('click', () => {
    if (box4.style.visibility == 'hidden') {
        box4.style.visibility = 'visible'
    } else {
        box4.style.visibility = 'hidden'
    }
})
let colors = ['coral', 'cyan', 'deepskyblue', 'greenyellow', 'lightsalmon']
btn5.addEventListener('click', () => {
    let new_color = 
    box5.style.background = colors[Math.round(Math.random()*colors.length)]
})
btn6.addEventListener('click', () => {
    let num = parseInt(box6.innerHTML)
    let counter = setInterval(() => {
        box6.innerHTML = ''+(num+1);
        num += 1;
        if (num==10) {
            clearInterval(counter)
        }
    }, 3000)
})
btn7.addEventListener('click', () => {
    if (document.body.style.backgroundColor == 'black') {
        document.body.style.backgroundColor = 'white'  
        document.getElementById('text').style.color = 'black'
        let boxes = document.getElementsByClassName('box')
        for (let i = 0; i<boxes.length; i++) {
            let el = boxes[i] as HTMLElement
            if (getComputedStyle(el).backgroundColor == 'rgb(24, 213, 225)') {
                el.style.backgroundColor = 'rgb(31, 194, 174)'
            }       
        }
    } else {
        document.body.style.backgroundColor = 'black'  
        document.getElementById('text').style.color = 'white'
        document.querySelector('box')
        let boxes = document.getElementsByClassName('box')
        for (let i = 0; i<boxes.length; i++) {
            let el = boxes[i] as HTMLElement
            if (getComputedStyle(el).backgroundColor == 'rgb(31, 194, 174)') {
                el.style.backgroundColor = 'rgb(24, 213, 225)'
            }
        } 
    }
})


let box1_prev_color = box1.style.background
box1.addEventListener('mouseenter', () => {
    box1_prev_color = getComputedStyle(box1).backgroundColor
    box1.style.backgroundColor = 'red'
})
box1.addEventListener('mouseleave', () => {
    box1.style.backgroundColor = box1_prev_color
})
let counter = setInterval(()=>{})
box5.addEventListener('mouseenter', () => {
    let num = parseInt(box5.innerHTML)
    counter = setInterval(() => {
        box5.innerHTML = ''+(num+1);
        num += 1;
        if (num==10) {
            clearInterval(counter)
        }
    }, 1000)
})
box5.addEventListener('mouseleave', () => {
    clearInterval(counter)
    box5.innerHTML = '0'
})


input.addEventListener('keyup', () => {
    text.innerHTML =input.value
})
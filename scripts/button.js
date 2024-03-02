let button = document.getElementById('btn1')

let flag = true

function changeColor(){
    if (flag == true) {
        button.style.background = 'purple'
    button.textContent = "In the basket"
    flag = false
    } else {
    button.style.background = 'crimson'
    flag = true
}

}

let a = 10

function byu(){
if (a > 5) {                     // if (условие)
   console.log ("Purchased")
} else {                        // else (иначе)
console.log ("No")
}

}
byu()      // вызов функции
















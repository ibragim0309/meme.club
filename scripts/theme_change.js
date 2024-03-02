const Whel_Position = document.querySelector(".toggle")
const colors = document.querySelector(".shop_main")
const header = document.querySelector(".shop_header")
let them_status = true
function chandgeWhelerabuz(){
 
    chandgeWhelerabuz.classList.toggle("move")
    console.log("boba")
    Whel_Position.classList.toggle('move');

    if (them_status == false) {
        colors.style.background="skyblue"
        header.style.background = "#842793" 
        them_status=true
    }
    else{
        colors.style.background ="#0F9EA9"
        them_status = false
        header.style.background = "#AD1729"
    }
}
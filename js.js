window.addEventListener("DOMContentLoaded", function (){
    window.addEventListener("scroll", function (){
        const header = document.querySelector('.header')
        header.classList.toggle('sticky', window.scrollY > 50)
    })
    const toggle_nav = document.querySelector(".toggle_nav")
    const nav = document.querySelector(".nav")
    const navItem = document.querySelectorAll(".nav a")

    toggle_nav.addEventListener("click",() =>{
        toggle_nav.classList.toggle("active")
        nav.classList.toggle("active")
    })
    navItem.forEach(item =>{
item.addEventListener("click", ()=>{
    toggle_nav.classList.remove("active")
    nav.classList.remove("active")
})
    })
    const scrollBtn = document.querySelector(".scrollTopTo_btn")
    window.addEventListener("scroll", ()=>{
        scrollBtn.classList.toggle("active", window.scrollY > 500)
    })
    scrollBtn.addEventListener("click", ()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    })


    window.addEventListener("scroll", ()=>{
        let reveals = document.querySelectorAll(".reveal")

        for (let i = 0; i < reveals.length; i++){
            let windowHeight = window.innerHeight
            let revealsTop = reveals[i].getBoundingClientRect().top
            console.log(revealsTop)
            let revealPoint = 50

            if (revealsTop < windowHeight - revealPoint){
                reveals[i].classList.add("active")
            }else {
                reveals[i].classList.remove("active")
            }
        }
    })
})
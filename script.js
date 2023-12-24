let menu = document.getElementById("menubar");
let navbar = document.getElementById("navbar");
let nav = document.getElementById("nav");

menu.addEventListener("click",()=>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
})

window.onscroll = ()=>{
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");

    if(window.scrollY > 200){
        nav.classList.add("active");
    }
    else{
        nav.classList.remove("active");
    }
}

let countDate = new Date("12 August,2024 00:00:00:00").getTime();
function countDown(){
    let now = new Date().getTime();
    let gap = countDate - now;

    let d = Math.floor(gap / (1000*60*60*24))
     let h = Math.floor((gap % (1000*60*60*24)) / (1000*60*60))
     let m = Math.floor((gap % (1000*60*60)) / (1000*60))
     let s = Math.floor((gap % (1000*60)) / (1000))

    document.getElementById("day").innerText = d;
    document.getElementById("hour").innerText = h;
    document.getElementById("minute").innerText = m;
    document.getElementById("second").innerText = s;
}
setInterval(() => {
    countDown();
}, 1000);

var tl = gsap.timeline()
tl.from("#nav img , #navbar , #icons",{
    y:-100,
    delay:1,
    duration:1,
    opcity:0,
    stagger:.4,
})
tl.from("#home #txt",{
    x:-100,
    duration:1,
    scale:0,
    stagger:.4,
})
gsap.from("#category #box",{
    scale:0,
    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger:"#category #box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:2,
        //pin:true
    }
})
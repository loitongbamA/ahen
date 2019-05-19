let bodyID = document.querySelector("#bodyID");
let sectionOne = document.querySelector("#section-one");
let sectionTwo = document.querySelector("#section-two")
let msgPop = document.querySelector("#msg-pop");
let ballonBox = document.querySelector(".ballon-box");
let ballon = document.querySelector("#ballon-btn");
let pop_circle = document.querySelector("#pop_circle");
let whiteScreen = document.querySelector("#whiteScreen");
let black_screen = document.querySelector(".black-screen");
let light_btn = document.querySelector(".light-btn");
let vline = document.querySelector(".v-line");
let popAudio = document.querySelector("#pop-audio");
let hbdMusic = document.querySelector("#hbd-audio");
let pepeMusic = document.querySelector("#pepe-audio");

let text1 = document.querySelector("#text-1");
let text2 = document.querySelector("#text-2");
let text3 = document.querySelector("#text-3");
let text4 = document.querySelector("#text-4");
let text5 = document.querySelector("#text-5");
 

//event for turning light on
let turnOnLight = function(){
    light_btn.addEventListener("click", function(){
        // light_btn.classList.add("fade-out");
        // black_screen.classList.remove("zed-index");
        black_screen.classList.add("fade-out");
        bodyID.classList.add("body_bg");
        msgPop.classList.add("msg-pop-animate");
        ballonBox.classList.add("ballon-box-animate");

        
    })
}
turnOnLight();


// event when ballon is clicked

ballon.addEventListener("click", function(){
    ballon.classList.add("ballon-collapsed");
    popAudio.play();
    whiteScreen.classList.add("ballon-collapsed");

    pop_circle.classList.add("pop");
    vline.classList.add("vline-collapsed");

    setTimeout(ballonBoxCollapse, 2500 );
    sectionTwo.classList.add("move-section-up");
    hbdMusic.play();
    setTimeout(textAnimate, 2000);
    setTimeout(hbdPlaySound, 25000);

})

 let textAnimate = function(){
    text1.classList.add("wish-text");
    text2.classList.add("wish-text");
    text3.classList.add("wish-text");
    text4.classList.add("wish-text");
    text5.classList.add("wish-text");
 }
let ballonBoxCollapse = function(){
    sectionOne.innerHTML = "";
}

let hbdPlaySound = function(){

    pepeMusic.play();
}
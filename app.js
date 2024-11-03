// Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

var tl = gsap.timeline({scrollTrigger:{
    trigger:".part-1",
    start:"50% 50%",
    end:"250% 50%",
    scrub:true,
    pin:true,
}})
tl.to(".rotate-div",{
    rotate: -15,
    scale: 0.8,
},'a')
tl.to("#row-div-2",{
    marginTop:"5%",
},'a')
tl.to("#row-div-3",{
    marginTop:"-2%",
},'a')
tl.to("#row-div-4",{
    marginTop:"-8%",
},'a')
tl.to("#row-div-5",{
    marginTop:"-10%",
},'a')
tl.to(".overlay-div h1",{
    opacity:"1",
    delay:"0.2",
},'a')
tl.to(".overlay-div",{
    backgroundColor: "#000000b4",
},'a')
tl.to(".scrolling",{
    width:"100%",
},'a')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".part-2",
    start:"0% 70%",
    end:"50% 50%",
    scrub:true,
    // markers:true,
}})
tl2.to(".rounded-div-wrapper",{
    height:0,
    marginTop:0,
},)

let tl3 = gsap.timeline({scrollTrigger:{
    trigger:".content-2",
    start:"20% 50%",
    end:"100% 50%",
    scrub:1,
    // markers:true,
}})
tl3.to(".content-2 .text-area-hover h1",{
    width:"100%",
},)
tl3.to(".content-2 .text-area-hover h2",{
    width:"100%",
    delay:-0.4,
},)

let tl4 = gsap.timeline({scrollTrigger:{
    trigger:".part-4",
    start:"50% 50%",
    end:"200% 50%",
    scrub:1,
    pin:true,
    // markers:true,
}})
tl4.to(".c-one",{
    opacity:"1",
    marginTop:"-25%",
},'sct-1')
tl4.to(".c-two",{
    opacity:"1",
},'sct-2')
tl4.to(".c-one",{
    opacity:"0",
    marginTop:"-100%",
},'sct-2')
tl4.to(".c-three",{
    opacity:"1",
},'sct-3')
tl4.to(".c-two",{
    opacity:"0",
},'sct-3')
tl4.to(".c-one",{
    marginTop:"-180%",
},'sct-3')
tl4.to(".c-one",{
    marginTop:"-230%",
},'sct-4')
tl4.to(".c-three",{
    opacity:"0",
},'sct-4')
tl4.to(".cir-part-4",{
    marginLeft:"100%",
    rotate:360,
},'sct-4')

let tl5 = gsap.timeline({scrollTrigger:{
    trigger:".part-5",
    start:"20% 50%",
    end:"100% 50%",
    scrub:1,
    // markers:true,
}})
tl5.to(".part-5 .text-area-hover h1",{
    width:"100%",
},)
tl5.to(".part-5 .text-area-hover h2",{
    width:"100%",
    delay:-0.4,
},)
let tl6 = gsap.timeline({scrollTrigger:{
    trigger:".part-6",
    start:"0% 70%",
    end:"50% 50%",
    scrub:1,
    // markers:true,
}})
tl6.to(".rounded-div-wrapper-6",{
    height:"0%",
    marginTop:"0",
},)
let tl7 = gsap.timeline({scrollTrigger:{
    trigger:".part-7",
    start:"50% 50%",
    end:"300% 50%",
    scrub:1,
    // markers:true,
    pin:true,
}})
tl7.to("#demo",{
    bottom:"7%",
})
tl7.to(".our-work-text-div",{
    height:"60vh",
},'height')
tl7.to(".our-work-text",{
    height:"60vh",
},'height')
tl7.to("#our",{
    left:"0%",
},'height')
tl7.to("#work",{
    right:"0%",
},'height')
tl7.to(".scroll-img",{
    marginTop:"-260%",
})

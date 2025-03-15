let cursor = document.querySelector(".cursor");
const body = document.querySelector("body");

let tl = gsap.timeline();
//gsap animations
tl.from(".text  .middle .line1", {
  width: 0,
  duration:1,
  ease: "linear",
});
tl.to(".text  .middle  .img1", {
  scale: 1,
  rotate: -50,
});
tl.from(".text  .middle .line2", {
  width: 0,
  duration:0.5,
  ease: "linear",
});
tl.to(".text  .middle  .img2", {
  scale: 1,
  rotate: -50,
});
tl.from(".text  .middle .line3", {
  width: 0,
  duration:0.5,
  ease: "linear",
});
tl.to(".text  .middle  .img3", {
  scale: 1,
  rotate: -50,
});
tl.from(".text  .middle .line4", {
  width: 0,
  duration:0.5,
  ease: "linear",
});
tl.set(".divmove",{zIndex:1})
tl.set(".text .middle " , {display:"none"})



tl.set(".loader" , {backgroundColor:"#fff" , color:"#fff"})
tl.to(".divmove .bgdiv", { // Animate both together
  y: "-100%",
  duration: 0.7,
  stagger: -0.1,
  ease: "linear"
});

// Hide loader after animation is complete
tl.set(".loader", { display: "none" });


// custom cursor
// body.addEventListener("mousemove", (e) => {
//   cursor.style.left = e.x - cursor.offsetWidth / 2 + "px";
//   cursor.style.top = e.y - cursor.offsetHeight / 2 + "px";
// });

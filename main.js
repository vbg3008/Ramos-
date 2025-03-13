let cursor = document.querySelector(".cursor");
const body = document.querySelector("body");

let tl = gsap.timeline();
//gsap animations
tl.from(".text  .middle  .line", {
  width: 0,
  duration: 1.5,
  stagger: 1,
  ease: "linear",
});

tl.from(".text  .middle  img", {
  scale: 0,
  rotate: -50,
  stagger: 0.5,
});

tl.to(".loader .text", {
  opacity: 0,
});

tl.to(".loader .divmove .bgdiv", {
  // this is for the back 5 boxes
  y: "-100%",
  stagger: 0.5,
  
});

tl.to(".loader", {
  opacity: 0,
  display: "none",
  duration: 0.1,
});

// custom cursor
body.addEventListener("mousemove", (e) => {
  cursor.style.left = e.x - cursor.offsetWidth / 2 + "px";
  cursor.style.top = e.y - cursor.offsetHeight / 2 + "px";
});

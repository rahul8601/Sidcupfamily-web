// cursor animi start **********
var crsr = document.querySelector("#cursor");
var crsrBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x - 10 + "px";
  crsr.style.top = dets.y - 10 + "px";
  crsrBlur.style.left = dets.x - 200 + "px";
  crsrBlur.style.top = dets.y - 200 + "px";
});

// nav animi end **********

// nav animi start **********
gsap.to("#nav", {
  backgroundColor: "#000",
  height: "90px",
  duration: 0.5,
  scrollTrigger: {
    // scroll pr animation ke liye hai
    trigger: "#nav", // jis element pr lagana hai
    scroller: "body",
    // markers: true,
    start: "top -5%", // scroll kitna vh pr star hoga
    end: "top -5%",
    scrub: 2, // ye timing ke liye hai
  },
});
// nav animi end **********

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    sctooler: "body",
    // markers: true,
    start: "top -40%",
    end: "top -80%",
    scrub: 2,
  },
});

// var h4all = document.querySelectorAll("#nav h4");
// h4all.forEach(function (elem) {
//   elem.addEventListener("mouseenter", function () {
//     crsr.style.scale = 4;
//     crsr.style.border = "0.5px solid #fff";
//     crsr.style.backgroundColor = "transparent";
//   });
//   elem.addEventListener("mouseleave", function () {
//     crsr.style.scale = 1;
//     crsr.style.border = "0px solid #95c11E";
//     crsr.style.backgroundColor = "#95c11E";
//     crsr.style.transition = "0.1s";
//   });
// });

gsap.from("#about-us img, #about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  //   stagger: 0.4,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 55%",
    scrub: 2,
  },
});
gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  //   stagger: 0.4,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers: true,
    start: "top 65%",
    end: "top 65%",
    scrub: 2,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers: true,
    start: "top 65%",
    end: "top 65%",
    scrub: 3,
  },
});

gsap.from("#page4 h1", {
  y: 200,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers: true,
    start: "top 120%",
    end: "top 110%",
    scrub: 3,
  },
});

let arr = [1, 2, 3, 4, 5];

let arr2 = arr.map((e) => e * 2);

console.log(arr2);




function loadingAnimation(){
  var tl = gsap.timeline();
  tl.from("#line1",{
    y:150,
    duration: 0.6,
    delay: 0.5,
    stagger: 0.25,
    // opacity:0,
    ease: "power2.out"
  });
  tl.from("#line2",{
    y:150,
    opacity:0,
    duration: 0.6,
    ease: "power2.out"
  })
  tl.from("#line1-part1", {
    opacity: 0,
    // duration:0.1,
    onStart: function () {
      var h5timer = document.querySelector("#line1-part1 h4");
      var grow = 0;
      setInterval(function () {
        if (grow < 100) {
          h5timer.innerHTML = grow++;
        } else {
          h5timer.innerHTML = grow;
        }
      }, 15);
    },
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 1.5,
    onComplete: function () {
      document.getElementById("loader").style.display = "none";
      gsap.to("#main-body", { 
        opacity: 1,
        duration: 0.6, 
        ease: "power2.out" });
        document.body.style.overflow = "hidden";
    },
  });
  // tl.from("#main-body",{
  //   y:10
  // })


}


loadingAnimation()


function cursorAnimation(){
  document.addEventListener(`mousemove`,function(dets){
  gsap.to(`#crsr`,{
    opacity:1,
    x:dets.x,
    y:dets.y,
  })
})





}
cursorAnimation()

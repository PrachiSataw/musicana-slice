function yoyo(){
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true,
    smartphone:{
      smooth:true
    }
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
  });
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
}
// yoyo();

// gsap.registerPlugin(ScrollTrigger);
var nav =document.getElementById("nav");
var main =document.getElementById("main");
// -------- Loader to Page 1 Gsap ------
var tl=gsap.timeline();

tl
.to(".loader>img",{
    delay:1,
    y:50,
    duration:.7,
})
.to(".loader>img",{
    opacity:0,
    duration:.1
})
.from(".sli",{
    stagger:.12,
    height: 0,
})
.to(".loader",{
    duration:.1,
    opacity:0
})
.from(".mmtxt",{
    opacity:.3,
    stagger:.2,
    scale :1.1
})
.from(".mv-images img ,#nav,.mv-para",{
    opacity:0,
    stagger:.1,
    scale :1.1
})
.to(".mv-illust",{
  width: "100%",
  opacity:1
})

var ok =gsap.timeline({scrollTrigger: {
  trigger:".mmtxt",
  // scroller:".container",
  start:"top 30%",
  // end:" -=600",
  // end:"top 5%",
  // markers:true,
  pin:true,
  // scrub : true,
}})
// .to(".mmtxt",{
//   y: -250,
//   duration:.3,
//   scrub: 1
// })

// ----------Page 2 gsap -------
var pg2 = gsap.timeline({scrollTrigger: {
  trigger:"#page2",
  // scroller:".container",
  start:"top 90%",
  end:"top 60%",
  // markers:true,
  scrub:2}})
.to(".type",{
opacity:1,
duration:.4
// opacity:.2,
})
.to(".type",{
  scale:.7
})

// --------Page3 Gsap  -----
var pg3 = gsap.timeline({scrollTrigger: {
  trigger:"#page3",
  // scroller:".container",
  start:"top 80%",
  end:"top 60%",
  // markers:true
}})
.from(".textanim",{
  y:20,
  opacity:0,
  stagger:.2,
// opacity:.2,
})
.from(".pg3-illust>img",{
  width:"0",
  opacity:0
})
.from(".allpara",{
  y:30,
  opacity:0
})
.from(".pg3-picbox",{
  width:"0",
  opacity:0
})

// ------Page4 gsap---
var  pg34colors =gsap.timeline({scrollTrigger:{
  trigger:"#page4",
  // scroller:".container",
  start:"top 60%",
  end:"top 55%",
  // markers:true,
  scrub: true,
  fastScrollEnd: true
}})

.to("#page3, #page4",{
  backgroundColor:"#F1F609"
})

var artist=gsap.timeline({scrollTrigger:{
  trigger:".artist-section",
  start:"top 60%",
  // end:"top 55%",
  // markers:true,
}})
.from(".artist-pics p",{
  opacity:0,
  stagger:.3,
  y:100
})
gsap.from(".pg4illust",{
  scrollTrigger:{
    trigger:".artist-section",
    start:"top 57%",
  },
  opacity:0,
  left:30,
  duration:.3
})
gsap.from(".art-text h2 span",{
  scrollTrigger:{
    trigger:".artist-section",
    start:"top 52%",
    // markers:true,
  },
  opacity:0,
  stagger:.3,
  y:30
})
gsap.from(".art-text p",{
  scrollTrigger:{
    trigger:".art-text p",
    start:"top 48%",
    end:"top 40%",
  },
  opacity:0,
  y:30
})



// ---------------PAGE 555 GSAP------
var  pg45colors =gsap.timeline({scrollTrigger:{
  trigger:"#page5",
  // scroller:".container",
  start:"top 55%",
  end:"top 50%",
  // markers:true,
  scrub: true,
  fastScrollEnd: true
}})

.to("#page4, #page5",{
  backgroundColor:"#7CF727"
})

gsap.from(".pg5-pic img",{
  scrollTrigger:{
    trigger:"#page5",
    start:"top 50%",
    end:"top 40%",
    // markers:true,
    fastScrollEnd: true
  },
  scale:1.6,
  duration:.9,
  opacity:0,
  y:40
})
var pgtxt=gsap.timeline({scrollTrigger:{
  trigger:"#page5",
  start:"top 48%",
  end:"top 40%",
  // markers:true,
}})
.from(".pg5-text h2 img",{
  y:40,
  duration:.3,
  opacity:0
})
.from(".pg5-text h2 span , .pg5-text p",{
  y:40,
  stagger:.2,
  opacity:0
})



// ---------------PAGE 666 GSAP------
var  pg56colors =gsap.timeline({scrollTrigger:{
  trigger:"#page6",
  start:"top 55%",
  end:"top 50%",
  // markers:true,
  scrub: true,
  fastScrollEnd: true
}})
.to("#page5, #page6",{ /* Page 5 page 6 */
  backgroundColor:"#8902FF"
})
gsap.from(".pg6illust",{
  scrollTrigger:{
    trigger:".pg6-content",
    start:"top 50%",
  },
  y:40,
  left:20,
  opacity:0
})
gsap.from(".pg6-text h2 span , .pg6-text p",{
  scrollTrigger:{
    trigger:".pg6-content",
    start:"top 50%",
  },
  y:40,
  left:5,
  stagger:.3,
  opacity:0
})
gsap.from(".boxes",{
  scrollTrigger:{
    trigger:".pg6-purchase",
    start:"top 60%",
  },
  y:40,
  left:5,
  stagger:.2,
  opacity:0
})
gsap.from(".pg6-lpara",{
  scrollTrigger:{
    trigger:".pg6-lpara",
    start:"top 70%",
  },
  y:40,
  left:5,
  opacity:0
})
// -----------------
// -------------------Page7777777  Gsap---------
var  pg67colors =gsap.timeline({scrollTrigger:{
  trigger:"#page7",
  start:"top 55%",
  end:"top 50%",
  // markers:true,
  scrub: true,
  fastScrollEnd: true
}})
.to("#page6, #page7",{
  // backgroundColor:"var(--morange)"
  backgroundColor:"var(--mgrey)"
})

// -------------Page 7 yelllo circle----------
var pg7yellowcircle=gsap.timeline({scrollTrigger:{
  trigger:".illust-1",
  start:"top 90%",
  end:"top 85%",
  // markers:true
}})
.from(".pg7-item.item-1 .circle",{
  scale:1.7,
  opacity:0,
  duration:1
})
.from(".item-1 .pg7-content",{
  y:20,
  opacity:0,
  duration:.3
})
gsap.from(".illust-1",{
  scrollTrigger:{
    trigger:".illust-1",
    start:"top 55%",
    // markers:true
  },
  width: "0",
  opacity:0,
  duration:1
})
// -------------Page 7 Red circle----------
var pg7redcircle=gsap.timeline({scrollTrigger:{
  trigger:".illust-2",
  start:"top 90%",
  end:"top 85%",
  // markers:true
}})
.from(".pg7-item.item-2 .circle",{
  scale:1.7,
  opacity:0,
  duration:.5
})
.from(".item-2 .pg7-content",{
  y:20,
  opacity:0,
  duration:.3
})
gsap.from(".illust-2",{
  scrollTrigger:{
    trigger:".illust-2",
    start:"top 60%",
    // markers:true
  },
  width: "0",
  opacity:0,
  duration:.5
})
// -------------Page 7 Green circle----------
var pg7greencircle=gsap.timeline({scrollTrigger:{
  trigger:".illust-3",
  start:"top 90%",
  end:"top 85%",
  // markers:true
}})
.from(".pg7-item.item-3 .circle",{
  scale:1.7,
  opacity:0,
  duration:1
})
.from(".item-3 .pg7-content",{
  y:20,
  opacity:0,
  duration:.3
})
gsap.from(".illust-3",{
  scrollTrigger:{
    trigger:".illust-3",
    start:"top 60%",
    // markers:true
  },
  width: "0",
  opacity:0,
  duration:.4
})
// ------------Page 88 Gsap---
var  pg78colors =gsap.timeline({scrollTrigger:{
  trigger:"#page8",
  start:"top 55%",
  end:"top 50%",
  // markers:true,
  scrub: true,  
  fastScrollEnd: true
}})
.to("#page7,#page8",{
  backgroundColor:"var(--morange)"
})


gsap.from(".pg8illust",{
  scrollTrigger:{
    trigger:"#page8",
    start:"top 50%",
  },
  width: "0",
  left:10,
  opacity:0,
  duration:.5
})
var pg8cont=gsap.timeline({scrollTrigger:{
  trigger:"#page8",
  start:"top 50%",
  fastScrollEnd:true,
  // markers:true
}})
.from(".pg8top-content h1 span,.pg8top-content h1 span span ,.pg8top-content p",{
  y:40,
  opacity:0,
  stagger:.3
})
gsap.from(".pg8img-content",{
  scrollTrigger:{
    trigger:"#page8",
    start:"top 65%",
  // markers:true

  },
  right:10,
  opacity:0,
})






// ------------------------Page 8 img----

const contentImg=document.querySelectorAll(".contents-item");
const imaMoveDiv=document.querySelector("#mainimage");

// var pageEight=document.querySelector(".pg8img-content")
// // var cursor = document.querySelector(".cursor");
// pageEight.addEventListener("mousemove",function(e){
//   imaMoveDiv.style.top=e.pageY +`px`;
//   imaMoveDiv.style.left=e.pageX +`px`;
// })
const pgEight=document.querySelector(".pg8img-content")


contentImg.forEach(function(elems){

  elems.addEventListener("mouseenter",function(){
    let imgs= elems.getAttribute("data-image");
    imaMoveDiv.style.backgroundImage=`url(${imgs})`
    imaMoveDiv.style.width="15vw";
    imaMoveDiv.style.height="12vw";
    imaMoveDiv.style.backgroundPosition="left";
    imaMoveDiv.style.backgroundSize="cover";
  })
pgEight.addEventListener("mousemove",function(dets){
  // const mouseY = e.clientY;
  // const mouseX = e.clientX;
  
    imaMoveDiv.style.left=`${dets.x -150}px`
    imaMoveDiv.style.top=`${dets.y-100}px`
    
  })
})





const circle=document.querySelector(".mv-images");

const pageOne=document.querySelector("#page1");

pageOne.addEventListener("mouseenter",move());
// content.addEventListener("mouseleave",mleave())

const wid =pageOne.getBoundingClientRect().width;
const hei =pageOne.getBoundingClientRect().height;

function move(){
  pageOne.addEventListener("mousemove",function(dets){
      // console.log("hey");
      // console.log((dets.x -(wid/2))/(wid/25));
      // console.log(((dets.y - 15)/2));
      // circle.style.transform =`translate(${(dets.x -(wid/1))/(wid/30)}%,${((dets.y - 50)/10)}%)`

      // circle.style.transform =`translate(${(dets.x -(wid/50))/(wid/2)}%,-50%)`
      circle.style.transform =`translate(${-(dets.x -(wid/30))/(wid/5)}%,${-((dets.y - (hei/30))/(hei/5))}%)`

  })

}

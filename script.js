    // This is for the cursor and its blur background

    let crsr = document.querySelector("#cursor")
    let Blur = document.querySelector("#cursor-blur")
    document.addEventListener("mousemove",function(dets){
        crsr.style.left = dets.x +20.5 + "px";
        crsr.style.top = dets.y -12.5 + "px";
        Blur.style.left = dets.x - 200 + "px";
        Blur.style.top = dets.y - 200 + "px";
    })

    // for the nav bar animation
    gsap.to("#nav",{
        backgroundColor: "#000",
        duration:0.5,
        height: "95px",
        scrollTrigger: {
            trigger: "#nav",
            scroller:"body",
            markers: false,
            start:"top -10%",
            end:"top -11%",
            scrub:1
        }
    })


    //  for the main body animation when scrolling
    gsap.to("#main",{
        backgroundColor: "#000",
        scrollTrigger:{
            trigger:"#main",
            scroller:"body",
            markers:false,
            start:"top -25%",
            end:"top -100%",
            scrub:2
        }
    })

    gsap.from("#about-us img ,#about-us-in",{
        y:50,
        opacity:0,
        duration:1,
        // stagger: 0.4,          to see elements one by one in 0.4s each 
        scrollTrigger:{
            trigger:"#about-us",
            scroller:"body",
            // markers:true,
            start: "top 70%",
            end: "top 65%",
            scrub: 1
        }
    })

    // this is for the cards animation 


    gsap.from(".card",{
        scale:0.7,
        opacity:1,
        duration:1,
        stagger:0.2,
        // stagger: 0.4,          to see elements one by one in 0.4s each 
        scrollTrigger:{
            trigger:".card",
            scroller:"body",
            // markers:true,   
            start: "top 70%",
            end: "top 65%",
            scrub: 1
        }

    })

    //this is for the colons animation

    gsap.from("#colon1",{
        y:-70,
        x:-70,
        scrollTrigger:{
            trigger:"#colon1",
            scroller:"body",
            // markers:true,
            start: "top 55%",
            end: "top 45%",
            scrub:4
        }
    })
    gsap.from("#colon2",{
        y:70,
        x:70,
        scrollTrigger:{
            trigger:"#colon1",
            scroller:"body",
            // markers:true,
            start: "top 55%",
            end: "top 45%",
            scrub:4
        }
    })

    gsap.from("#page4 h1",{
        y:50,
        scrollTrigger:{
            trigger:"#page4 h1",
            scroller:"body",
            markers:false,
            start: "top 75%",
            end: "top 70%",
            scrub:3
        }
    })





    let allh4 = document.querySelectorAll("#nav h4");
    allh4.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            crsr.style.scale=2.5;
            crsr.style.border ="1px solid white";
            crsr.style.backgroundColor="transparent";
        })
        elem.addEventListener("mouseleave",function(){
            crsr.style.scale=1;
            crsr.style.border ="0px solid #95C11E";
            crsr.style.backgroundColor="#95C11E";
        })
    })


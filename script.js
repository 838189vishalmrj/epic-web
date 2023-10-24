const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// gsap to animated 

gsap.from(".nlink",{
    stagger:.1,
    y:10,
    opcity:0,
    duration:1,
    ease:Power2,
    stagger:.3,
})

Shery.textAnimate("#heading h1", {
    style: 2,
    y: 10,
    delay: 0.3,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  gsap.from(".anim2",{
    y:30,
    stagger:.2,
    opacity:0,
    ease:Power2,
    duration:2,
  })

  Shery.imageEffect("#imgtext img",{
    style:3,
    config:{"uFrequencyX":{"value":11.57,"range":[0,100]},"uFrequencyY":{"value":5.79,"range":[0,100]},"uFrequencyZ":{"value":36.36,"range":[0,100]},"geoVertex":{"range":[1,64],"value":16.1},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  })

  Shery.imageEffect(".imgeff img",{
    style:5,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.8,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.3,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  })

  gsap.from("#imgtext img",{
    y:"70",
    opacity:0,
    duration:2,
    ease:Expo,
  })


  Shery.imageEffect("#bimg",{
    style:5,
    config:{"a":{"value":0.74,"range":[0,30]},"b":{"value":-0.97,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.1185631067961164},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4.7,"range":[1,15]},"durationOut":{"value":1.64,"range":[0.1,5]},"durationIn":{"value":0.83,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.2,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":32}},"discard_threshold":{"value":0.52,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.36,"range":[0,2]},"noise_scale":{"value":11.57,"range":[0,100]}},
    gooey:true,
  })


  document.querySelector("#ftext button")
    .addEventListener("mouseover",function(){
        gsap.to("#future video",{
            opacity:1,
            duration:1,
            ease:Power4,
        })
  })

  document.querySelector("#ftext button",)
    .addEventListener("mouseleave",function(){
    gsap.to("#future video",{
        opacity:0,
        duration:1,
        ease:Power4,
    })
  })
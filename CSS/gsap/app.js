//gsap.from('.header',{duration:1,y:'-100%',ease:'bounce'});
//gsap.from('.link',{duration:1,opacity:0,delay:1,stagger:0.5});

//gsap.from('.right',{duration:1,x:'-100vw',delay:1,ease:'power2.in'});
//gsap.from('.left',{duration:1,x:'-100vw',delay:1.5});
//gsap.to('.footer',{duration:1,y:0,delay:2,ease:'elastic'});
//gsap.fromTo('.btn',{opacity:0,scale:0,rotation:720},{opacity:1,scale:1,rotation:0,delay:3.5,duration:1});



//timeline ensures bunch of animations executed one after the other
const timeline=gsap.timeline({defaults:{duration:1}})
timeline
    .from('.header',{y:'-100%',ease:'bounce'})
    .from('.link',{opacity:0,stagger:0.5})
    .from('.right',{x:'-100vw',ease:'power2.in'},1)//absolute delay
    .from('.left',{x:'-100vw'},'<.5')//left carrot means delay from previous animation
    .to('.footer',{y:0,ease:'elastic'})
    .fromTo('.btn',{opacity:0,scale:0,rotation:720},{opacity:1,scale:1,rotation:0})


let reverse=document.querySelector(".btn");
reverse.addEventListener("click",()=>{
    timeline.timeScale(4);//4times faster
    timeline.reverse();
})
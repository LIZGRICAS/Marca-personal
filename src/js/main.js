// translate mouse movement into 3D rotation
window.addEventListener("mousemove", e => {
    w = window.innerWidth;
    h = window.innerHeight;
  
    const translateX  =  e.pageX * (106 / w);
    const translateXLayer  =  e.pageX * (16 / w);
  
    document.getElementById(
    "card").
    style.transform = `translateX(${translateX }px)`;
    document.getElementById(
        "layer").
        style.transform = `translateX(${translateXLayer }px)`;
  });
  
  // translate touch movement into 3D rotation
  window.addEventListener("touchmove", e => {
    w = window.innerWidth;
    h = window.innerHeight;
  
    const translateX =  e.changedTouches[0].pageX * (20 / w);
    const translateXLayer =  e.changedTouches[0].pageX * (5 / w);
  
    document.getElementById(
    "card").
    style.transform = `translateX(${translateX}px)`;
    document.getElementById(
        "layer").
        style.transform = `translateX(${translateXLayer}px)`;
  });
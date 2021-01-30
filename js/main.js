const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    //direction: 'vertical',
    loop: true,
  
    /* // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    */
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  function ScrollUp(){
    let t,s;
    s = document.body.scrollTop||window.pageYOffset;
    t = setInterval(function()
    {
      if(s > 0)window.scroll(0, s-=5);
      else clearInterval(t)},0.5);
    }
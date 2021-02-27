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


  // плавная прокрутка вверх
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
      anchor.addEventListener("click", function(event) {
          event.preventDefault();
          const blockID = anchor.getAttribute('href')
          document.querySelector('' + blockID).scrollIntoView({
              behavior: "smooth",
              block: "start"
          })
      })
  }
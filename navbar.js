  
      window.addEventListener("scroll", function () {
  document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 50);
});


  (function () {
    const nav = document.querySelector('.navbar');
    if (!nav) return;

    const onScroll = () => {
      if (window.scrollY > 50) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };

    // run once on load and then on scroll
    document.addEventListener('DOMContentLoaded', onScroll);
    window.addEventListener('scroll', onScroll);
  })();

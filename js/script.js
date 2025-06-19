    window.onload = function() {


let scrollTimeout;

window.addEventListener("scroll", function () {
  const btn = document.getElementById("scrollToTop");


  btn.style.display = "block";

  clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(function () {
    btn.style.display = "none";
  }, 1500);
});

document.getElementById("scrollToTop").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});




    const videos = document.querySelectorAll(".smart-video");

    videos.forEach(video => {
      video.addEventListener("click", () => {
        video.muted = !video.muted;
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const vid = entry.target;
        if (entry.isIntersecting) {
          vid.play();
        } else {
          vid.pause();
        }
      });
    }, { threshold: 0.5 });

    videos.forEach(video => observer.observe(video));
    };

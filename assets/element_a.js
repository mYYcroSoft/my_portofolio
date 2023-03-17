const inViewport = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
  };
  
  const Obs = new IntersectionObserver(inViewport);
  const obsOptions = {}; 
  
  // Attach observer to every [data-inviewport] element:
  const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
  ELs_inViewport.forEach(EL => {
    Obs.observe(EL, obsOptions);
  });

  // Get the id of the <path> element and the length of <path>
var triangle = document.getElementById("triangle");
var length = triangle.getTotalLength();

// The start position of the drawing
triangle.style.strokeDasharray = length;

// Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
triangle.style.strokeDashoffset = length;

// Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
window.addEventListener("scroll", myFunction);

function myFunction() {
  var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  var draw = length * scrollpercent;

  // Reverse the drawing (when scrolling upwards)
  triangle.style.strokeDashoffset = length - draw;
}

const tabsContainer=document.querySelector('.operation__tab--container');
const tabs = document.querySelectorAll('.operations__tab');
const nav=document.querySelector('.navbar');


///////////////////////////////////////
//Scrolling Action

document.querySelector('.navbar-nav').addEventListener('click', function (e) {
  
    // Matching strategy
    if (e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });

///////////////////////////////////////
//Tab hover

  tabsContainer.addEventListener('mouseover', function (e) {
    const mouseovered = e.target.closest('.operations__tab');

  // Guard clause
  if (!mouseovered) return;

   // Remove active classes
   tabs.forEach(t => t.classList.remove('operations__tab--active'));

  // Activate tab
  mouseovered.classList.add('operations__tab--active');

  })

  tabsContainer.addEventListener('mouseout', function (e) {
    const mouseouted = e.target.closest('.operations__tab');
mouseouted.classList.remove('operations__tab--active')

  })

  tabsContainer.addEventListener('click', function (e) {
    const mouseouted = e.target.closest('.operations__tab');
mouseouted.classList.toggle('operations__tab--active')
  })


  
///////////////////////////////////////
// Menu fade animation
const handleHover = function (e) {
    if (e.target.classList.contains('nav-link')) {
      const link = e.target;
      const siblings = link.closest('.nav').querySelectorAll('.nav-link');
      const logo = link.closest('.nav').querySelector('img');
  
      siblings.forEach(el => {
        if (el !== link) el.style.opacity = this;
      });
    logo.style.opacity = this;

    }
  };

  // Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

///////////////////////////////////////
// Reveal sections
const allSections = document.querySelectorAll('section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});



const anime=document.querySelector('.anime')

anime.addEventListener('click',function (){
  document.getElementsByClassName('.header').style.backgroundColor='red';
})
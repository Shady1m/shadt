
let counter = 0;
const createSection = () => {
  counter++;
  const content = `<section id="section${counter}" data-nav="Section ${counter}">
    <div class="landing__container">
    <h2>Section ${counter}</h2>
    <p>Important factors in delivering a banter is the subtext,
     situation and the rapport with the person. Every line in a
      banter should be able to evoke both an emotional response 
      and ownership without hurting one's feelings. Following a 
      structure that the involved parties understand is important,
       even if the subject and structure is absurd, a certain level
        of progression should be kept in a manner that it connects 
        with the involved parties.
    Different methods of story telling could be used in delivering
     banter, like making an unexpected turn in the flow of structure
      (interrupting a comfortable structure), taking the conversation
       towards an expected crude form with evoking questions, doubts,
        self-conscientiousness (creating intentional misunderstandings),
         or layering the existing pattern with multiple anchors. It is 
         important to quit the bantering with the sensibility of playground 
         rules, both parties shouldn't obsess on topping each other, continuously
          after a certain point of interest. It is as Shakespeare said "Brevity is 
          the soul of wit."[7]
    </p>
    </div>
    </section>`;
  document.querySelector("main").insertAdjacentHTML("beforeend", content);
};
const navBar = document.getElementById("navbar_2");
const createNavItems = () => {
  navBar.innerHTML = "";
  document.querySelectorAll("section").forEach((section) => {
    const listItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
    navBar.insertAdjacentHTML("beforeend", listItem);
  });
};
 const observingSections = () => {
   const observer = new IntersectionObserver(
     function (entries) {
       entries.forEach((entry) => {
         console.log(entry)
         let activeLink = navBar.querySelector(`[data-nav=${entry.target.id}]`);
         if (entry.isIntersecting) {
           entry.target.classList.add("your-active-class");
           activeLink.classList.add("active-link");
           location.hash = `${entry.target.id}`;
         } else {
           entry.target.classList.remove("your-active-class");
           activeLink.classList.remove("active-link");
         }
       });
     },
     
     {
       threshold: 0.80
     }
  )};
window.onscroll = function() {
	document.querySelectorAll("section").forEach(function(active) {
    let activeLink = navBar.querySelector(`[data-nav=${active.id}]`);
	if(active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150){

    active.classList.add("your-active-class");
    activeLink.classList.add("active-link");
    }
    else{
         active.classList.remove("your-active-class");
         activeLink.classList.remove("active-link");
    }
	});
}
navBar.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.dataset.nav) {
    document
      .getElementById(`${event.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      location.hash = `${event.target.dataset.nav}`;
    }, 200);
  }
});
for (let i = 1; i < 2; i++) createSection();
createNavItems();
 observingSections();


document.getElementById("ton").addEventListener("click", () => {
  createSection();
  createNavItems();
  observingSections();
  
});
const toTop = document.getElementById("up1");
const header = document.querySelector(".header_1");

toTop.addEventListener("click", () => {

  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
});
let isScrolling;
document.onscroll = () => {
  header.style.display = "block"
  clearTimeout(isScrolling)
   isScrolling = setTimeout(() => {
    header.style.display = "none";
  }, 4000);

  window.scrollY > 50
    ? (toTop.style.display="block")
    : (toTop.style.display = "none");
};

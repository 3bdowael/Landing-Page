/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const list = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// loop over sections using forEach.
sections.forEach(section => {
    // set section's id and class into variables.
    const sectionId = section.getAttribute('id');
    const sectionTitle = section.getAttribute('data-nav');
    // create li and a elements.
    const listItem = document.createElement('li');
    const listLink = document.createElement('a');
    // add href, title, class attributes for links
    listLink.href = `#${sectionId}`;
    listLink.textContent = sectionTitle;
    listLink.classList.add('menu__link');
    // Scroll to anchor ID using scrollTO event
    // add smooth scroll to anchors
    listLink.addEventListener("click", evt =>{
        evt.preventDefault();
        section.scrollIntoView({
            behavior: "smooth"
        });
    });
    listItem.appendChild(listLink);
    fragment.appendChild(listItem);
});
list.appendChild(fragment);

// Add class 'active' to section when near top of viewport  
// Add an active state to the section when it is in the viewport 
function makeActive(){
    for (section of sections) {
        const box = section.getBoundingClientRect();
        const sectionId = section.getAttribute("id");
        const listLink = document.querySelector(`[href="#${sectionId}"]`);
        if (box.top < 250 && box.top >= 0) {
            section.classList.add('your-active-class');
            listLink.classList.add('active');
        }else{
            section.classList.remove('your-active-class');
            listLink.classList.remove('active');
        }
    }
}
document.addEventListener("scroll", () => {
    makeActive();
});



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



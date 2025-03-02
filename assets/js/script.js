let resume = document.getElementsByClassName("resume");
let about = document.getElementsByClassName("about");
function showResume() {
  
    document.getElementById("resume").classList.add("active");
    document.getElementById("portfolio").classList.remove("active"); 
     document.getElementById("about").classList.remove("active");    
    
    
    
   
}
function showAbout() {

    document.getElementById("about").classList.add("active"); 
    document.getElementById("portfolio").classList.remove("active"); 
    document.getElementById("resume").classList.remove("active");
}
function showPortfolio() {

    document.getElementById("portfolio").classList.add("active"); 
    document.getElementById("about").classList.remove("active"); 
    document.getElementById("resume").classList.remove("active");
}

const sidebar = document.getElementById("sidebarek");
const sidebarBtn = document.getElementById("sidebar-btn");

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}
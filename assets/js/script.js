'use strict';



// element toggle function_____________________________________________________
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables____________________________________________________________
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });





// Feedback variables__________________________________________________________
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);














// Filter Projects_____________________________________________________________
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










// contact form variables_________________________________________________
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}





// Login_____________________________________________
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevents form submission

  // Get the input values
  var username = document.querySelector('#loginForm input[name="logName"]').value;
  var password = document.querySelector('#loginForm input[name="logPass"]').value;

  // Check if username and password match the required credentials
  var isValid = username === 'Admin' && password === 'PassAdmin';

  if (isValid) {
    var validContainer = document.getElementById('validContainer');
    validContainer.textContent = 'Welcome Back, Sir!';
    validContainer.classList.add('success-message');

    setTimeout(function() {
      document.getElementById('loginForm').submit();
    }, 2000);

    setTimeout(function() {
      validContainer.textContent = '';
      validContainer.classList.remove('success-message');
    }, 3000);

  } else {
    var errorContainer = document.getElementById('errorContainer');
    errorContainer.textContent = 'Invalid username or password !!!';
    errorContainer.classList.add('error-message');

    setTimeout(function() {
      errorContainer.textContent = '';
      errorContainer.classList.remove('error-message');
    }, 1000); 
  }
});







































// page navigation variables_____________________________________________
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}












//DarkMode____________________________________________________

//invert color
function toggleRootStyles() {
  const checkbox = document.querySelector('.checkbox');
  const rootStyles = `
  :root {

    --bg-gradient-onyx: linear-gradient(to bottom right,
      hsl(0, 0%, 81%) 3%,
      hsl(0, 0%, 84%) 97%);
    --bg-gradient-jet: linear-gradient(to bottom right,
      hsla(0, 0%, 100%, 0.251) 0%,
      hsla(0, 0%, 75%, 0) 100%), 
      hsl(0, 0%, 64%);
    --bg-gradient-blue-1: linear-gradient(to bottom right,
      hsl(237, 59%, 49%) 0%,
      hsla(0, 0%, 93%, 0) 50%);
    --bg-gradient-blue-2: linear-gradient(135deg,
      hsla(242, 100%, 71%, 0.251) 0%,
      hsla(0, 0%, 91%, 0) 59.86%), 
      hsl(0, 0%, 93%);
    --border-gradient-onyx: linear-gradient(to bottom right,
      hsl(0, 0%, 73%) 0%,
      hsla(0, 0%, 58%, 0) 50%);
    --text-gradient-blue: linear-gradient(to right,
      hsl(237, 59%, 49%),
      hsl(237, 59%, 49%));
    
    
    --jet: hsl(0, 0%, 65%);
    --onyx: hsl(0, 0%, 72%);
    --eerie-black-1: hsl(0, 0%, 91%);
    --eerie-black-2: hsl(0, 0%, 86%);
    --smoky-black: hsl(0, 0%, 50%);
    --white-1: hsl(0, 0%, 0%);
    --white-2: hsl(0, 0%, 0%);
    --blue-crayola: hsl(237, 100%, 65%);
    --vegas-blue: hsl(237, 69%, 55%);
    --light-gray: hsl(0, 0%, 14%);
    --light-gray-70: hsla(0, 0%, 18%, 0.7);
    --red-dead: hsl(0, 43%, 51%);
    --gray-ech:hsla(0, 0%, 73%, 0.75);
    
    --shadow-1: -4px 8px 24px hsla(0, 0%, 00%, 0.25);
    --shadow-2: 0 16px 30px hsla(0, 0%, 00%, 0.25);
    --shadow-3: 0 16px 40px hsla(0, 0%, 00%, 0.25);
    --shadow-4: 0 25px 50px hsla(0, 0%, 00%, 0.15);
    --shadow-5: 0 14px 20px hsla(0, 0%, 00%, 0.25);
    
    --fw-300: 500;
    --fw-400: 600;
    --fw-500: 700;
    --fw-600: 800;
  
  }
  `;

//invert images
  const avatarImages = document.querySelectorAll('.avatar-box img');
  const defaultImageSrc = './assets/images/PDP.jpg';
  const newImageSrc = './assets/images/PDP..jpg';
  const reversedImageFilter = 'invert(100%)';
  const iconImages = document.querySelectorAll('.service-icon-box img');
  
  checkbox.addEventListener('change', () => {
    const styleElement = document.querySelector('#rootStyles');
  
    if (checkbox.checked) {
      if (!styleElement) {
        const style = document.createElement('style');
        style.id = 'rootStyles';
        style.innerHTML = rootStyles;
        document.head.appendChild(style);
      }
      
      avatarImages.forEach((image) => {
        image.src = newImageSrc;
      });
      
      iconImages.forEach((image) => {
        image.style.filter = reversedImageFilter;
      });
    } else {
      if (styleElement) {
        styleElement.remove();
      }
      
      avatarImages.forEach((image) => {
        image.src = defaultImageSrc;
      });
      
      iconImages.forEach((image) => {
        image.style.filter = 'none';
      });
    }
  });
  
}

toggleRootStyles();









// Add project_______________________________________________________________

document.getElementById("addButton").addEventListener("click", function() {
  var formContainer = document.getElementById("formContainer");
  formContainer.style.display = "block";
});

document.getElementById("blockForm").addEventListener("submit", function(event) {
  event.preventDefault();

  //get infos
  var imageUrl = document.getElementById("imageUrl").value;
  var linkUrl = document.getElementById("linkUrl").value;
  var title = document.getElementById("title").value;
  var category = document.getElementById("category").value;

  // Create the new block elements
  var li = document.createElement("li");
  li.classList.add("project-item", "active");
  li.setAttribute("data-filter-item", "");
  li.setAttribute("data-category", category);

  var a = document.createElement("a");
  a.href = linkUrl;

  var figure = document.createElement("figure");
  figure.classList.add("project-img");

  var iconBox = document.createElement("div");
  iconBox.classList.add("project-item-icon-box");

  var icon1 = document.createElement("ion-icon");
  icon1.setAttribute("name", "eye-outline");

  var pre = document.createElement("pre");
  pre.textContent = " | ";

  var icon2 = document.createElement("ion-icon");
  icon2.setAttribute("name", "trash-outline");
  icon2.classList.add("remove-button");

  var img = document.createElement("img");
  img.src = imageUrl;
  img.setAttribute("loading", "lazy");

  var h3 = document.createElement("h3");
  h3.classList.add("project-title");
  h3.textContent = title;

  var p = document.createElement("p");
  p.classList.add("project-category");
  p.textContent = category;

  // Append the elements to construct the block
  iconBox.appendChild(icon1);
  iconBox.appendChild(pre);
  iconBox.appendChild(icon2);
  figure.appendChild(iconBox);
  figure.appendChild(img);
  a.appendChild(figure);
  a.appendChild(h3);
  a.appendChild(p);
  li.appendChild(a);

  // Append the new block to the project list
  var projectList = document.querySelector(".project-list");
  projectList.appendChild(li);

  // Reset the form and hide the container
  document.getElementById("blockForm").reset();
  document.getElementById("formContainer").style.display = "none";
});





// remove project______________________________________________________

// Get all the project items
const projectItems = document.querySelectorAll('.project-item');

// Add event listeners to each project item
projectItems.forEach(item => {
  const removeButton = item.querySelector('.remove-button');

  // Add event listener for hovering over the project item
  item.addEventListener('mouseover', () => {
    removeButton.style.display = 'block';
  });

  // Add event listener for moving the mouse out of the project item
  item.addEventListener('mouseout', () => {
    removeButton.style.display = 'none';
  });

  // Add event listener for clicking the remove button
  removeButton.addEventListener('click', () => {
    item.style.display = 'none';
  });
});












//Edit Test__________________________________________________________________

  // Function to handle the editing functionality
  function handleEdit(element) {
    var text = element.innerText;
    var newText = prompt("Edit the content:", text);
    if (newText !== null) {
      element.innerText = newText;
    }
  }

  // Function to handle the removal functionality
  function handleRemove(element) {
    if (confirm("Are you sure you want to remove this element?")) {
      element.remove();
    }
  }

  // Add event listeners to enable editing and removing on hover
  document.addEventListener("DOMContentLoaded", function () {
    var hoverElements = document.querySelectorAll("[data-editable]");
    hoverElements.forEach(function (element) {
      element.addEventListener("mouseover", function () {
        this.classList.add("hovered");
      });
      element.addEventListener("mouseout", function () {
        this.classList.remove("hovered");
      });
      element.addEventListener("click", function (event) {
        event.stopPropagation();
        var icon = this.querySelector(".edit-icon");
        if (icon) {
          icon.remove();
        } else {
          var editIcon = document.createElement("span");
          editIcon.classList.add("edit-icon");
          editIcon.innerHTML = '<ion-icon name="create-outline"></ion-icon>';
          this.appendChild(editIcon);
          editIcon.addEventListener("click", function (event) {
            event.stopPropagation();
            handleEdit(element);
          });
        }
        
      });
      element.addEventListener("dbclick", function (event) {
        event.stopPropagation();
        handleRemove(element);
      });
    });
  });



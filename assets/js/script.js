'use strict';



// element toggle function_____________________________________________________
var elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables____________________________________________________________
var sidebar = document.querySelector("[data-sidebar]");
var sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });





// Feedback variables__________________________________________________________
var testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
var modalContainer = document.querySelector("[data-modal-container]");
var modalCloseBtn = document.querySelector("[data-modal-close-btn]");
var overlay = document.querySelector("[data-overlay]");

// modal variable
var modalImg = document.querySelector("[data-modal-img]");
var modalTitle = document.querySelector("[data-modal-title]");
var modalText = document.querySelector("[data-modal-text]");

// modal toggle function
var testimonialsModalFunc = function () {
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
var select = document.querySelector("[data-select]");
var selectItems = document.querySelectorAll("[data-select-item]");
var selectValue = document.querySelector("[data-selecct-value]");
var filterBtn = document.querySelectorAll("[data-filter-btn]");

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
var filterItems = document.querySelectorAll("[data-filter-item]");

var filterFunc = function (selectedValue) {

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
var form = document.querySelector("[data-form]");
var formInputs = document.querySelectorAll("[data-form-input]");
var formBtn = document.querySelector("[data-form-btn]");

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
document.getElementById('loginForm').addEventListener('submit', function (e) {
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

    // Show all ion-icon elements
    var allicons = document.querySelectorAll('ion-icon');
    var projectadd = document.getElementById("List-add");
    allicons.forEach(function (icon) {
      icon.style.display = 'block';
      projectadd.style.display = 'block'
    });
    /*
        setTimeout(function() {
          document.getElementById('loginForm').submit();
        }, 2000);*/

    setTimeout(function () {
      validContainer.textContent = '';
      validContainer.classList.remove('success-message');
    }, 3000);

  } else {
    var errorContainer = document.getElementById('errorContainer');
    errorContainer.textContent = 'Invalid username or password !!!';
    errorContainer.classList.add('error-message');

    setTimeout(function () {
      errorContainer.textContent = '';
      errorContainer.classList.remove('error-message');
    }, 1000);
  }
});























// page navigation variables_____________________________________________
var navigationLinks = document.querySelectorAll("[data-nav-link]");
var pages = document.querySelectorAll("[data-page]");

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
  var checkbox = document.querySelector('.checkbox');
  var rootStyles = `
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
  var avatarImages = document.querySelectorAll('.avatar-box img');
  var defaultImageSrc = './assets/images/PDP.jpg';
  var newImageSrc = './assets/images/PDP..jpg';
  var reversedImageFilter = 'invert(100%)';
  var iconImages = document.querySelectorAll('.service-icon-box img');

  checkbox.addEventListener('change', () => {
    var styleElement = document.querySelector('#rootStyles');

    if (checkbox.checked) {
      if (!styleElement) {
        var style = document.createElement('style');
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

document.getElementById("addButton").addEventListener("click", function () {
  var formContainer = document.getElementById("formContainer");
  formContainer.style.display = "block";
});

document.getElementById('blockForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form input values
  var imageUrl = document.getElementById('imageUrl').value;
  var linkUrl = document.getElementById('linkUrl').value;
  var title = document.getElementById('title').value;
  var category = document.getElementById('category').value;

  // Get the uploaded image file
  var fileInput = document.getElementById('imageUrl');
  var imageFile = fileInput.files[0];

  // Create a new FileReader object to read the image file
  var reader = new FileReader();

  // Set up the FileReader onload event
  reader.onload = function() {
    // Create a new project item
    var projectList = document.getElementById('project-list');
    var newProjectItem = document.createElement('li');
    newProjectItem.className = 'project-item active';
    newProjectItem.setAttribute('data-filter-item', '');
    newProjectItem.setAttribute('data-category', category);

    newProjectItem.innerHTML = `
      <a href="${linkUrl}">
        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
            <pre> | </pre>
            <ion-icon name="trash-outline" class="remove-button"></ion-icon>
          </div>
          <img src="${reader.result}" loading="lazy">
        </figure>
        <h3 class="project-title">${title}</h3>
        <p class="project-category">${category}</p>
      </a>
    `;

    // Insert the new project item as the second item in the project list
    var secondItem = projectList.children[1];
    projectList.insertBefore(newProjectItem, secondItem);

    // Close the modal
    closeModal('formContainer');
  };

  // Read the image file as a data URL
  reader.readAsDataURL(imageFile);
});









// remove project______________________________________________________

// Get all the project items
var projectItems = document.querySelectorAll('.project-item');

// Add event listeners to each project item
projectItems.forEach(item => {
  var removeButton = item.querySelector('.remove-button');

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


















//Edit Resume__________________________________________________________________


function editEducation() {
  var educationModal = document.getElementById('editEducationModal');
  educationModal.style.display = 'block';
}

function editExperience() {
  var experienceModal = document.getElementById('editExperienceModal');
  experienceModal.style.display = 'block';
}

function editSkills() {
  var skillsModal = document.getElementById('editSkillsModal');
  skillsModal.style.display = 'block';
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = 'none';
}


document.getElementById('educationForm').addEventListener('submit', function (event) {
  event.preventDefault();
  var schoolName = document.getElementById('schoolName').value;
  var schoolYears = document.getElementById('schoolYears').value;
  var schoolDescription = document.getElementById('schoolDescription').value;

  // Update or add the education item in the list
  var educationList = document.getElementById('education-list');
  var newItem = document.createElement('li');
  newItem.className = 'timeline-item';
  newItem.innerHTML = `
    <h4 class="h4 timeline-item-title" contenteditable>${schoolName}
      <div class="icons-info">
      <ion-icon name="create-outline" class="button-edit" onclick="enableEdit(this)" style="display: block;"></ion-icon>
      <ion-icon name="trash-outline" class="button-delete" onclick="deleteInfo(this)" style="display: block;"></ion-icon>
      </div>
    </h4>
    <span contenteditable>${schoolYears}</span>
    <p class="timeline-text" contenteditable>
      ${schoolDescription}
    </p>
  `;

  // Add the new item at the beginning of the list
  educationList.insertBefore(newItem, educationList.firstChild);

  closeModal('editEducationModal');
});

document.getElementById('experienceForm').addEventListener('submit', function (event) {
  event.preventDefault();
  var experienceTitle = document.getElementById('experienceTitle').value;
  var experienceYears = document.getElementById('experienceYears').value;
  var experienceDescription = document.getElementById('experienceDescription').value;

  // Update or add the experience item in the list
  var experienceList = document.getElementById('experience-list');
  var newItem = document.createElement('li');
  newItem.className = 'timeline-item';
  newItem.innerHTML = `
    <h4 class="h4 timeline-item-title" contenteditable>${experienceTitle}
      <div class="icons-info">
        <ion-icon name="create-outline" class="button-edit" onclick="enableEdit(this)" style="display: block;"></ion-icon>
        <ion-icon name="trash-outline" class="button-delete" onclick="deleteInfo(this)" style="display: block;"></ion-icon>
      </div>
    </h4>
    <span contenteditable>${experienceYears}</span>
    <p class="timeline-text" contenteditable>
    ${experienceDescription}
    </p>
  `;

  // Add the new item at the beginning of the list
  experienceList.insertBefore(newItem, experienceList.firstChild);

  closeModal('editExperienceModal');
});

document.getElementById('skillsForm').addEventListener('submit', function (event) {
  event.preventDefault();
  var skillName = document.getElementById('skillName').value;
  var skillPercentage = document.getElementById('skillPercentage').value;

  // Find the skills item with the corresponding skill name
  var skillsList = document.getElementById('skills-list');
  var skillsItems = skillsList.getElementsByClassName('skills-item');

  let targetItem = null;
  for (let i = 0; i < skillsItems.length; i++) {
    var titleElement = skillsItems[i].querySelector('.title-wrapper h5');
    if (titleElement.innerText === skillName) {
      targetItem = skillsItems[i];
      break;
    }
  }

  if (targetItem) {
    // Update the existing skill item
    targetItem.querySelector('.title-wrapper data').setAttribute('value', skillPercentage);
    targetItem.querySelector('.skill-progress-fill').style.width = `${skillPercentage}%`;
  } else {
    // Create a new skill item
    var newItem = document.createElement('li');
    newItem.className = 'skills-item';
    newItem.innerHTML = `
      <div class="title-wrapper">
        <h5 class="h5" contenteditable>${skillName}</h5>
        <data value="${skillPercentage}" contenteditable>${skillPercentage}%</data>
        <div class="icons-info">
          <ion-icon name="create-outline" class="button-edit" onclick="enableEdit(this)" style="display: block;"></ion-icon>
          <ion-icon name="trash-outline" class="button-delete" onclick="deleteInfo(this)" style="display: block;"></ion-icon>
        </div>
      </div>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: ${skillPercentage}%;" data-value="${skillPercentage}"></div>
      </div>
    `;

    // Add the new item at the end of the list
    skillsList.appendChild(newItem);
  }

  closeModal('editSkillsModal');
});



document.getElementById('educationForm').addEventListener('submit', function (event) {
  event.preventDefault();
  var schoolName = document.getElementById('schoolName').value;
  var schoolYears = document.getElementById('schoolYears').value;
  var schoolDescription = document.getElementById('schoolDescription').value;

  // Create a new window to display the result
  var newWindow = window.open('', '_blank');

  // Set the content of the new window
  newWindow.document.write(`
<h2>${schoolName}</h2>
<p>${schoolYears}</p>
<p>${schoolDescription}</p>
`);

  closeModal('editEducationModal');
});
















//Delet list___________________________________________________________________________
function deleteInfo(element) {
  var listItem = element.closest('li');

  // Ask for confirmation
  var confirmDelete = confirm("Are you sure you want to delete this block?");
  if (confirmDelete) {
    listItem.remove();
  }
}





//Edit list___________________________________________________________________________
function enableEdit(element) {
  var listItem = element.closest('.skills-item, .timeline-item, .contacts-list, .about-text');
  var editableElements = listItem.querySelectorAll('[contenteditable]');

  // Enable editing for each contenteditable element within the list item
  editableElements.forEach((el) => {
    el.setAttribute('contenteditable', 'true');
    el.classList.add('editing');
  });

  // Change the icon to a save icon
  element.setAttribute('name', 'save-outline');
  element.setAttribute('onclick', 'saveEdit(this)');
}

function saveEdit(element) {
  var listItem = element.closest('.skills-item, .timeline-item, .contacts-list, .about-text');
  var editableElements = listItem.querySelectorAll('[contenteditable]');

  // Disable editing for each contenteditable element within the list item
  editableElements.forEach((el) => {
    el.setAttribute('contenteditable', 'false');
    el.classList.remove('editing');
  });

  // Change the icon back to an edit icon
  element.setAttribute('name', 'create-outline');
  element.setAttribute('onclick', 'enableEdit(this)');
}


// JavaScript code to update the progress bar width
document.addEventListener("DOMContentLoaded", function () {
  var dataElements = document.querySelectorAll("data");
  dataElements.forEach(function (element) {
    element.addEventListener("input", function () {
      var newValue = parseInt(element.textContent, 10);
      if (!isNaN(newValue)) {
        var parentSkillItem = element.closest(".skills-item");
        var skillProgressFill = parentSkillItem.querySelector(".skill-progress-fill");
        var initialWidth = skillProgressFill.getAttribute("data-value");
        skillProgressFill.style.width = newValue + "%";
        skillProgressFill.setAttribute("data-value", newValue);
      }
    });
  });
});


// Get all elements with the 'contenteditable' attribute
var editableElements = document.querySelectorAll('[contenteditable="true"]');

// Add an event listener to each element
editableElements.forEach(function(element) {
  element.addEventListener('input', function() {
    // Check if the content is true
    if (element.textContent.trim() === 'true') {
      element.classList.add('highlight');
    } else {
      element.classList.remove('highlight');
    }
  });
});







//API___________________________________________________________________________
function fetchGitHubUserData(username) {
  var userUrl = `https://api.github.com/users/${username}`;
  var reposUrl = `https://api.github.com/users/${username}/repos`;

  var userPromise = fetch(userUrl).then(response => response.json());
  var reposPromise = fetch(reposUrl).then(response => response.json());

  return Promise.all([userPromise, reposPromise])
    .then(([userData, reposData]) => {
      return { userData, reposData };
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
}

function displayGitHubUserData(userData, reposData) {
  var githubUserInfo = document.getElementById('github-user-info');
  var githubRepoList = document.getElementById('github-repo-list');

  if (userData.message === 'Not Found') {
    alert('Username does not exist.');
    return;
  }

  var userHtml = `
    <h2>${userData.name}</h2>
    <img src="${userData.avatar_url}" alt="Profile Picture">
    <p>Username: ${userData.login}</p>
    <p>Followers: ${userData.followers}</p>
    <p>Repositories: ${userData.public_repos}</p>
    <p><a href="${userData.html_url}" target="_blank">View Profile</a></p>
  `;

  githubUserInfo.innerHTML = userHtml;

  var reposHtml = reposData.map(repo => {
    return `
      <div>
        <h3>${repo.name}</h3>
        <p>${repo.description}</p>
        <p>Language: ${repo.language}</p>
        <p><a href="${repo.html_url}" target="_blank">View Repository</a></p>
      </div>
    `;
  }).join('');

  githubRepoList.innerHTML = reposHtml;
}


var username = 'CodeWizard-404';

fetchGitHubUserData(username)
  .then(({ userData, reposData }) => {
    displayGitHubUserData(userData, reposData);
  })
  .catch(error => {
    console.error('Error:', error);
  });


  
// API function change

function fetchUserData() {
  var usernameInput = document.getElementById('username-input');
  let username = usernameInput.value.trim();

  // Set default value if no username input is provided
  if (username === '') {
    username = 'CodeWizard-404';
  }

  fetchGitHubUserData(username)
    .then(({ userData, reposData }) => {
      displayGitHubUserData(userData, reposData);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}





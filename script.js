function messagesubmitted(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    return;
  }
  alert("Message submitted!");
}


document.addEventListener('DOMContentLoaded', function() {
  var flipCheckbox = document.getElementById('flip');
  var loginForm = document.querySelector('.login-form');
  var signupForm = document.querySelector('.signup-form');


  flipCheckbox.addEventListener('change', function() {
    if (flipCheckbox.checked) {
      loginForm.style.display = 'none';
      signupForm.style.display = 'block';
    } else {
      loginForm.style.display = 'block';
      signupForm.style.display = 'none';
    }
  });


  var loginFormSubmit = loginForm.querySelector('form');
  loginFormSubmit.addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = loginFormSubmit.querySelector('input[type="text"]').value;
    var password = loginFormSubmit.querySelector('input[type="password"]').value;

 
    if (email === 'example@example.com' && password === 'password') {
      console.log('Login Successful');
      window.location.href = 'home.html';
    } else {
      console.log('Invalid Credentials');
      loginFormSubmit.reset();
    }
  });


  var signupFormSubmit = signupForm.querySelector('form');
  signupFormSubmit.addEventListener('submit', function(event) {
    event.preventDefault();


    var name = signupFormSubmit.querySelector('input[name="name"]').value;
    var email = signupFormSubmit.querySelector('input[type="text"]').value;
    var password = signupFormSubmit.querySelector('input[type="password"]').value;

    
    console.log('Signup Form Submitted');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    signupFormSubmit.reset();
  });
});


// for Searching Candidates
// Sample candidate data
var candidates = [
  {
    name: "John Doe",
    location: "New York",
    jobRole: "Software Engineer",
    email: "johndoe@example.com",
    contact: "214xxxx98"
  },
  {
    name: "Jane Smith",
    location: "San Francisco",
    jobRole: "Data Analyst",
    email: "janesmith@example.com",
    contact: "214xxxx98",
  },
  {
    name: "Mike Johnson",
    location: "Chicago",
    jobRole: "Project Manager",
    email: "mike@example.com",
    contact: "214xxxx98",
  },
  {
    name: "Emily Davis",
    location: "New York",
    jobRole: "UX Designer",
    email: "emaily@example.com",
    contact: "214xxxx98",
  },
  {
    name: "Rudra Sharma",
    location: "India",
    jobRole: "Frontend Developer",
    email: "rudras1212@gmail.com",
    contact: "214xxxx98",
  },
  {
    name: "Abhishek Kumar",
    location: "India",
    jobRole: "Backend Developer",
    email: "abhi1212@example.com",
    contact: "214xxxx98",
  }

];

document.getElementById("search-button").addEventListener("click", function() {
  var location = document.getElementById("location").value.toLowerCase();
  var jobRole = document.getElementById("job-role").value.toLowerCase();

  var filteredCandidates = candidates.filter(function(candidate) {
    return candidate.location.toLowerCase().includes(location) &&
           candidate.jobRole.toLowerCase().includes(jobRole);
  });

  displayCandidates(filteredCandidates);
  var candidateList = document.getElementById("candidate-list");
  candidateList.scrollIntoView({ behavior: 'smooth' });
});

function displayCandidates(candidates) {
  var candidateList = document.getElementById("candidate-list");
  candidateList.innerHTML = "";

  if (candidates.length === 0) {
    var noResults = document.createElement("p");
    noResults.classList.add("no-results");
    noResults.textContent = "No candidates found.";
    candidateList.appendChild(noResults);
  } else {

    candidates.forEach(function(candidate) {
      var candidateItem = document.createElement("div");
      candidateItem.classList.add("candidate-item");

      var candidateName = document.createElement("h3");
      candidateName.textContent = candidate.name;

      var candidateLocation = document.createElement("p");
      candidateLocation.innerHTML = "<span>Location:</span> " + candidate.location;

      var candidateJobRole = document.createElement("p");
      candidateJobRole.innerHTML = "<span>Job Role:</span> " + candidate.jobRole;

      var candidateEmail = document.createElement("p");
      candidateEmail.innerHTML = "<span>Email:</span> " + candidate.email;

      var candidateContact = document.createElement("p");
      candidateContact.innerHTML = "<span>Contact No.:</span> " + candidate.contact;

      candidateItem.appendChild(candidateName);
      candidateItem.appendChild(candidateLocation);
      candidateItem.appendChild(candidateJobRole);
      candidateItem.appendChild(candidateEmail);
      candidateItem.appendChild(candidateContact);

      candidateList.appendChild(candidateItem);

      

    });
  }
}

function redirectToApp() {
  checkLoggedInStatus()
    .then(function(loggedIn) {
      if (loggedIn) {
        window.location.href = 'search.html'; 
      } else {
        window.location.href = 'login.html';
      }
    })
    .catch(function(error) {
      console.error(error);
    });
}

function checkLoggedInStatus() {
  return new Promise(function(resolve) {
    var loggedInStatus = sessionStorage.getItem('loggedIn');
    var isLoggedIn = loggedInStatus === 'true'; 
    resolve(isLoggedIn);
  });
}

function setLoggedInStatus(status) {
  sessionStorage.setItem('loggedIn', status);
}

function login() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

 
  if (email === 'user@example.com' && password === 'password') {
    setLoggedInStatus(true); 
    window.location.href = 'search.html'; 
  } else {
    setLoggedInStatus(false); 
    alert('Invalid email or password'); 
  }
}

function logout() {
  setLoggedInStatus(false); 
  sessionStorage.removeItem('loggedIn'); 
  window.location.href = 'login.html'; 
}



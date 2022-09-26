 const signUp = e => {
     let fname = document.getElementById('fname').value,
         lname = document.getElementById('lname').value,
         email = document.getElementById('email').value,
         pwd = document.getElementById('pwd').value;

     let formData = JSON.parse(localStorage.getItem('formData')) || [];

     let exist = formData.length &&
         JSON.parse(localStorage.getItem('formData')).some(data =>
             data.fname.toLowerCase() == fname.toLowerCase() &&
             data.lname.toLowerCase() == lname.toLowerCase()
         );

     if (!exist) {
         formData.push({ fname, lname, email, pwd });
         localStorage.setItem('formData', JSON.stringify(formData));
         document.querySelector('form').reset();
         document.getElementById('fname').focus();
         alert("Account Created.\n\nPlease Login below.");
         location.href = "friendly.html";

     } else {
         alert("Ooopppssss... Duplicate found!!!\nYou have already signed up");
     }
     e.preventDefault();
 }


 function login(e) {
     let email = document.getElementById('email').value,
         pwd = document.getElementById('pwd').value;
     let formData = JSON.parse(localStorage.getItem('formData')) || [];
     let exist = formData.length &&
         JSON.parse(localStorage.getItem('formData')).some(data =>
             data.email.toLowerCase() == email.toLowerCase() &&
             data.pwd.toLowerCase() == pwd.toLowerCase());
     if (!exist) {
         alert("Incorrect login credentials");
     } else {
         alert('Login successful');
         location.href = "friendly.html";
     }
     e.preventDefault();
 }
 /*function login(e) {
     let log_email = document.getElementById('email').value,
         log_pwd = document.getElementById('pwd').value;
     let formData = JSON.parse(localStorage.getItem('formData')) || [];
     let exist = formData.length &&
         JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
     if (!exist) {
         alert("Incorrect login credentials");
     } else {
         location.href = "friendly.html";
     }
     e.preventDefault();
 } */

var image1 = document.getElementById('image-show1');
var image2 = document.getElementById('image-show2');
var image3 = document.getElementById('image-show3');
var image4 = document.getElementById('image-show4');

var button= document.getElementById('first').addEventListener('click',function(){
  console.log("button"+this.id);
  // var image1 = document.getElementById('image-show1');
  image1.style.display='block';
  image2.style.display='none';
  image3.style.display='none';
  image4.style.display='none';
})

var button2= document.getElementById('second').addEventListener('click',function(){
  // var image2 = document.getElementById('image-show2');
  image2.style.display='block';
  image1.style.display='none';
  image3.style.display='none';
  image4.style.display='none';
})

var button3= document.getElementById('third').addEventListener('click',function(){
  // var image2 = document.getElementById('image-show2');
  image3.style.display='block';
  image1.style.display='none';
  image2.style.display='none';
  image4.style.display='none';
})
var button4= document.getElementById('forth').addEventListener('click',function(){
  // var image2 = document.getElementById('image-show2');
  image4.style.display='block';
  image1.style.display='none';
  image2.style.display='none';
  image3.style.display='none';
})


// login form 
var main = document.getElementById('main');
var carousel_container = document.getElementById('carousel-container');
var form = document.getElementById('form');
var loginformfields = document.getElementById('loginformfields');

var loginbtn = document.getElementById('loginbtn').addEventListener('click',login);
function login(){
  loginformfields.reset();
  document.getElementById("signupbtn").disabled = true;
  document.getElementById("loginbtn").disabled = true;
  form.style.display='block';
  loginformfields.style.display='block';
  signupformfields.style.display='none';
  main.style.filter = 'blur(5px)'; 
  carousel_container.style.filter = 'blur(5px)'; 
   form.style.height = '27rem'; 
}

var error = document.getElementById('error');
var crossicon = document.getElementById('crossicon');
// var minimizeicon = document.getElementById('minimizeicon');
crossicon.addEventListener('click',function(){
  console.log('clickclosemobilemenu'+this.id)
  document.getElementById("signupbtn").disabled = false;
  document.getElementById("loginbtn").disabled = false;
  form.style.display='none';

  // form.style.width = '40%';
  // form.style.height = '24rem'; 
  // form.style.right = '18rem';
   
  main.style.filter = 'none'; 
  carousel_container.style.filter = 'none';
  
})
// minimizeicon.addEventListener('click',function(){
//   form.style.display='none';
  
// })
var submitbtn2 = document.getElementById('submitbtn2');
var submitbtn=  document.getElementById('submitbtn');
// maximizeicon.addEventListener('click',function(){
//   if(form.style.width == '40%'){
//     form.style.width = '60%';
//   form.style.height = '20rem'; 
//   form.style.right = '18rem'; 
//   submitbtn.style.right='11rem'
//   submitbtn2.style.right='11rem'
//   }
//  else{
//   form.style.width = '40%';
//   form.style.height = '20rem'; 
//   form.style.right = '18rem'; 
//     submitbtn.style.right='8rem'
//     submitbtn2.style.right='8rem'
//  }
// })

// signup form 


var signupformfields= document.getElementById('signupformfields');
var signupbtn = document.getElementById('signupbtn').addEventListener('click',signup);
function signup(){
 
    document.getElementById("signupbtn").disabled = true;
    document.getElementById("loginbtn").disabled = true;
  signupformfields.reset();
  form.style.display='block';
  loginformfields.style.display='none';
  signupformfields.style.display='block';
  main.style.filter = 'blur(5px)'; 
  carousel_container.style.filter = 'blur(5px)'; 
  form.style.height = '30rem'; 
 
}
var allreadyaccountlogin = document.getElementById('allreadyaccountlogin').addEventListener('click',login);

var donthaveanaccount= document.getElementById('donthaveanaccount').addEventListener('click',signup);

// header  menu for mobile
function menuFunction() {
  document.getElementById("onlymobile").style.display = "none";
  document.getElementById("mobilecrossicon").style.display = "block";
  document.getElementById("mobile_navbar").style.display = "block";

 
}

// hide mobile menu 
document.getElementById("mobilecrossicon").addEventListener("click", function() {

  document.getElementById("onlymobile").style.display = "block";
  document.getElementById("mobilecrossicon").style.display = "none";
  document.getElementById("mobile_navbar").style.display = "none";
});

// mobile login button 
document.getElementById('mobileloginbtn').addEventListener('click',function(){
  form.style.display='block';
  loginformfields.style.display='block';
  signupformfields.style.display='none';
  form.style.width='70%';
  form.style.height = '27rem'; 
  form.style.right = '4rem'; 
  submitbtn.style.right= '4rem';
});

// signup button 
var signupbtn = document.getElementById('mobilesignupbtn').addEventListener('click',function(){
  form.style.display='block';
  loginformfields.style.display='none';
  signupformfields.style.display='block';
  form.style.width='70%';
  form.style.height = '30rem'; 
  form.style.right = '4rem'; 
  submitbtn.style.right= '4rem';
  submitbtn2.style.right= '4rem';
})


// dropdown for mobile 
var innersideofconnect = document.getElementById('innersideofconnect');
var downicon = document.getElementById('downicon');
var upicon = document.getElementById('upicon');

var connect= document.getElementById('connect').addEventListener('click',function(){
 if (innersideofconnect.style.display== 'none')
 {
  console.log('block'+this.id)
  downicon.style.display='none';
  upicon.style.display='block';
  innersideofconnect.style.display='flex'
 }

  else{
    console.log('hide'+this.id)
    downicon.style.display='block';
  upicon.style.display='none';
   innersideofconnect.style.display='none'
  }

})

// signupform data



// document.getElementById('submitbtn2').addEventListener('click',function(){
// console.log('signup-submit')

// let signupUsername= document.getElementById('signupUsername').value;
// let signupEmail= document.getElementById('signupEmail').value;

// let signupPassword= document.getElementById('signupPassword').value;

// console.log('signupUsername'+signupUsername);
// return form;

// })

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   form.getElementById('signupUsername');
//  form.getElementById('signupEmail');
//  form.getElementById('signupPassword');
// });



// signup form submission
let signupform = document.getElementById('signupformfields');
document.getElementById('submitbtn2').addEventListener('click', function(event){
  event.preventDefault();// its prevent the default behaviour of the form  
  if(validateForm()){

  let username = document.getElementById('signupUsername').value;
  let email = document.getElementById('signupEmail').value;
  let password = document.getElementById('signupPassword').value;

  // console.log('Username:', username);
  // console.log('Email:', email);
  // console.log('Password:', password);



  localStorage.setItem('username', username);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);

  // alert("Data has been saved in local storage.");

  let data= {
    username: username,
    email: email,
    password: password,

  };

  // let jsondata = JSON.stringify(data);
  const JSONToFile = (obj, filename) => {
    const blob = new Blob([JSON.stringify(obj, null, 2)], {
      type: 'application/json',
    });
  // console.log(jsondata);

  const url = URL.createObjectURL(blob);

  const a = document.createElement('a'); 
  a.href = url;
  a.download = `${filename}.json`;
  a.click();
  URL.revokeObjectURL(url);
};

JSONToFile({ test: data }, 'testJsonFile');
// window.location.reload(true);
window.open("http://localhost:8888/blogr/dashbord.html")

  }
 
});


// function abc(){
// return 'hello world';
// };

// const A = () => {

// };
// const B = function abc(){

// };
// const C = function (){

// };

function validateForm() {
  console.log(123);
  var username = document.getElementById("signupUsername").value;
  var email = document.getElementById("signupEmail").value;
  var password = document.getElementById("signupPassword").value;
var signupusername = document.getElementById("signupUsername");

  var usernameRegex = /^[A-Za-z\s]+$/;
  if (!usernameRegex.test(username)) {
      // alert("Username should only contain letters and spaces.");
      // signupusername.style.display='none';
     let usernameerror= document.getElementById('error').innerHTML='Username should only contain letters and spaces.';
  
      return false;
  }


  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  if (!emailRegex.test(email)) {
      // alert("Please enter a valid email address.");
      let emailerror= document.getElementById('error').innerHTML='Please enter a valid email address @gmail.com';

      return false;
  }


  if (password.length < 6) {
      // alert("Password must be at least 6 characters long.");
      let passworderror= document.getElementById('error').innerHTML='Password must be at least 6 characters long';

      return false;
  }


  return true;
}



// login form 
var loginUsername= document.getElementById('loginUsername');
var loginPassword= document.getElementById('loginPassword');
console.log(loginUsername);
console.log(loginPassword);

   // stored data from the register-form
   var storedName = localStorage.getItem('username');
   var storedPw = localStorage.getItem('password');
   var storedEmail = localStorage.getItem('email');
   console.log(storedPw);
   console.log(storedName);
   console.log(storedEmail);
   submitbtn.addEventListener('click', function(){

     // check if stored data from register-form is equal to data from login form
     if((loginUsername.value !== storedName && loginUsername.value !== storedEmail) || loginPassword.value !== storedPw) {
      // alert('ERROR');
      let error= document.getElementById('loginerror').innerHTML='Please enter a valid record ';

      
  }else {
      // alert('You are loged in.');
      window.open("http://localhost:8888/blogr/dashbord.html")
    }
   });





 
const fadeInElements = document.querySelectorAll('.fade-in');


const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
    
      entry.target.classList.add('fade-in-visible');
     
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 }); 

// Observe each element
fadeInElements.forEach(element => {
  observer.observe(element);
});

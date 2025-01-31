
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
  form.style.display='block';
  loginformfields.style.display='block';
  signupformfields.style.display='none';
  main.style.filter = 'blur(5px)'; 
  carousel_container.style.filter = 'blur(5px)'; 
   form.style.height = '27rem'; 
}

var crossicon = document.getElementById('crossicon');
// var minimizeicon = document.getElementById('minimizeicon');
crossicon.addEventListener('click',function(){
  console.log('clickclosemobilemenu'+this.id)
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
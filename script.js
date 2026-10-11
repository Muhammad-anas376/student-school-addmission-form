// ===============================
// Student Information Form JS
// ===============================

// Image Preview
const photo = document.getElementById("photo");
const preview = document.getElementById("preview");

if (photo) {
    photo.addEventListener("change", function () {

        const file = this.files[0];

        if (file) {
            preview.src = URL.createObjectURL(file);
            preview.style.display = "block";
        }
    });
}


// Auto Calculate Age from DOB

const dob = document.getElementById("dob");
const age = document.getElementById("age");

if (dob) {

dob.addEventListener("change", function(){

const birthDate = new Date(this.value);

const today = new Date();

let years = today.getFullYear() - birthDate.getFullYear();

const month = today.getMonth() - birthDate.getMonth();

if(month < 0 || (month === 0 && today.getDate() < birthDate.getDate())){

years--;

}

age.value = years;

});

}


// Form Validation

const form = document.getElementById("studentForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const firstName = document.getElementById("fname").value.trim();

const email = document.getElementById("email").value.trim();

const phone = document.getElementById("phone").value.trim();

const ageValue = document.getElementById("age").value;

const gender = document.querySelector('input[name="gender"]:checked');


// First Name

if(firstName==""){

alert("Please Enter First Name");

return;

}


// Email Validation

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!emailPattern.test(email)){

alert("Please Enter Valid Email Address");

return;

}


// Phone Validation

const phonePattern = /^[0-9]{11}$/;

if(!phonePattern.test(phone)){

alert("Phone Number Must Be 11 Digits");

return;

}


// Age Validation

if(ageValue < 3 || ageValue > 80){

alert("Please Enter Valid Age");

return;

}


// Gender Validation

if(!gender){

alert("Please Select Gender");

return;

}


// Photo Validation

if(photo.files.length === 0){

alert("Please Upload Student Photo");

return;

}


// Success

alert("Student Information Submitted Successfully!");

form.reset();

preview.style.display="none";

});




// Input Only Letters

document.getElementById("fname").addEventListener("keypress", function(e){

const char = String.fromCharCode(e.which);

if(!/[a-zA-Z ]/.test(char)){

e.preventDefault();

}

});




// Phone Number Only Digits

document.getElementById("phone").addEventListener("input", function(){

this.value=this.value.replace(/[^0-9]/g,'');

});




// Age Only 2 Digits

document.getElementById("age").addEventListener("input", function(){

if(this.value>99){

this.value=99;

}

});




// Reset Preview

form.addEventListener("reset", function(){

setTimeout(function(){

preview.style.display="none";

preview.src="";

},100);

});
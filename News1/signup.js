function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
function myFunction(x) {
  x.style.background = "grey";
}

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var country = document.getElementById("country").value;
    var gender = document.getElementById("gender").value;
    var pass = document.getElementById("pass").value;
    var confirmpass = document.getElementById("confirmpass").value;
    
    
    var nameErr = emailErr = mobileErr = countryErr = genderErr=passErr=cpassErr=true;
    
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]{5,10}$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
   
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
       
        var regex = /^[A-Za-z0-9+_.-]+@(.+)+\.(.+)$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
   
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[6-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
   
    if(country == "Select") {
        printError("countryErr", "Please select your country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }
  
    if(gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }


    if(pass==""){
        printError("passErr","Please enter your password");
    }else{
        var regex=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if(regex.test(pass)===false)
        {
            printError("passErr","Please enter a valid password");
        }
        else{
            printError("passErr","");
            passErr=false;

        }
    }
    

    
    if(confirmpass==""){
        printError("cpassErr","Please enter your password");
    }else{
        if(confirmpass!=pass){
            printError("cpassErr","password is not same");
          }
          else{
            printError("cpassErr","");
            cpassErr=false;
          }
    }
    
    
    if((nameErr || emailErr || mobileErr || countryErr || genderErr||passErr||cpassErr) == true) {
       return false; } 
       else {
       
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Country: " + country + "\n" +
                          "Gender: " + gender + "\n";
        
        alert(dataPreview);
    }

}

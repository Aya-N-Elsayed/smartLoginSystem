// CRUD operations


var nameInput = document.getElementById("userName");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");

var button = document.querySelector("#Btn");
var footerBtn = document.querySelector("#footerBtn");



//? Add
// var usersArr = [];

// check if local storage has data
var storedData = JSON.parse(localStorage.getItem("usersArr"));
if (storedData==null) {
    var usersArr = [];
    console.log("anan");
}

else{
 
    var usersArr = storedData;
    // display();
}





function add(){

    if(validateInputs("signup")== false){return;}
    var userInfo = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };




    usersArr.push(userInfo);
    console.log(userInfo);
    if(isRepeated() == false) //user signed up successfully
    {
        saveToLocal();
        signInPage();
    }
    


}


function isRepeated(){
    

    for (i=0 ; i<usersArr.length;i++){
        if((usersArr[i].email == usersArr[usersArr.length-1].email) && usersArr.length !=i+1)
        { console.log(usersArr[i],i);
            document.querySelector(".signUpMesg").innerHTML = usersArr[i].email +" email already exists, please enter a new one  ";
            document.querySelector(".signUpMesg").style.color='red';
            usersArr.pop();
            return true;

        }
    }

    document.querySelector(".signUpMesg").innerHTML = " success ";
    document.querySelector(".signUpMesg").style.color = "green";
    return false;

}

function clear(){
      nameInput.value = '';
      emailInput.value = '';
      passwordInput.value = '';
      document.querySelector(".signUpMesg").innerHTML = '';

}





function validateInputs(btnName){



    if ( emailInput.value =='' || passwordInput.value =='')
        {
            document.querySelector(".signUpMesg").innerHTML =
                " All inputs are required  ";
            document.querySelector(".signUpMesg").style.color =
                "red";
        return false;        
        }
    
    else if(nameInput=='' && btnName =="signup"){
        return false;

    }    

    else{
        document.querySelector(".signUpMesg").innerHTML ="";
         return true;
    }
    
       
}

function saveToLocal(){
    localStorage.setItem("usersArr",JSON.stringify(usersArr));
}

function signInPage(){
    document.querySelector("#userName").classList.add("d-none");
    clear();
    document.querySelector(".btn").innerHTML = 'Login';


    // change btn class (remove signUpBtn class and add login class)
    button.classList.remove("signUpBtn");
    button.classList.add("loginBtn");
    

    //change footer btn and footer messege
    footerBtn.classList.remove("haveAccBtn");
    footerBtn.classList.add("noAccBtn");
    footerBtn.innerHTML="Sign Up";
    document.querySelector(".whiteMsg").innerHTML = "Don't have an account ?";
}


function signUpPage() {
  document.querySelector("#userName").classList.remove("d-none");
  clear();
  document.querySelector(".btn").innerHTML = "Sign Up";

  // change btn class (remove loginBtn class and add signup class)
  button.classList.add("signUpBtn");
  button.classList.remove("loginBtn");

  //change footer btn and footer messege
  footerBtn.classList.remove("haveAccBtn");
  footerBtn.classList.add("noAccBtn");
  footerBtn.innerHTML = "Sign In";
  document.querySelector(".whiteMsg").innerHTML = "You have an account ?";
}



function logininValidator(){
    for(let i=0;i<usersArr.length;i++)
    {
        if(usersArr[i].email == emailInput.value ){
            if(usersArr[i].password == passwordInput.value)
            {
                console.log("signin succ");
                welcomePage(usersArr[i].name);
                return;
            }
            else{
                    document.querySelector(".signUpMesg").innerHTML =
                      "Wrong password";
                    document.querySelector(".signUpMesg").style.color = "red";
                    return;
            }
        }

    }
    document.querySelector(".signUpMesg").innerHTML =
        "This email isn't registered";
    document.querySelector(".signUpMesg").style.color =
        "red";



}

//* which page my website is currently showing
function pageName(){

    
    if (button.classList.contains("signUpBtn"))//if we are on signup page
    {
        add();
    }

    else{// we are on sign in page
        if (validateInputs("login") == false) {
            return;
        }

        logininValidator();
    }


   

}


function welcomePage(name){
    document.querySelector(".signForm").classList.add("d-none");
    document.querySelector("h2").innerHTML = `Welcome ${name} `;
    document.querySelector(".welcomePage").classList.remove("d-none");
    document.querySelector(".navbar").classList.remove("d-none");

}


//for footer button

footerBtn.addEventListener('click',function(){
 
    if(footerBtn.classList.contains("haveAccBtn"))
    {
        signInPage();
    }

    else{
        signUpPage();
    }
});


function logout(){
  document.querySelector(".signForm").classList.remove('d-none');
      document.querySelector(".welcomePage").classList.add("d-none");
      document.querySelector(".navbar").classList.add("d-none");

  signInPage();
}
// CRUD operations


var nameInput = document.getElementById("userName");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");



//? Add
var usersArr = [];

// check if local storage has data
// var storedData = JSON.parse(localStorage.getItem("usersArr"));
// if (storedData=='') {
//     var usersArr = [];
// }

// else{
 
//     var usersArr = storedData;
//     // display();
// }


// var usersArr = []


function add(){
    var userInfo = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };

    // if (!validate_URL(website.url)) {
    //     window.alert("invalid url ");
    //     clear();
    //     return;
    // }
   


    usersArr.push(userInfo);
    console.log(userInfo);
    isRepeated();
    // clear();
    // saveToLocal();


}


function isRepeated(){
    

    for (i=0 ; i<usersArr.length;i++){
        if((usersArr[i].email == usersArr[usersArr.length-1].email) && usersArr.length !=i+1)
        {
            document.querySelector(".signUpMesg").innerHTML = usersArr[i].email +" email already exists, please enter a new one  ";
            document.querySelector(".signUpMesg").style.color='red';
            usersArr.pop();
            return;

        }
    }

    document.querySelector(".signUpMesg").innerHTML = " success ";
    document.querySelector(".signUpMesg").style.color = "green";


}

function clear(){
      nameInput.value = '';
      emailInput.value = '';
      passwordInput.value = '';

}


function delete_(indx){

    // find index of required row
    usersArr.splice(indx,1);
    // console.log("delete");
    display();
}


function validate_URL(url_){



    var urlRegex =
      /^((http|https):\/\/)[-a-zA-Z0-9@:%._\\+~#?&\/\/=]{2,256}\.[a-z]{2,6}\b$/;

    return(urlRegex.test(url_));

}

function saveToLocal(){
    localStorage.setItem("usersArr",JSON.stringify(usersArr));
}
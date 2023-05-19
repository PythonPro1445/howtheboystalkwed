function checkpassword_aryanpage()
{   
     var passforroom6 = document.getElementById("passforroom6").value;

    if(passforroom6 === "aryan") {
        localStorage.setItem("passforroom6", passforroom6);
        window.location = "aryan.html";
        console.log("You're good to go!")
    }
    else {
        localStorage.setItem("passforroom6", passforroom6);
        window.location = "pg2index.html";
        console.log("You're not good to go!")
        alert("wrong Password, Try Again")
    }
}


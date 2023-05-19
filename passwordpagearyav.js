function checkpassword_aryavpage()
{   
     var passforroom5 = document.getElementById("passforroom5").value;

    if(passforroom5 === "aryav") {
        localStorage.setItem("passforroom5", passforroom5);
        
        window.location = "aryav.html";
        console.log("You're good to go!")
    }
    else {
        localStorage.setItem("passforroom5", passforroom5);
        window.location = "pg2index.html";
        console.log("You're not good to go!")
        alert("wrong Password, Try Again")
    }
}


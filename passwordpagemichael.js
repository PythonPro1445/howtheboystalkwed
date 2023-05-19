function checkpassword_michaelpage()
{   
     var passforroom2 = document.getElementById("passforroom2").value;

    if(passforroom2 === "michael") {
        localStorage.setItem("passforroom2", passforroom2);
        
        window.location = "michael.html";
        console.log("You're good to go!")
    }
    else {
        localStorage.setItem("passforroom2", passforroom2);
        window.location = "pg2index.html";
        console.log("You're not good to go!")
        alert("wrong Password, Try Again")
    }
}


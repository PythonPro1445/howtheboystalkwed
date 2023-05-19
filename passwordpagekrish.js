function checkpassword_krishpage()
{   
     var passforroom3 = document.getElementById("passforroom3").value;

    if(passforroom3 === "krish") {
        localStorage.setItem("passforroom3", passforroom3);
        
        window.location = "krish.html";
        console.log("You're good to go!")
    }
    else {
        localStorage.setItem("passforroom3", passforroom3);
        window.location = "pg2index.html";
        console.log("You're not good to go!")
        alert("wrong Password, Try Again")
    }
}


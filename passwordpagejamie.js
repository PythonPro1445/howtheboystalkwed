function checkpassword_jamiepage()
{   
     var passforroom4 = document.getElementById("passforroom4").value;

    if(passforroom4 === "jamie") {
        localStorage.setItem("passforroom4", passforroom4);
        
        window.location = "jamie.html";
        console.log("You're good to go!")
    }
    else {
        localStorage.setItem("passforroom4", passforroom4);
        window.location = "pg2index.html";
        console.log("You're not good to go!")
        alert("wrong Password, Try Again")
    }
}


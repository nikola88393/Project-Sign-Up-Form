function verifyPass(){
    let pass1 = document.getElementById("pass").value;
    let pass2 = document.getElementById("passRepeat").value;
    let match = document.querySelector("#passMatch");
    if(pass2 !== pass1){
        match.textContent = " Doesn't match";
    }
    else{
        match.textContent = "";
    }

    let length = document.querySelector("#pass1");
    if(pass1.value == ""){
        length.textContent = "";
    }
    else if(pass1.length < 8){
        length.textContent = " must be 8+ characters.";
    }
    else{
        length.textContent = "";
    }

}

document.getElementById("pass").addEventListener('input', verifyPass);
document.getElementById("passRepeat").addEventListener('input', verifyPass);



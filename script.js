function verifyPass(){
    let pass1 = document.getElementById("pass1");
    let pass2 = document.getElementById("pass2");
    if(pass1 =! pass2){
        console.log("password doesn't match");
    }
    else{
        console.log("password matches");
    }
}
verifyPass();
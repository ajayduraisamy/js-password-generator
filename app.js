const chars = {
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+{}[]<>?"
};

function generatePassword(){
    let pool = "";
    if(document.getElementById("upper").checked)
        pool += chars.upper;
    if(document.getElementById("numbers").checked)
        pool += chars.numbers;
    if(document.getElementById("symbols").checked)
        pool += chars.symbols;

    if(pool === ""){
        alert("Select at least one option");
        return;
    }

    const length = document.getElementById("length").value;
    let password = "";

    for(let i=0;i<length;i++){
        const rand = Math.floor(Math.random() * pool.length);
        password += pool[rand];
    }

    document.getElementById("password").value = password;
}

const chars = {
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+{}[]<>?"
};

// =========================
// Generate Password
// =========================
function generatePassword(){
    let pool = "";
    let strength = 0;

    if(document.getElementById("upper").checked){
        pool += chars.upper;
        strength++;
    }
    if(document.getElementById("numbers").checked){
        pool += chars.numbers;
        strength++;
    }
    if(document.getElementById("symbols").checked){
        pool += chars.symbols;
        strength++;
    }

    if(pool === ""){
        alert("Select at least one option");
        return;
    }

    const length = document.getElementById("length").value;
    let password = "";

    for(let i = 0; i < length; i++){
        const rand = Math.floor(Math.random() * pool.length);
        password += pool[rand];
    }

    document.getElementById("password").value = password;
    showStrength(strength, length);
}

// =========================
// Strength Indicator
// =========================
function showStrength(level, len){
    let text = "Weak";

    if(level >= 2 && len >= 10){
        text = "Medium";
    }

    if(level === 3 && len >= 12){
        text = "Strong";
    }

    const strengthEl = document.getElementById("strength");
    strengthEl.innerText = "Strength: " + text;
}

// =========================
// COPY TO CLIPBOARD 
// =========================
function copyPassword(){
    const passwordField = document.getElementById("password");

    if(passwordField.value === ""){
        alert("Generate a password first");
        return;
    }

    navigator.clipboard.writeText(passwordField.value)
        .then(() => {
            alert("Password copied ");
        })
        .catch(() => {
            alert("Copy failed ");
        });
}

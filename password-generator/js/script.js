let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")

document.getElementById("password-gen").addEventListener('click', function () {
    password1.textContent = passwordGenerator()
    password2.textContent = passwordGenerator()
})

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15

function passwordGenerator() {
    let password = ''
    for (let i = 0 ; i < passwordLength ; i++) {
        password += characters[Math.floor(Math.random() * characters.length)] 
    }
    return password
}


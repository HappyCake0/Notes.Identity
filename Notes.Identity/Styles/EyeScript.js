const passField = document.getElementById("pasField");
const showBtn = document.getElementById("eye");
showBtn.onclick = (() => {
    if (passField.type === "password") {
        passField.type = "text";
        showBtn.classList.add("hide-btn");
    } else {
        passField.type = "password";
        showBtn.classList.remove("hide-btn");
    }
});
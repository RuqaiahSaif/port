function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var moon = document.getElementById("moon");
    moon.classList.toggle("fa-sun");
}
let tmenu = document.querySelector(".toggle-menue");
let tdropmenue = document.getElementById("dropmenue");
tmenu.addEventListener('click', () => {
    if (tdropmenue.style.display === "none") {
        tdropmenue.style.display = "flex";
    }
    else {
        tdropmenue.style.display = "none";
    }

});
// Get the value of the input field with id="numb"
let sendBtn = document.getElementById("send");
let username = document.getElementById("fname");
let usemail = document.getElementById("email");
let umsg = document.getElementById("msg");

// If x is Not a Number or less than one or greater than 10
sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (username.value == "") {
        document.getElementById("erorr").innerHTML = "Please Enter your name";

    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!usemail.value.match(mailformat)) {
        document.getElementById("emailerorr").innerHTML = "You have entered an invalid email address!";

    }

    if (umsg.value.length < 20) {
        document.getElementById("msgErorr").innerHTML = "at less 20 letter";

    }

    else {
        return false;
    }
});


function OnMouseIn(elem) {
    elem.style.width = "320px";
    elem.style.hight = "320px";
    elem.style.opacity = 1;
}
function OnMouseOut(elem) {
    elem.style.width = "300px";
    elem.style.hight = "300px";
    elem.style.opacity = 0.7;
}
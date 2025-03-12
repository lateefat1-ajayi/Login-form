const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const error = document.getElementById("errorMssg");
const form = document.getElementById("form");



const usersCredentials = [
    {email: "lateefat@gmail.com", password: "ajayi0123"}, 
    {email: "abdullah@gmail.com", password: "adeosun012"}, 
    {email: "dolapo@gmail.com", password: "pizu0123"},
    {email: "ridwon@gmail.com", password: "redox0123"}, 
    {email: "muiz@gmail.com", password: "lekan0123"}, 
    {email: "feranmi@gmail.com", password: "alaba0123"}, 
    {email: "damilare@gmail.com", password: "dammy0123"}, 
    {email: "kabeer@gmail.com", password: "lawal0123"}, 
    {email: "idreez@gmail.com", password: "idreez0123"}
]

const login = (email, password) => {
    if (!email || !password) {
        return "please fill in the required fields";
    }
    if (password.length < 6) {
        return "Password must not be less than 6 letters";
    }
    const user = usersCredentials.find(user => user.email === email && user.password === password);

    if (user) {
        return `Hi ${email} you are now logged in`
    } 
    else {
        return "invalid credentials"
    }
};


form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = inputEmail.value;

    const password = inputPassword.value;

    const result = login(email, password);

    if (result.includes("logged in")) {
        alert(result);
        error.textContent = "";
    } else {
        error.textContent = result;
    }

});


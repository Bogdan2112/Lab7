var users = {
    "sereoja@gmail.com": "parola1",
    "igareok@gmail.com": "parola2",
    "bogdan@gmail.com": "parola3",
    "vizitiu@gmail.com": "parola4",
  };
  
  function login() {  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  

    if (users.hasOwnProperty(username) && users[username] === password) {
        alert("Logare reușită!");
    } else {
        alert("Nume de utilizator sau parolă incorecte!");
    }
  }
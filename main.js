let navLinks = document.getElementById("NavLinks");

function showMenu(){
    navLinks.style.right = "0";
}

function hideMenu(){
    navLinks.style.right = "-200px";
}

/* Timer */
const seconds = document.querySelector(".seconds .number"),
  minutes = document.querySelector(".minutes .number"),
  hours = document.querySelector(".hours .number"),
  days = document.querySelector(".days .number");

let secValue = 11,
  minValue = 2,
  hourValue = 2,
  dayValue = 9;

const timeFunction = setInterval(() => {
  secValue--;

  if (secValue === 0) {
    minValue--;
    secValue = 60;
  }
  if (minValue === 0) {
    hourValue--;
    minValue = 60;
  }
  if (hourValue === 0) {
    dayValue--;
    hourValue = 24;
  }

  if (dayValue === 0) {
    clearInterval(timeFunction);
  }
  seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
  minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
  hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
  days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
}, 1000); 


///// CONTACT


function validate() {
    let name = document.querySelector(".name"),
        email = document.querySelector(".email"),
        subject = document.querySelector(".subject"),
        msg = document.querySelector(".message"),
        sendBtn = document.querySelector(".send-btn");

    sendBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || subject.value == "" || msg.value == "") {
            emptyerror();
        } else {
            sendmail(name.value, email.value, subject.value, msg.value);
            succes();
        }
    });
}
validate();

let sendmail = (name, email, subject, msg) => emailjs.send("service_sqkk60m", "template_00d0dmc", {
    to_name: name,
    from_name: name,
    email : email,
    subject: subject,
    message: msg,
});

let emptyerror = () => swal({
    title: "Oh No...",
    text: "Fields cannot be empty!",
    icon: "error",
});

let succes = () => swal({
    title: "Email sent successfully",
    text: "we try to reply in 24 hours",
    icon: "success",
});



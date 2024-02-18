document.getElementById("btn-scroll").addEventListener("click", function () {
  window.scrollTo(0, document.body.scrollHeight);
});

const allSeats = document.getElementsByClassName("seat");
let bookedSeats = 0;
let availableSeats = 40;
let totalAmount = 0;
for (const seat of allSeats) {
  seat.addEventListener("click", function (e) {
    e.target.style.backgroundColor = "#1cd100ff";
    totalAmount = totalAmount + 550;
    if (bookedSeats < 40) {
      bookedSeats = bookedSeats + 1;
      setInnerText("booked-seat", bookedSeats);
    } else {
      alert("No seat available");
    }
    availableSeats = 40 - bookedSeats;
    setInnerText("availavble-seat", availableSeats);
    setInnerText("total-price", totalAmount);
  });
}

document.getElementById("next-btn").addEventListener("click", function () {
  const name = getValue("enter-name");

  const number = getValue("phone-number");

  const email = getValue("email-id");
  const submitBtn = document.getElementById("next-btn");

  if (name === "" || number === "" || email === "") {
    submitBtn.disable = true;
    alert("you have to fill the form ");
  } else {
    addClassList("header");
    addClassList("main");
    addClassList("footer");
    addClassList("footer");
    removeClassList("new-section");
  }
});
document.getElementById("go-home").addEventListener("click", function () {
  removeClassList("header");
  removeClassList("main");
  removeClassList("footer");
  removeClassList("footer");
  addClassList("new-section");
});

document.getElementById("btn-scroll").addEventListener("click", function () {
  window.scrollTo(0, document.body.scrollHeight);
});

const allSeats = document.getElementsByClassName("seat");
let bookedSeats = 0;
let availableSeats = 40;
let totalAmount = 0;
let grandTotal = 0;
for (const seat of allSeats) {
  seat.addEventListener("click", function (e) {
    e.target.style.backgroundColor = "#1cd100ff";
    const tikitNumber = e.target.innerText;
    console.log(tikitNumber);
    totalAmount = totalAmount + 550;
    if (bookedSeats < 4) {
      bookedSeats = bookedSeats + 1;
      grandTotal = grandTotal + 550;
      setInnerText("booked-seat", bookedSeats);
      setInnerText("grand-total", grandTotal);
    } else {
      alert("You can only select four tickets");
      return bookedSeats;
    }
    availableSeats = 40 - bookedSeats;
    setInnerText("availavble-seat", availableSeats);
    setInnerText("total-price", totalAmount);

    const tikitContainer = document.getElementById("tikit-container");
    const li = document.createElement("li");
    const p1 = document.createElement("p");
    p1.innerText = tikitNumber;
    li.appendChild(p1);
    const p2 = document.createElement("p");
    p2.innerText = "Economy";
    li.appendChild(p2);
    const p3 = document.createElement("p");
    p3.innerText = "550";
    li.appendChild(p3);
    tikitContainer.appendChild(li);
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

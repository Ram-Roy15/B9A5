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

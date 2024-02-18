// document.addEventListener("click", function (e) {

//   for (const seat of allSeats) {
//     console.log(e.target.seat);
//   }
// });
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
const totalPrice = document.getElementById("total-price").innerText;
console.log(typeof totalPrice);

function converToNumber(id) {
  const stringNumber = document.getElementById(id).innerText;
  const number = parseInt(stringNumber);
  return number;
}

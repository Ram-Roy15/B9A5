function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function converToNumber(id) {
  const stringNumber = document.getElementById(id).innerText;
  const number = parseInt(stringNumber);
  return number;
}
function getValue(id) {
  const value = document.getElementById(id).value;
  return value;
}

function addClassList(id) {
  const name = document.getElementById(id);
  name.classList.add("hidden");
}
function removeClassList(id) {
  const name = document.getElementById(id);
  name.classList.remove("hidden");
}

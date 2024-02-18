function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function converToNumber(id) {
  const stringNumber = document.getElementById(id).innerText;
  const number = parseInt(stringNumber);
  return number;
}

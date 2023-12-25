function res() {

  const rupees = document.getElementById("data").value;

  const dollar = (parseInt(rupees) / 83.17).toFixed(3);

  document.getElementById("output").innerText =` ${dollar} Dollar`;


  }
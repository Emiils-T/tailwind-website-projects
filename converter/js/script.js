
let input = document.getElementById("input-field");
let inputFieldValue = input.value
const convertBtn = document.getElementById("convert-btn");



convertBtn.addEventListener("click", function () {
  console.log(input.value)

  const lengthInFeet = (input.value * 3.281).toFixed(3);
  const lengthInMeters = (input.value * 0.304).toFixed(3);
  const liters = (input.value * 0.264).toFixed(3);
  const galons = (input.value * 3.787).toFixed(3);

  const pounds = (input.value * 2.204).toFixed(3);
  const kilograms = (input.value * 0.453).toFixed(3);

  let lengthText = `${input.value} meters = ${lengthInFeet} feet | ${input.value} feet = ${lengthInMeters} meters`;
  let volumeText = `${input.value} liters = ${galons} galons | ${input.value} galons = ${liters} liters`;
  let massText = `${input.value} kilograms = ${pounds} pounds | ${input.value} pounds = ${kilograms} kilograms`;

  document.getElementById("length-output").textContent = lengthText;
  document.getElementById("volume-output").textContent = volumeText;
  document.getElementById("mass-output").textContent = massText;
});

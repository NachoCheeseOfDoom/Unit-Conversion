const metersToFeetEl = document.getElementById('metersToFeet');
const litersToGallonsEl = document.getElementById('litersToGallons');
const kiloToPoundEl = document.getElementById('kiloToPound');


const unitValue = document.getElementById('unitValueInput');
const convertBtn = document.getElementById('convert-Btn');

unitValue.value = ''
unitValue.focus();

unitValue.addEventListener("keydown", function (e) { if (13 == e.keyCode) { convertBtn.click(), unitValue.value = '' } });

convertBtn.addEventListener('click', function () {

  if (!unitValue.value) {
    return
  }
  else {
    const feet = (+unitValue.value * 3.281).toFixed(3)
    const meters = (+unitValue.value * .3048).toFixed(3)
    metersToFeetEl.textContent = `${unitValue.value} meters = ${feet} feet | ${unitValue.value} feet = ${meters} meters`

    const liters = (+unitValue.value * .264).toFixed(3)
    const gallons = (+unitValue.value * 3.78541).toFixed(3)
    litersToGallonsEl.textContent = `${unitValue.value} liters = ${liters} gallons | ${unitValue.value} gallons = ${gallons} liters`

    const kilos = (+unitValue.value * 2.204).toFixed(3)
    const pounds = (+unitValue.value * .453592).toFixed(3)
    kiloToPoundEl.textContent = `${unitValue.value} kilos= ${kilos} pounds | ${unitValue.value} pounds = ${pounds} kilos`
    unitValue.focus();
    unitValue.value = ''
  }
});
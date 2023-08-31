const categorySelect = document.getElementById('category');
const inputUnitSelect = document.getElementById('inputUnit');
const outputUnitSelect = document.getElementById('outputUnit');
const inputValue = document.getElementById('inputValue');
const outputValue = document.getElementById('outputValue');
const convertBtn = document.getElementById('convertBtn');

categorySelect.addEventListener('change', populateUnits);

function populateUnits() {
    inputUnitSelect.innerHTML = '';
    outputUnitSelect.innerHTML = '';

    const selectedCategory = categorySelect.value;

    if (selectedCategory === 'length') {
        addOption('millimeters', 'Millimeters');
        addOption('centimeters', 'Centimeters');
        addOption('meters', 'Meters');
        addOption('kilometers', 'Kilometers');
        addOption('inches', 'Inches');
        addOption('feets', 'Feets');
        addOption('yards', 'Yards');
        addOption('miles', 'Miles');
    } else if(selectedCategory === 'volume'){
        addOption('milliliters', 'Milliliters');
        addOption('liters', 'Liters');
    } else if(selectedCategory === 'mass'){
        addOption('milligrams', 'Milli Grams');
        addOption('grams', 'Grams');
        addOption('kilograms', 'Kilograms');        
        addOption('pounds', 'Pounds');
        addOption('metrictons', 'Metric Tons');
    } else if (selectedCategory === 'temperature') {
        addOption('celsius', 'Celsius');
        addOption('fahrenheit', 'Fahrenheit');
        addOption('kelvin', 'Kelvin');
    } else if(selectedCategory === 'time'){
        addOption('seconds', 'Seconds');
        addOption('minutes', 'Minutes');
        addOption('hours', 'Hours');
        addOption('days','Days');
        addOption('weeks','Weeks');
        addOption('months','Months');
        addOption('years','Years');
    } else if(selectedCategory === 'speed'){
        addOption('meterpersecond','Meter Per Second-m/s');
        addOption('kilometerperhour','Kilometer Per Hour-km/h');
    } else if(selectedCategory === 'angle'){
         addOption('degrees','Degrees');
         addOption('radians','Radians');
    } 
    inputUnitSelect.dispatchEvent(new Event('change'));
}

function addOption(value, label) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = label;
    inputUnitSelect.appendChild(option.cloneNode(true));
    outputUnitSelect.appendChild(option);
}

convertBtn.addEventListener('click', convertUnits);

function convertUnits() {
    const inputValueValue = parseFloat(inputValue.value);
    const inputUnitValue = inputUnitSelect.value;
    const outputUnitValue = outputUnitSelect.value;

    let convertedValue;

    if (categorySelect.value === 'length') {
        convertedValue = convertLength(inputValueValue, inputUnitValue, outputUnitValue);
    } else if(categorySelect.value ==='volume'){
        convertedValue = convertVolume(inputValueValue, inputUnitValue, outputUnitValue);
    } else if(categorySelect.value === 'mass'){
        convertedValue = convertMass(inputValueValue, inputUnitValue, outputUnitValue);
    } else if (categorySelect.value === 'temperature') {
        convertedValue = convertTemperature(inputValueValue, inputUnitValue, outputUnitValue);
    } else if(categorySelect.value ==='time'){
        convertedValue = convertTime(inputValueValue, inputUnitValue, outputUnitValue);
    } else if(categorySelect.value ==='speed'){
        convertedValue = convertSpeed(inputValueValue, inputUnitValue, outputUnitValue);
    } else if(categorySelect.value ==='angle'){
        convertedValue = convertAngle(inputValueValue, inputUnitValue, outputUnitValue);
    }
    outputValue.value = convertedValue.toFixed(2);
}

function convertLength(value, fromUnit, toUnit) {
    // const conversionRates = {
    //     meters: 1,
    //     inches: 39.3701,
    // };
    let convertedValue;
    // return value * conversionRates[fromUnit] / conversionRates[toUnit];
    if (fromUnit === 'centimeters' && toUnit === 'millimeters') {
        convertedValue = value * 10;
    } else if(fromUnit === 'millimeters' && toUnit === 'centimeters'){
        convertedValue = value / 10;
    } else if(fromUnit === 'millimeters' && toUnit === 'meters'){
        convertedValue = value / 1000;
    } else if(fromUnit === 'meters' && toUnit === 'millimeters'){
        convertedValue = value * 1000;
    } else if(fromUnit === 'millimeters' && toUnit === 'kilometers'){
        convertedValue = value / 1000000 ;
    } else if(fromUnit === 'kilometers' && toUnit === 'millimeters'){
        convertedValue = value * 1000000 ;
    } else if(fromUnit === 'millimeters' && toUnit === 'inches'){
        convertedValue = value / 25.4 ;
    } else if(fromUnit === 'inches' && toUnit === 'millimeters'){
        convertedValue = value * 25.4 ;
    } else if(fromUnit === 'centimeters' && toUnit === 'inches'){
        convertedValue = value / 2.54 ;
    } else if(fromUnit === 'inches' && toUnit === 'centimeters'){
        convertedValue = value * 2.54 ;
    } else if(fromUnit === 'meters' && toUnit === 'inches'){
        convertedValue = value * 39.37 ;
    } else if(fromUnit === 'inches' && toUnit === 'meters'){
        convertedValue = value / 39.37 ;
    } else if(fromUnit === 'kilometers' && toUnit === 'inches'){
        convertedValue = value * 39370;
    } else if(fromUnit === 'inches' && toUnit === 'kilometers'){
        convertedValue = value / 39370 ;
    } else if(fromUnit === 'centimeters' && toUnit === 'meters'){
        convertedValue = value /100 ;
    } else if(fromUnit === 'centimeters' && toUnit === 'kilometers'){
        convertedValue = value / 100000 ;
    } else if(fromUnit === 'meters' && toUnit === 'centimeters'){
        convertedValue = value * 100 ;
    } else if(fromUnit === 'meters' && toUnit === 'kilometers'){
        convertedValue = value / 1000 ;
    } else if(fromUnit === 'kilometers' && toUnit === 'centimeters'){
        convertedValue = value * 100000 ;
    } else if(fromUnit === 'kilometers' && toUnit === 'meters'){
        convertedValue = value * 1000 ;
    } else if(fromUnit === 'millimeters' && toUnit === 'feets'){
        convertedValue = value / 304.8 ;
    } else if(fromUnit === 'centimeters' && toUnit === 'feets'){
        convertedValue = value / 30.48 ;
    } else if(fromUnit === 'meters' && toUnit === 'feets'){
        convertedValue = value * 3.281 ;
    } else if(fromUnit === 'kilometers' && toUnit === 'feets'){
        convertedValue = value * 3281 ;
    } else if(fromUnit === 'inches' && toUnit === 'feets'){
        convertedValue = value / 12 ;
    } else if(fromUnit === 'feets' && toUnit === 'millimeters'){
        convertedValue = value * 304.8;
    } else if(fromUnit === 'feets' && toUnit === 'centimeters'){
        convertedValue = value * 30.48;
    } else if(fromUnit === 'feets' && toUnit === 'meters'){
        convertedValue = value / 3.281 ;
    } else if(fromUnit === 'feets' && toUnit === 'kilometers'){
        convertedValue = value / 3281 ;
    } else if(fromUnit === 'feets' && toUnit === 'inches'){
        convertedValue = value * 12;
    } else if(fromUnit === 'yards' && toUnit === 'millimeters'){
        convertedValue = value * 914.4 ; 
    } else if(fromUnit === 'yards' && toUnit === 'centimeters'){
        convertedValue = value * 91.44 ; 
    } else if(fromUnit === 'yards' && toUnit === 'meters'){
        convertedValue = value / 1.094 ; 
    } else if(fromUnit === 'yards' && toUnit === 'kilometers'){
        convertedValue = value / 1094 ; 
    } else if(fromUnit === 'yards' && toUnit === 'inches'){
        convertedValue = value * 36 ; 
    } else if(fromUnit === 'yards' && toUnit === 'feets'){
        convertedValue = value * 3 ; 
    } else if(fromUnit === 'millimeters' && toUnit === 'yards'){
        convertedValue = value / 914.4 ;
    } else if(fromUnit === 'centimeters' && toUnit === 'yards'){
        convertedValue = value / 91.44 ;
    } else if(fromUnit === 'meters' && toUnit === 'yards'){
        convertedValue = value * 1.094;
    } else if(fromUnit === 'kilometers' && toUnit === 'yards'){
        convertedValue = value * 1094;
    } else if(fromUnit === 'feets' && toUnit === 'yards'){
        convertedValue = value / 3;
    } else if(fromUnit === 'inches' && toUnit === 'yards'){
        convertedValue = value / 36;
    } else if(fromUnit === 'miles' && toUnit === 'millimeters'){
        convertedValue = value * 1,609,344;
    } else if(fromUnit === 'miles' && toUnit === 'centimeters'){
        convertedValue = value * 160,934.4;
    } else if(fromUnit === 'miles' && toUnit === 'meters'){
        convertedValue = value * 1,609.344;
    } else if(fromUnit === 'miles' && toUnit === 'kilometers'){
        convertedValue = value * 1.609344;
    } else if(fromUnit === 'miles' && toUnit === 'yards'){
        convertedValue = value * 1,760;
    } else if(fromUnit === 'miles' && toUnit === 'feets'){
        convertedValue = value * 5,280;
    } else if(fromUnit === 'miles' && toUnit === 'inches'){
        convertedValue = value * 63,360; 
    } else if(fromUnit === 'millimeters' && toUnit === 'miles'){
        convertedValue = value / 1,609,344;
    } else if(fromUnit === 'centimeters' && toUnit === 'miles'){
        convertedValue = value / 160,934.4;
    } else if(fromUnit === 'meters' && toUnit === 'miles'){
        convertedValue = value / 1,609.344;
    } else if(fromUnit === 'kilometers' && toUnit === 'miles'){
        convertedValue = value / 1.6093442;
    } else if(fromUnit === 'yards' && toUnit === 'miles'){
        convertedValue = value / 1,760;
    } else if(fromUnit === 'feets' && toUnit === 'miles'){
        convertedValue = value / 5,280;
    } else if(fromUnit === 'inches' && toUnit === 'miles'){
        convertedValue = value / 63,360;
    }
     else {
        convertedValue = value;
    }
        return convertedValue;
}

function convertVolume(value , fromUnit ,toUnit){
    let convertedValue;
    if(fromUnit === 'liters' && toUnit === 'milliliters'){
        convertedValue = value * 1000;
    } else if(fromUnit =='milliliters' && toUnit === 'liters'){
        convertedValue = value / 1000;
    } else {
        convertedValue = value;
    }
    return convertedValue;
}

function convertMass(value ,fromUnit ,toUnit){
    let convertedValue;
    if (fromUnit === 'milligrams' && toUnit === 'grams') {
        convertedValue = value / 1000; 
    } else if(fromUnit === 'milligrams' && toUnit === 'kilograms') {
        convertedValue = value / 1000000;
    } else if(fromUnit === 'milligrams' && toUnit === 'pounds') {
        convertedValue = value / 453600;
    } else if(fromUnit === 'milligrams' && toUnit === 'metrictons') {
        convertedValue = value / 1000000000;
    } else if(fromUnit === 'grams' && toUnit === 'milligrams') {
        convertedValue = value * 1000; 
    } else if(fromUnit === 'grams' && toUnit === 'kilograms') {
        convertedValue = value / 1000;
    } else if(fromUnit === 'grams' && toUnit === 'pounds') {
        convertedValue = value / 453.6;
    } else if(fromUnit === 'grams' && toUnit === 'metrictons') {
        convertedValue = value / 1000000;
    } else if(fromUnit === 'kilograms' && toUnit === 'milligrams') {
        convertedValue = value * 1000000;
    } else if(fromUnit === 'kilograms' && toUnit === 'grams') {
        convertedValue = value * 1000;
    } else if(fromUnit === 'kilograms' && toUnit === 'pounds') {
        convertedValue = value * 2.205;
    } else if(fromUnit === 'kilograms' && toUnit === 'metrictons') {
        convertedValue = value / 1000;
    } else if(fromUnit === 'pounds' && toUnit === 'milligrams') {
        convertedValue = value * 453600;
    } else if(fromUnit === 'pounds' && toUnit === 'grams') {
        convertedValue = value * 453.6;
    } else if(fromUnit === 'pounds' && toUnit === 'kilograms') {
        convertedValue = value / 2.205;
    } else if(fromUnit === 'pounds' && toUnit === 'metrictons') {
        convertedValue = value / 2205;
    } else if(fromUnit === 'metrictons' && toUnit === 'milligrams') {
        convertedValue = value * 1000000000;
    } else if(fromUnit === 'metrictons' && toUnit === 'grams') {
        convertedValue = value * 1000000;
    } else if(fromUnit === 'metrictons' && toUnit === 'kilograms') {
        convertedValue = value * 1000;
    } else if(fromUnit === 'metrictons' && toUnit === 'pounds') {
        convertedValue = value * 2205;
    }
}

function convertTemperature(value, fromUnit, toUnit) {
    let convertedValue;

    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        convertedValue = (value * 9 / 5) + 32;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        convertedValue = (value - 32) * 5 / 9;
    } else if(fromUnit === 'celsius' && toUnit === 'kelvin'){
        convertedValue = (value + 273.15);
    } else if(fromUnit === 'kelvin' && toUnit === 'celsius'){
        convertedValue = (value - 273.15);
    } else if(fromUnit === 'fahrenheit' && toUnit === 'kelvin'){
        convertedValue = (value-32)* 5/9 + 273.15 ;
    } else if(fromUnit === 'kelvin' && toUnit === 'fahrenheit'){
        convertedValue = (value-273.15) * 9/5 + 32;
    }
    else {
        convertedValue = value;
    }

    return convertedValue;
}

function convertSpeed (value, fromUnit, toUnit){
    let convertedValue;
    if(fromUnit === 'meterpersecond' && toUnit === 'kilometerperhour'){
        convertedValue = value * (18/5);
    } else if(fromUnit === 'kilometerperhour' && toUnit === 'meterpersecond'){
        convertedValue = value * (5/18); 
    } else{
        convertedValue = value;
    }
    return convertedValue;
}

function convertAngle(value, fromUnit, toUnit){
    let convertedValue;
    if(fromUnit === 'degrees' && toUnit === 'radians'){
        convertedValue = value * 0.01745;
    }
    else if(fromUnit === 'radians' && toUnit === 'degrees'){
        convertedValue = value *  57.296;
    }else{
        convertedValue = value;
    }
    return convertedValue;
}

function convertTime(value, fromUnit, toUnit){
    let convertedValue;
    if(fromUnit === 'seconds' && toUnit === 'minutes'){
        convertedValue = value / 60;
    } else if(fromUnit === 'seconds' && toUnit === 'hours'){
        convertedValue = value / 3600;
    } else if(fromUnit === 'seconds' && toUnit === 'days'){
        convertedValue = value / 86400;
    } else if(fromUnit === 'seconds' && toUnit === 'weeks'){
        convertedValue = value / 604800;
    } else if(fromUnit === 'seconds' && toUnit === 'months'){
        convertedValue = value / 2,629,746;
    } else if(fromUnit === 'seconds' && toUnit === 'years'){
        convertedValue = value / 31,556,952;
    } else if(fromUnit === 'minutes' && toUnit === 'seconds'){
        convertedValue = value * 60;
    } else if(fromUnit === 'minutes' && toUnit === 'hours'){
        convertedValue = value / 60;
    } else if(fromUnit === 'minutes' && toUnit === 'days'){
        convertedValue = value / 1440;
    } else if(fromUnit === 'minutes' && toUnit === 'weeks'){
        convertedValue = value / 10080;
    } else if(fromUnit === 'minutes' && toUnit === 'months'){
        convertedValue = value / 43800;
    } else if(fromUnit === 'minutes' && toUnit === 'years'){
        convertedValue = value / 525600;
    } else if(fromUnit === 'hours' && toUnit === 'minutes'){
        convertedValue = value * 60;
    } else if(fromUnit === 'hours' && toUnit === 'seconds'){
        convertedValue = value * 3600;
    } else if(fromUnit === 'hours' && toUnit === 'days'){
        convertedValue = value / 24;
    } else if(fromUnit === 'hours' && toUnit === 'weeks'){
        convertedValue = value / 168;
    } else if(fromUnit === 'hours' && toUnit === 'months'){
        convertedValue = value / 730;
    } else if(fromUnit === 'hours' && toUnit === 'years'){
        convertedValue = value / 8760;
    } else if(fromUnit === 'days' && toUnit === 'minutes'){
        convertedValue = value * 1440;
    } else if(fromUnit === 'days' && toUnit === 'hours'){
        convertedValue = value * 24;
    } else if(fromUnit === 'days' && toUnit === 'seconds'){
        convertedValue = value * 86400;
    } else if(fromUnit === 'days' && toUnit === 'weeks'){
        convertedValue = value / 7;
    } else if(fromUnit === 'days' && toUnit === 'months'){
        convertedValue = value / 30.417;
    } else if(fromUnit === 'days' && toUnit === 'years'){
        convertedValue = value / 365;
    } else if(fromUnit === 'weeks' && toUnit === 'seconds'){
        convertedValue = value * 604800;
    } else if(fromUnit === 'weeks' && toUnit === 'minutes'){
        convertedValue = value * 10080;
    } else if(fromUnit === 'weeks' && toUnit === 'hours'){
        convertedValue = value * 168;
    } else if(fromUnit === 'weeks' && toUnit === 'days'){
        convertedValue = value * 7;
    } else if(fromUnit === 'weeks' && toUnit === 'months'){
        convertedValue = value / 4.345;
    } else if(fromUnit === 'weeks' && toUnit === 'years'){
        convertedValue = value / 52.143;
    } else if(fromUnit === 'months' && toUnit === 'seconds'){
        convertedValue = value * 2,629,746 ;
    } else if(fromUnit === 'months' && toUnit === 'minutes'){
        convertedValue = value * 43800;
    } else if(fromUnit === 'months' && toUnit === 'hours'){
        convertedValue = value * 730;
    } else if(fromUnit === 'months' && toUnit === 'days'){
        convertedValue = value * 30.417;
    } else if(fromUnit === 'months' && toUnit === 'weeks'){
        convertedValue = value * 4.345;
    } else if(fromUnit === 'months' && toUnit === 'years'){
        convertedValue = value / 12;
    } else if(fromUnit === 'years' && toUnit === 'seconds'){
        convertedValue = value * 31,556,952;
    } else if(fromUnit === 'years' && toUnit === 'minutes'){
        convertedValue = value * 525600;
    } else if(fromUnit === 'years' && toUnit === 'hours'){
        convertedValue = value * 8760;
    } else if(fromUnit === 'years' && toUnit === 'days'){
        convertedValue = value * 365;
    } else if(fromUnit === 'years' && toUnit === 'weeks'){
        convertedValue = value * 52.143;
    } else if(fromUnit === 'years' && toUnit === 'months'){
        convertedValue = value * 12;
    } else {
        convertedValue = value;
    }
    return convertedValue;
}
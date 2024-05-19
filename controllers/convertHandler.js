function isValidNumber(str) {
  return /^(\d+(\.\d+)?|\d+(\.\d+)?\/\d+)$/.test(str);
}

function ConvertHandler() {
  this.getNum = function(input) {
    // Normalize the input by removing spaces and converting to lowercase.
    let normalizedInput = input.toLowerCase().replace(/\s+/g, '');
    
    // Remove all alphabetic characters not involved in fraction notation.
    // Note: This simplistic removal might not correctly handle malformed input like "3l/2gal".
    normalizedInput = normalizedInput.replace(/[a-z]+/g, '');
  
    // Check if the input is empty after removing units.
    if (!normalizedInput) {
      return "1"; // Default to "1" if input is empty.
    }
  
    // Function to check if the input is a valid number or a valid fraction.
    function isValidNumber(str) {
      return /^\d+(\.\d+)?(\/\d+(\.\d+)?)?$/.test(str); // This regex supports integers, decimals, and fractions like 3/2.3
    }
  
    // Validate the remaining input.
    if (isValidNumber(normalizedInput)) {
      return normalizedInput;
    } else {
      return 'invalid number';
    }
  };
  this.getUnit = function(input) {
    let number = this.getNum(input);
    let result = input.toLowerCase().replace(number, "");
    result = result.replace(/\s+/g, '');
    result = result.replace(/[^a-zA-Z]+/g, '');
    if (!["gal", "l", "lbs", "kg", "km", "mi"].includes(result)) {
      return "invalid unit";
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    if (initUnit.toLowerCase() == "gal") {
      return "L";
    } else if (initUnit.toLowerCase() == "l") {
      return "gal";
    } else if (initUnit.toLowerCase() == "mi") {
      return "km";
    } else if (initUnit.toLowerCase() == "km") {
      return "mi";
    } else if (initUnit.toLowerCase() == "lbs") {
      return "kg";
    } else if (initUnit.toLowerCase() == "kg") {
      return "lbs";
    } else {
      return undefined;
    }
  };

  this.spellOutUnit = function(unit) {
    if (unit.toLowerCase() == "gallon") {
      return "gal";
    } else if (unit.toLowerCase() == "liter") {
      return "L";
    } else if (unit.toLowerCase() == "mile") {
      return "mi";
    } else if (unit.toLowerCase() == "kilometer") {
      return "km";
    } else if (unit.toLowerCase() == "pounds") {
      return "lbs";
    } else if (unit.toLowerCase() == "kilogram") {
      return "kg";
    } else {
      return undefined;
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result = null;
    initUnit = initUnit.toLowerCase()
    if (initUnit == "gal") {
      return (initNum * galToL * 100) / 100 + " L";
    } else if (initUnit == "lbs") {
      return (initNum * lbsToKg * 100) / 100 + " kg";
    } else if (initUnit == "mi") {
      return (initNum * miToKm * 100) / 100 + " km";
    } else if (initUnit == "l") {
      return ((initNum / galToL) * 100) / 100 + " gal";
    } else if (initUnit == "kg") {
      return ((initNum / lbsToKg) * 100) / 100 + " lbs";
    } else if (initUnit == "km") {
      return ((initNum / miToKm) * 100) / 100 + " mi";
    } else {
      return "invalid unit";
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;

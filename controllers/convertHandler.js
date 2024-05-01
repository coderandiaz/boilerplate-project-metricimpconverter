function isValidNumber(str) {
  return /^(\d+(\.\d+)?|\d+(\.\d+)?\/\d+)$/.test(str);
}

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = input
      .toLowerCase()
      .replace("gal", "")
      .replace("lbs", "")
      .replace("l", "")
      .replace("km", "")
      .replace("mi", "")
      .replace("kg", "");
    if (!result) {
      return "1";
    }
    if (isValidNumber(result)) {
      return result;
    } else {
      throw new Error('Input must be a number');
    }
  };
  
  this.getUnit = function(input) {
    let number = this.getNum(input);
    let result = input.toLowerCase().replace(number, "");
    if (!["gal", "l", "lbs", "kg", "km", "mi"].includes(result)) {
      throw new Error("Unit not allowed")
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
    if (initUnit == "gal") {
      return Math.round(initNum * galToL * 100) / 100 + "L";
    } else if (initUnit == "lbs") {
      return Math.round(initNum * lbsToKg * 100) / 100 + "kg";
    } else if (initUnit == "mi") {
      return Math.round(initNum * miToKm * 100) / 100 + "km";
    } else if (initUnit == "l") {
      return Math.round((initNum / galToL) * 100) / 100 + "gal";
    } else if (initUnit == "kg") {
      return Math.round((initNum / lbsToKg) * 100) / 100 + "lbs";
    } else if (initUnit == "km") {
      return Math.round((initNum / miToKm) * 100) / 100 + "mi";
    } else {
      throw new Error("Unit not allowed");
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;

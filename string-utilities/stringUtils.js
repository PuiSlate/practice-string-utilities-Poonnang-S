function capitalize(str) {
    if (typeof str !== "string" || str.length === 0) { //validator for Edge case
    throw new Error("The input must be a non-empty string");
  }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str) {
    if (typeof str !== "string") { //validator for Edge case
    throw new Error("The input must be a string");
}
    return str.split("").reverse().join("");
}

function contains(str, subStr) {
    if (typeof str !== "string" || typeof subStr !== "string") { //validator for Edge case
    throw new Error("Both arguments must be strings");
    }

    if (subStr.length === 0) {
    throw new Error("Please provide a non-empty string");
    }

    return str.includes(subStr);
}


module.exports = {
    capitalize, 
    reverse, 
    contains
}

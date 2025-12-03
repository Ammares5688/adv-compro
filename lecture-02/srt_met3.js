//gencode.js
function generateTempId() {
    const randomPart = Math.random().toString(36).substring(2, 8);
    return randomPart.toUpperCase();
}

const orderID = generateTempId();
console.log(`Your temporary order ID is: ${orderID}`);
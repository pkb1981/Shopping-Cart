// creating function for Products number calculation
function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    // condition for case number increasing
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    // condition for case number decreasing
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update case price alongside case number
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate total
    calculateTotal();
}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}


// phone number increase event
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});
// phone number decrease event
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});
// handle case number increase event
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});
// handle case number decrease event
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
});